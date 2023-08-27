import { View } from '@tarojs/components';
import { useTabBarSotre } from '@/model';
import classNames from 'classnames';
import css from './index.module.scss';

const CustomTabBar = () => {
  const tabBarStore = useTabBarSotre();
  return (
    <View className={css['tab-bar']}>
      {tabBarStore.tabs.map((tab) => (
        <View key={tab.key} className={classNames(css['tab-bar-item'])}>
          <View className="icon"></View>
          <View className="text">{tab.text}</View>
        </View>
      ))}
    </View>
  );
};

export default CustomTabBar;
