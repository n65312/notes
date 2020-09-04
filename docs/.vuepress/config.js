const head = require('./config/headConfig');
const plugins = require('./config/pluginsConfig');
const nav = require('./config/navConfig');
const sidebar = require('./config/sidebarConfig');

module.exports = {
  base: '/notes/',
  dest: 'dist',
  title: 'Lin\'s Blog',
  description: '记录，分享',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    smoothScroll: true,
    lastUpdated: '上次更新',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '前端',
        items: [
          { text: 'JavaScript', link: '/js/' },
          { text: 'CSS', link: '/css/' },
        ],
      },
      { text: '计算机', link: '/computer' },
      { text: 'Github', link: 'https://github.com/n65312/notes' },
    ],
    sidebar: {
      '/css/': [
        '',
        'css1',
        'css2',
        'css3',
      ],
      '/js/': [
        '',
        'js1',
        'js2',
      ],
      '/': [
        'computer',
      ]
    }
  },
  plugins: {
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: {
        message: "发现新内容可用",
        buttonText: "刷新"
      }
    },
    '@vuepress/back-to-top': true
  }
}
