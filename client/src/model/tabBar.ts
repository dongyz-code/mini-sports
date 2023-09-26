import { create } from 'zustand';
import type { Key } from 'react';
import type { IconNames } from '@/components/iconfont';

export interface TabBar {
  key: string;
  pagePath: string;
  text: string;
  iconPath?: IconNames;
  selectedIconPath?: IconNames;
}

interface TabBarSotre {
  selected: Key;
  color: string;
  selectedColor: string;
  tabs: TabBar[];
  changeTab: (selected: string) => void;
}

export const useTabBarSotre = create<TabBarSotre>((set) => {
  return {
    selected: '1',
    color: '#000000',
    selectedColor: '#DC143C',
    tabs: [
      { key: '1', pagePath: '/pages/index/index', text: '活动', iconPath: 'huodong' },
      { key: '2', pagePath: '/pages/create_active/index', text: '', iconPath: 'chuangjianv' },
      { key: '3', pagePath: '/pages/my/index', text: '我的', iconPath: 'my_fill_light' },
    ],

    changeTab: (selected: string) => {
      set({
        selected,
      });
    },
  };
});
