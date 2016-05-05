/**
 * 文件说明: webpack 开发环境配置
 * 详细描述:
 * 创建者: 陳明峰
 * 创建时间: 16/4/29
 * 变更记录:
 */
'use strict';

var webpack = require('webpack');
var path = require('path');
var node_modules = path.resolve(__dirname, '../node_modules');
var projectRoot = path.resolve(__dirname, '../');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ForceCaseSensitivityPlugin = require('force-case-sensitivity-webpack-plugin');

/* 不需要webpack解析的排除列表 */
var noParse = [
  // 'react-dom',
  // 'react-redux'
];

var config = {
  target: 'web',
  cache: true,
  entry: {
    lib: [
      path.join(__dirname, '../assets/src/library/index.js')
    ]
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: path.join(__dirname, '../dist'),
    libraryTarget: 'umd',
    publicPath: '/'
  },
  resolve: {
    alias: []
  },
  //externals:{
  //	'react': {
  //		root: 'React',
  //		commonjs2: 'react',
  //		commonjs: 'react',
  //		amd: 'react'
  //	},
  //	'jquery': {
  //		root: 'jQuery',
  //		commonjs2: 'jquery',
  //		commonjs: 'jquery',
  //		amd: 'jquery'
  //	},
  //	'react-dom':{
  //		root:'ReactDOM',
  //		commonjs2: 'react-dom',
  //		commonjs: 'react-dom',
  //		amd:'react-dom'
  //	}
  //},
  module: {
    loaders: [
      {
        test: /[\.jsx|\.js]$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      },
      {
        test: /[\.jsx|\.js]$/,
        exclude: /node_modules/,
        loader: 'babel',
        presets: [
          'react',
          'es2015'
        ],
        plugins:[
          'transform-object-assign'
        ],
        query: {
          cacheDirectory: true
        }
      }, {
        test: /\.css$/,
        //loader: 'style!css'
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      }, {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader?!less-loader")
      }, {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=8192'
      }, {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file'
      }, {
        test: /\.json$/,
        loader: 'json'
      }],
    /* 不通过webpack打包 */
    noParse: []
  },
  plugins: [
    new webpack.DefinePlugin({
      TARGET_HOST: JSON.stringify("http://stg2.v5time.net")
    }),
    new ForceCaseSensitivityPlugin(),
    new ExtractTextPlugin("[name].css"),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    dns: 'empty'
  },
  debug: true,
  devtool: 'eval-source-map'
};

module.exports = config;