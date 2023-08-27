import { create } from 'zustand';
import type { Key } from 'react';

interface TabBar {
  key: string;
  pagePath: string;
  text: string;
  iconPath?: string;
  selectedIconPath?: string;
}

interface TabBarSotre {
  selected: Key;
  color: string;
  selectedColor: string;
  tabs: TabBar[];
}

export const useTabBarSotre = create<TabBarSotre>((set) => {
  return {
    selected: '',
    color: '#000000',
    selectedColor: '#DC143C',
    tabs: [
      { key: '1', pagePath: 'pages/index/index', text: '活动' },
      { key: '2', pagePath: 'pages/create_active/index', text: '创建活动' },
      { key: '3', pagePath: 'pages/my/index', text: '我的' },
    ],

    changeTab: (selected: string) => {
      set({
        selected,
      });
    },
  };
});
