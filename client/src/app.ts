import { PropsWithChildren, useLayoutEffect } from 'react';
import Taro, { useLaunch, useRouter } from '@tarojs/taro';
import { useTabBarStore } from './model';
import './app.scss';

function App({ children }: PropsWithChildren<any>) {
  const changeTabByPath = useTabBarStore((state) => state.changeTabByPath);
  const router = useRouter();
  changeTabByPath(router.path);
  console.log('2323');

  useLaunch(async () => {
    Taro.cloud.init({
      env: 'sport-prod-3g9linkv4aae0684',
    });
  });

  // useLayoutEffect(() => {
  //   console.log(router.path);

  // }, [router]);

  // children 是将要会渲染的页面
  return children;
}

export default App;
