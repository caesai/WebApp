const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: './',
    filename: 'js/[name].bundle.js'
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
      title: 'WebApp',
      template: 'template.html',
      files: {
        css: [ 'css/styles.css' ],
        js: [ 'js/main.bundle.js']
      }
    })
  ]
};
