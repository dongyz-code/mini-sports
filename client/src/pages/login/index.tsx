import React, { useState } from 'react';
import { View } from '@tarojs/components';
import { useLoad } from '@tarojs/taro';
import { Button, ButtonProps } from '@nutui/nutui-react-taro';
import css from './index.module.scss';

export default function Login() {
  const onGetPhoneNumber: ButtonProps['onGetPhoneNumber'] = (e) => {
    console.log('e', e.detail);
  };
  useLoad(() => {});

  return (
    <View className={css['login']}>
      <Button className={css['login-btn']} type="primary" openType="getPhoneNumber" onGetPhoneNumber={onGetPhoneNumber}>
        立即登录
      </Button>
    </View>
  );
}
