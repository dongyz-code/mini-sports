import { create } from 'zustand';
import Taro from '@tarojs/taro';
import { httpLogin, httpResister, LoginResponse } from '@/services';
import { User } from '@/types';

interface UserStore {
  User?: User;
  access_token?: string;
  loading: boolean;
  isUnRegister: boolean;
  login(code: string): Promise<void>;
  register(code: string, userInfo: Taro.UserInfo): Promise<void>;
  logout(): void;
}

export const useUserStore = create<UserStore>((set) => ({
  User: undefined,
  access_token: undefined,
  loading: false,
  isUnRegister: false,
  login: async (code?: string) => {
    if (!code) {
      const loginRes = await Taro.login();
      code = loginRes.code;
    }

    set({
      loading: true,
    });
    const res = await httpLogin(code);

    if (res.code === 200) {
      const { user, access_token } = res.data;
      set({
        User: user,
        access_token: access_token,
        loading: false,
        isUnRegister: false,
      });
    } else if (res.code === 403) {
      set({
        isUnRegister: true,
      });
    }
  },
  register: async (code, userInfo) => {
    const res = await httpResister({
      code,
      username: userInfo.nickName,
      avatar: userInfo.avatarUrl,
      gender: userInfo.gender === 1 ? 'M' : 'F',
    });
    if (res.code === 200) {
      const { user, access_token } = res.data;
      set({
        User: user,
        access_token: access_token,
        loading: false,
        isUnRegister: false,
      });
    }
  },
  logout: () => {
    set({
      User: undefined,
      access_token: undefined,
      loading: false,
      isUnRegister: false,
    });
  },
}));
