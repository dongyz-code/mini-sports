import { needLoginPages } from '@/constant';

export function getNeedLoginPage(path: string) {
  path = path.replace(/^\//, '');
  const page = needLoginPages.find((item) => item.path === path);
  return page;
}
