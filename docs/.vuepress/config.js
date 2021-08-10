const headConf = require('./config/headConf');
const themeConf = require('./config/themeConf');
const pluginsConf = require('./config/pluginsConf');

module.exports = {
  base: '/notes/',
  dest: 'dist',
  title: "笔记本",
  description: '学而时习之',
  head: headConf,
  theme: "reco",
  themeConfig: themeConf,
  // 使用的插件
  plugins: pluginsConf
}
