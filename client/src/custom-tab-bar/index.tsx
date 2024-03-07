import { FC, useEffect } from 'react';
import Taro, { useRouter } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { useTabBarStore, TabBar } from '@/model';
import classNames from 'classnames';
import IconFont from '@/components/iconfont';
import css from './index.module.scss';

const CustomTabBar: FC = () => {
  const tabBarStore = useTabBarStore();
  const router = useRouter();

  const changeTab = (tab: TabBar) => {
    if (!tab) return;
    if (tabBarStore.selected === tab.key) return;
    Taro.switchTab({
      url: tab.pagePath,
    });
  };

  useEffect(() => {
    tabBarStore.changeTabByPath(router.path);
  }, []);

  return (
    <View className={css['tab-bar']}>
      {tabBarStore.tabs.map((tab) => (
        <View
          key={tab.key}
          className={classNames(css['tab-bar-item'], {
            [css['active-tab']]: tab.key === tabBarStore.selected,
          })}
          onClick={() => changeTab(tab)}
        >
          <View className={css['icon']}>
            {tab.iconPath && <IconFont name={tab.iconPath} size={tab.key === '2' ? 64 : 48} color="#000000" />}
          </View>
          {tab.text && <View className={css['text']}>{tab.text}</View>}
        </View>
      ))}
    </View>
  );
};

export default CustomTabBar;
