const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const AutoDllPlugin = require('autodll-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');

module.exports = {
  name: 'client',
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=false&quiet=false&noInfo=false',
    path.resolve(__dirname, '../src/index.js')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[name]-[hash].js'
  },
  resolve: {
    modules: [path.resolve(__dirname,'../node_modules')]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          plugins: ['dynamic-import-webpack']
        }
      },
      {
        test: /\.bundle\.js$/,
        use: {
          loader: 'bundle-loader',
          options: {
            name: '[name]',
            lazy: true
          }
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader?minimize=true', 'sass-loader']
        })
      },
      {
          test: /\.(png|jpeg|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '/img/[name].[ext]'
              }
            }
          ]
      },
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2)$/,
        use: ['url-loader?limit=100&name=fonts/[name].[ext]']
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/styles.css'),
    // new HtmlWebpackPlugin({
    //   alwaysWriteToDisk: true,
    //   title: 'WebApp',
    //   template: 'template.html',
    //   files: {
    //     css: [ 'css/styles.css' ],
    //     js: [ 'js/main.bundle.js']
    //   },
    //   inject: 'body'
    // }),
    // new HtmlWebpackHarddiskPlugin({
    //   outputPath: path.resolve(__dirname, '../dist'),
    //   inject: 'body'
    // }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => module.context && module.context.indexOf('node_modules') !== -1
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    historyApiFallback: true,
    publicPath: 'http://localhost:8080/dist/',
    contentBase: './dist/'
  }
};
