import { request } from '@/utils';
import { Res, AddActiveParam } from '@/types';

export async function httpCreateActive(active: AddActiveParam) {
  const res = await request<Res<unknown>>({
    method: 'POST',
    url: '/active',
    data: active,
  });

  return res.data;
}
