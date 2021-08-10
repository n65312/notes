const navConf = require('./navConf');
const sidebarConf = require('./sidebarConf');

module.exports = {
  type: "blog",
  mode: 'auto', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
  modePicker: true, // 默认 true，false 不显示模式调节按钮，true 则显示
  subSidebar: 'auto', //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
  smoothScroll: true, // 启用页面滚动效果
  nav: navConf, // 导航栏配置
  sidebar: sidebarConf, // 侧边栏配置
  // 博客配置
  blogConfig: {
    category: {
      location: 2,     // 在导航栏菜单中所占的位置，默认2
      text: 'Category',     // 默认文案 “分类”
    },
    tag: {
      location: 3,     // 在导航栏菜单中所占的位置，默认3
      text: 'Tag'      // 默认文案 “标签”
    },
    socialLinks: []     // 信息栏展示社交信息
  },
  // 友链
  friendLink: [
    {
      title: '午后南杂',
      desc: 'Enjoy when you can, and endure when you must.',
      email: '1156743527@qq.com',
      link: 'https://www.recoluan.com'
    },
    {
      title: 'vuepress-theme-reco',
      desc: 'A simple and beautiful vuepress Blog & Doc theme.',
      avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
      link: 'https://vuepress-theme-reco.recoluan.com'
    },
  ],
  logo: '/lin.jpg',
  // 搜索设置
  search: true,
  searchMaxSuggestions: 10,
  // 最后更新时间
  lastUpdated: 'Last Updated',
  // 作者
  author: 'Lin',
  // 作者头像
  authorAvatar: '/lin.jpg',
  // 备案号
  // record: 'xxxx',
  // 项目开始时间
  startYear: '2017',
  /**
   * 密钥 (if your blog is private)
   */
  // keyPage: {
  //   keys: ['your password'],
  //   color: '#42b983',
  //   lineColor: '#42b983'
  // },
  /**
   * valine 设置 (if you need valine comment )
   * 评论功能
   */
  // valineConfig: {
  //   appId: 'gJy1qiknLPy2NegQw3PHHDLu-gzGzoHsz',// your appId
  //   appKey: 'KnPJJSI2lbAI83zAD8hxH8c6', // your appKey
  //   placeholder: '欢迎评论'
  // },
}
