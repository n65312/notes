const head = require('./config/headConfig');
const plugins = require('./config/pluginsConfig');
const nav = require('./config/navConfig');
const sidebar = require('./config/sidebarConfig');

module.exports = {
  base: '/notes/',
  dest: 'dist',
  title: 'Lin\'s Blog',
  description: '记录，分享',
  head,
  themeConfig: {
    // smoothScroll: true,
    lastUpdated: '上次更新', // string | boolean
    sidebar,
    nav
  },
  plugins
}
