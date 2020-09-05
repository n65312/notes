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
          { text: 'HTML+CSS', link: '/hc/prepare/' },
          { text: 'JavaScript', link: '/js/' },
        ],
      },
      { text: '计算机', link: '/computer' },
      { text: 'Github', link: 'https://github.com/n65312/notes' },
    ],
    sidebar: {
      '/hc/': [
        {
          title: '概述',
          children: [
            ['prepare/', '开始'],
            'prepare/prepare',
          ]
        },
        {
          title: 'HTML基础',
          children: [
            ['html-basic/', '开始'],
            'html-basic/2',
            'html-basic/3',
            'html-basic/4',
            'html-basic/5',
            'html-basic/6',
            'html-basic/7',
            'html-basic/8',
            'html-basic/9',
            'html-basic/10',
            'html-basic/11',
          ]
        },
        {
          title: 'CSS基础',
          children: [
            ['css-basic/', '开始'],
            'css-basic/2',
            'css-basic/3',
            'css-basic/4',
            'css-basic/5',
            'css-basic/6',
            'css-basic/7',
            'css-basic/8',
            'css-basic/9',
            'css-basic/10',
            'css-basic/11',
          ]
        },
        {
          title: 'HTML进阶',
          children: [
            ['html-advanced/', '开始'],
            'html-advanced/2',
            'html-advanced/3',
            'html-advanced/4',
            'html-advanced/5',
            'html-advanced/6',
          ]
        },
        {
          title: 'CSS进阶',
          children: [
            ['css-advanced/', '开始'],
            'css-advanced/2',
            'css-advanced/3',
            'css-advanced/4',
            'css-advanced/5',
            'css-advanced/6',
            'css-advanced/7',
            'css-advanced/8',
            'css-advanced/9',
            'css-advanced/10'
          ]
        }
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
    '@vuepress/back-to-top': true,
    '@vuepress/medium-zoom': {
      selector: 'img',
    }
  }
}
