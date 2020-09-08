module.exports = {
  base: '/notes/',
  dest: 'dist',
  title: 'Notes',
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
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  themeConfig: {
    smoothScroll: true,
    lastUpdated: '上次更新',
    nav: [
      {
        text: 'front-end',
        items: [
          { text: 'HTML + CSS', link: '/hc/prepare/' },
          { text: 'JavaScript', link: '/js/prepare/' },
        ],
      },
      { text: 'Computer', link: '/computer' },
      { text: 'Github', link: 'https://github.com/n65312/notes' },
    ],
    sidebar: {
      '/hc/': [
        {
          title: '概述',
          collapsable: false,
          children: [
            ['prepare/', '开始'],
            'prepare/introduce',
          ]
        },
        {
          title: 'HTML基础',
          collapsable: false,
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
          collapsable: false,
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
          collapsable: false,
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
          collapsable: false,
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
        {
          title: '概述',
          collapsable: false,
          children: [
            ['prepare/', '开发环境的准备'],
            'prepare/introduce',
          ]
        },
        {
          title: 'JS语法基础',
          collapsable: false,
          children: [
            ['js-basic/', '第一个JS程序'],
            'js-basic/2',
            'js-basic/3',
            'js-basic/4',
            'js-basic/5',
          ]
        },
        {
          title: '运算符',
          collapsable: false,
          children: [
            ['operator/', '运算符概述'],
            'operator/2',
            'operator/3',
            'operator/4',
            'operator/5',
            'operator/6',
            'operator/7',
            'operator/8',
            'operator/9',
          ]
        },
        {
          title: '流程控制',
          collapsable: false,
          children: [
            ['process/', '流程图'],
            'process/2',
            'process/3',
            'process/4',
            'process/5',
          ]
        },
        {
          title: '函数',
          collapsable: false,
          children: [
            ['function/', '函数语法'],
            'function/2',
            'function/3',
            'function/4',
            'function/5',
            'function/6',
          ]
        },
        {
          title: '标准库',
          collapsable: false,
          children: [
            ['standard-library/', '介绍'],
            'standard-library/2',
            'standard-library/3',
            'standard-library/4',
            'standard-library/5',
            'standard-library/6',
            'standard-library/7',
          ]
        },
        {
          title: 'DOM',
          collapsable: false,
          children: [
            ['dom/', '概述'],
            'dom/2',
            'dom/3',
            'dom/4',
            'dom/5',
            'dom/6',
            'dom/7',
            'dom/8',
            'dom/9',
            'dom/10',
            'dom/11',
          ]
        },
        {
          title: 'BOM',
          collapsable: false,
          children: [
            ['bom/', '计时器'],
            'bom/2',
          ]
        },
        {
          title: 'JS进阶',
          collapsable: false,
          children: [
            ['js-advanced/', '开始']
          ]
        }
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
      selector: '.theme-default-content > img'
    }
  }
}
