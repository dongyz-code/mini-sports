import { request } from '@/utils';
import { Res, WeixinFileUplaodUrl } from '@/types';

export async function getWeixinUploadUrl(filePath: string) {
  const res = await request<Res<WeixinFileUplaodUrl>>({
    method: 'POST',
    url: '/weixin/upload-url',
    data: {
      filePath,
    },
  });

  return res.data;
}
