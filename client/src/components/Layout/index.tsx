import { View } from '@tarojs/components';
import { FC } from 'react';
import css from './index.module.scss';

interface LayoutProps {
  children: React.ReactElement | React.ReactElement[];
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return <View className={css['base-layout']}>{children}</View>;
};

export default Layout;
