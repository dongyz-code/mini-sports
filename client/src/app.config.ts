export default defineAppConfig({
  pages: ['pages/index/index', 'pages/create_active/index', 'pages/my/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    custom: true,
    color: '#000000',
    selectedColor: '#000000',
    backgroundColor: '#FFFFFF',
    list: [
      { pagePath: 'pages/index/index', text: '活动' },
      { pagePath: 'pages/create_active/index', text: '创建活动' },
      { pagePath: 'pages/my/index', text: '我的' },
    ],
  },
});
