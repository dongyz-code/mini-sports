import { FC, useEffect, useState } from 'react';
import Taro, { useRouter } from '@tarojs/taro';
import { useMount } from 'ahooks';
import { Dialog } from '@nutui/nutui-react-taro';
import { useUserStore } from '@/model/user';
import { getNeedLoginPage } from './util';

interface LoginModalProps {
  title?: string;
}

const LoginModal: FC<LoginModalProps> = ({ title }) => {
  const { access_token, login, register, isUnRegister } = useUserStore();
  const router = useRouter();

  const need = getNeedLoginPage(router.path);
  const getUserProfile = async () => {
    const { userInfo } = await Taro.getUserProfile({
      lang: 'zh_CN',
      desc: '用于完善会员资料',
    });

    const { code } = await Taro.login();

    await register(code, userInfo);

    return () => {
      console.log(123);
    };
  };

  const onCancelLogin = () => {
    Taro.switchTab({
      url: '/pages/index/index',
    });
  };

  useMount(async () => {
    if (access_token) {
      return;
    }

    const { code } = await Taro.login();
    await login(code);
  });

  return (
    <Dialog
      title={title ?? need?.title}
      visible={!!need && isUnRegister}
      confirmText="去登录"
      cancelText="不登录"
      onConfirm={getUserProfile}
      onCancel={onCancelLogin}
      closeOnOverlayClick={false}
      lockScroll
    ></Dialog>
  );
};

export default LoginModal;
