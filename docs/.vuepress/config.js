const headConf = require('./config/headConf');
const themeConf = require('./config/themeConf');
const pluginsConf = require('./config/pluginsConf');

module.exports = {
  base: '/notes/',
  dest: 'dist',
  title: '青青子衿',
  description: 'Where there is a will there is a way .',
  head: headConf,
  theme: "reco",
  themeConfig: themeConf,
  // 使用的插件
  plugins: pluginsConf
}
