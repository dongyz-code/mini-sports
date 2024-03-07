import { request } from '@/utils';
import { Res, WeixinFileUplaodUrl, User, RegisterUserParam } from '@/types';

export async function getWeixinUploadUrl(filePath: string) {
  const res = await request<Res<WeixinFileUplaodUrl>>({
    method: 'POST',
    url: '/api/weixin/upload-url',
    data: {
      filePath,
    },
  });

  return res.data;
}

export type LoginResponse = Res<{
  user: User;
  access_token: string;
}>;
export async function httpLogin(code: string) {
  const res = await request<LoginResponse>({
    method: 'POST',
    url: '/api/system/login',
    data: {
      code,
    },
  });

  return res.data;
}

export async function httpResister(user: RegisterUserParam) {
  const res = await request<LoginResponse>({
    method: 'POST',
    url: '/api/system/register',
    data: user,
  });
  return res.data;
}
