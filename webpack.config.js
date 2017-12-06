const webpack = require("webpack");
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: './',
    filename: 'js/[name]-[hash].bundle.js',
    chunkFilename: 'js/[name]-[hash].js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader' },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader?minimize=true', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/styles.css'),
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: false,
      title: 'WebApp',
      template: 'template.html',
      files: {
        css: [ 'css/styles.css' ],
        js: [ 'js/main.bundle.js']
      }
    }),
    new HtmlWebpackHarddiskPlugin({
      outputPath: path.resolve(__dirname, 'dist')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => module.context && module.context.indexOf('node_modules') !== -1
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    })
  ],
  devServer: {
    publicPath: '/dist/',
    contentBase: './dist',
    hot: true
  }
};
