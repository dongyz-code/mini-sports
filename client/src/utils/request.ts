import Taro from '@tarojs/taro';
import { BASE_URL } from '@/config';
import { useUserStore } from '@/model';

interface RequestParams {
  method: 'GET' | 'POST' | 'PUT' | 'OPTIONS' | 'DELETE' | 'PATCH';
  url: string;
  data?: any;
  header?: Record<string, any>;
  dataType?: 'text' | 'arraybuffer';
}

export async function request<T>({ method, url, data, header, dataType }: RequestParams) {
  const access_token = useUserStore.getState().access_token;
  const defaultHeader = {
    authorization: 'Bearer ' + access_token,
  };

  const res = await Taro.request<T>({
    method: method,
    url: BASE_URL + url,
    data: data,
    dataType: dataType,
    header: Object.assign(defaultHeader, header),
  });

  return res;
}
