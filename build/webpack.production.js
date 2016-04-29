/**
 * 文件说明: webpack生产环境配置
 * 详细描述:
 * 创建者: 陳明峰
 * 创建时间: 16/4/29
 * 变更记录:
 */

var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var AssetsPlugin = require('assets-webpack-plugin');
var assetsPluginInstance = new AssetsPlugin({filename:'assets/assets-map.json',update: true,prettyPrint: true});

var autoprefixer = require('autoprefixer');
var precss      = require('precss');
var node_modules = path.join(__dirname,'./node_modules');

/* 不需要webpack解析的排除列表 */
var noParse = [
  'react-dom',
  'react-redux'
];
var config = {
  target: 'web',
  cache: true,
  entry: {
    vendor: [
      'react',
      'react-dom',
      'redux',
      'react-redux',
      'superagent'
    ]
  },
  output: {
    filename: '[name]-[chunkhash].js',
    chunkFilename: '[name]-[chunkhash].js',
    path: path.join(__dirname, 'assets/dist'),
    libraryTarget: 'umd',
    publicPath: '/'
  },
  /*	externals:{
   'react': {
   root: 'React',
   commonjs2: 'react',
   commonjs: 'react',
   amd: 'react'
   },
   'jquery': {
   root: 'jQuery',
   commonjs2: 'jquery',
   commonjs: 'jquery',
   amd: 'jquery'
   },
   'react-dom':{
   root:'ReactDOM',
   commonjs2: 'react-dom',
   commonjs: 'react-dom',
   amd:'react-dom'
   }
   },*/
  resolve:{
    alias:{
      //react:path.join(node_modules,'./react/dist/react.min.js'),
      //jquery:path.join(node_modules,'./jquery/dist/jquery.min.js'),
      //'react-dom':path.join(node_modules,'./react-dom/dist/react-dom.min.js')
    }
  },
  module: {
    noParse:[
      //path.join(node_modules,'./react/dist/react.min.js'),
      //path.join(node_modules,'./jquery/dist/jquery.min.js'),
      //path.join(node_modules,'./react-dom/dist/react-dom.min.js')
    ],
    loaders: [
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
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      }, {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
      }, {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=8192&name=./images/[name]-[hash].[ext]'
      }, {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file?name=./font/[name]-[hash].[ext]'
      }, {
        test: /\.json$/,
        loader: 'json'
      }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify("production"),
      TARGET_HOST: JSON.stringify("http://www.timeface.cn")
    }),
    new ExtractTextPlugin("[name]-[chunkhash].css"),
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        except: ['$', 'exports', 'require']
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name:'commons',
      filename:'commons-[chunkhash].js',
      minChunks:function(module,count) {
        //引用测试大于某个次数
        if (count >= 3) {
          return true;
        }

        //符合某种格式
        var resourceName = module.resource;
        if (resourceName) {
          resourceName = resourceName.substring(resourceName.lastIndexOf(path.sep) + 1)
        }
        var reg = /^(\w)+.common/;
        return reg.test(resourceName);
      }
    }),
    assetsPluginInstance
  ],
  postcss: function () {
    return [autoprefixer, precss];
  },
  devtool: 'sourcemap'
};


module.exports = config;
