/**
 * 文件说明:
 * 详细描述:
 * 创建者: 陳明峰
 * 创建时间: 16/4/29
 * 变更记录:
 */

var glob = require('glob');
var path = require('path');
var webpack = require('webpack');
var _ = require('lodash');

module.exports = function (app, debug) {
  var webpackMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');
  var hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';
  var webpackConfig;
  if (debug) {
    // 获取开发环境配置
    webpackConfig = require('../build/webpack.dev');
  }else{
    // 获取生产环境配置
    webpackConfig = require('../build/webpack.production');
  }

  // 添加entries
  var entries = {};
  var entriesFile = glob.sync(path.resolve(__dirname, '../assets/src/**/*.entry.js'));
  for (var i = 0, len = entriesFile.length; i < len; i++) {
    var filePath = entriesFile[i];
    var key = filePath.substring(filePath.lastIndexOf('/') + 1,filePath.lastIndexOf('.'));
    entries[key] = [hotMiddlewareScript, path.resolve(__dirname,filePath)];
  }
  // 将entry合并到webpack中
  _.merge(webpackConfig.entry, entries);
  // 编译配置文件
  var compiler = webpack(webpackConfig);
  app.use(webpackMiddleware(compiler, {
    contentBase: webpackConfig.output.path,
    publicPath: webpackConfig.output.publicPath,
    stats: {colors: true},
    hot: true,
    noInfo: true
  }));
  app.use(webpackHotMiddleware(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
  }));
};
