const webpack = require('webpack');
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
  resolve: {
    modules: [__dirname, 'node_modules', 'src']
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
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      title: 'WebApp',
      template: 'template.html',
      files: {
        css: [ 'css/styles.css' ],
        js: [ 'js/main.bundle.js']
      },
      inject: 'body'
    }),
    new HtmlWebpackHarddiskPlugin({
      outputPath: path.resolve(__dirname, 'dist'),
      inject: 'body'
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
    historyApiFallback: true,
    publicPath: 'http://localhost:8080/dist/',
    contentBase: './dist/'
  }
};
