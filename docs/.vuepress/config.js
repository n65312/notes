module.exports = {
  base: '/notes/',
  dest: 'dist',
  lang: 'zh-CN',
  title: '笔记本',
  description: '学习笔记',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: false,
  themeConfig: {
    repo: 'n65312/notes',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 Github 上编辑此页',
    lastUpdated: true,
    lastUpdatedText: '上次更新',
    navbar: [
      {
        text: 'Notes',
        children: [
          { text: 'HTML', link: '/note/html/introduce' },
          { text: 'CSS', link: '/note/css/0.Add-style' },
          { text: 'JS', link: '/note/js/0.Overview' },
          { text: 'Vue', link: '/note/vue/1.Directives' }
        ]
      }
    ],
    sidebar: {
      '/note/html/': [
        {
          text: 'HTML',
          // collapsable: false,
          children: [
            'introduce',
            '1.First-page',
            '2.Semantic',
            '3.Text-element',
            '4.HTML-Entity',
            '5.a-element',
            '6.path',
            '7.img-element',
            '8.multimedia-element',
            '9.list-element',
            '10.Container-element',
            '11.element-relation',
            '12.iframe-element',
            '13.flash',
            '14.form-element',
            '15.form2',
            '16.table',
            '17.other',
          ],
        },
      ],
      '/note/css/': [
        {
          text: 'CSS',
          children: [
            '0.Add-style',
            '1.Style-declaration',
            '2.Selector',
            '3.Cascade',
            '4.Attribute-calculation',
            '5.Box-model',
            '6.Box-model1',
            '7.inline-block',
            '8.Regular-flow',
            '9.float',
            '10.position',
            '11.More-selectors',
            '12.More-styles',
            '13.@rule',
            '14.body-background',
            '15.vertical-align',
            '16.reference-line',
            '17.Stacking-context',
            '18.svg',
            '19.data-URL',
            '20.Browser-compatibility',
            '21.Centered-summary',
            '22.Style-supplement',
          ]
        }
      ],
      '/note/js/': [
        {
          text: 'JS',
          children: [
            '0.Overview',
            '1.First-JS-program',
            '2.Data-types',
            '3.Variable1',
            '4.Variable2',
            '5.Reference-type',
            '6.Operator',
            '7.Arithmetic-Operator',
            '8.Increase-and-decrease',
            '9.Logical-Operators',
            '10.Supplementary',
            '11.Digital-storage',
            '12.Bit-operation',
            '13.Remainder-operation',
            '14.flow-chart',
            '15.if',
            '16.switch',
            '17.cycle',
            '18.Array',
            '19.Function',
            '20.Scope-Closure',
            '21.Function-this',
            '22.Constructor',
            '23.Function-essence',
            '24.Recursion',
            '25.Standard-library',
            '26.Array-constructor',
            '27.Wrapper',
            '28.Math',
            '29.Date',
            '30.Regular-expression',
            '31.Error-handling',
            '32.Web-API',
            '33.DOM1',
            '34.DOM2',
            '35.DOM3',
            '36.DOM4',
            '37.Event-registration',
            '38.Event-object',
            '39.Mouse-events',
            '40.Keyboard-events',
            '41.Other-events',
            '42.Element-position',
            '43.Timer',
            '44.Window',
            '45.Prototype',
            '46.Prototype2',
            '47.Attribute-descriptor',
            '48.Execution-context',
            '49.Scope-chain',
            '50.Event-loop',
            '51.Object-method',
            '52.Debounce-throttle',
            '53.Curry',
            '54.Pipeline-Function',
          ]
        }
      ],
      '/note/vue/':[
        {
          text: 'Vue',
          children: [
            '1.Directives'
          ]
        }
      ]
    },
  },
  plugins: [
    ['@vuepress/plugin-pwa'],
    [
      '@vuepress/plugin-pwa-popup',
      {
        locales: {
          '/': {
            message: 'New content is available.',
            buttonText: 'Refresh',
          },
          '/zh/': {
            message: '发现新内容可用',
            buttonText: '刷新',
          },
        },
      },
    ],
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
          },
          '/zh/': {
            placeholder: '搜索',
          },
        },
        hotKeys: ['Enter']
      },
    ],
    ['@vuepress/plugin-prismjs', {
      preloadLanguages: ['markdown', 'jsdoc', 'yaml']
    }]
  ],
}
