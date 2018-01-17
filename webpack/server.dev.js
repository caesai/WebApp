const path = require('path');
const fs = require('fs')
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const res = p => path.resolve(__dirname, p);

module.exports = {
  name: 'server',
  devtool: 'eval',
  entry: ['babel-polyfill', res('../server/render.js')],
  target: 'node',
  output: {
    path: res('../buildServer'),
    publicPath: '/dist/',
    filename: 'server.bundle.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    modules: [path.resolve(__dirname,'../node_modules')]
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        plugins: ['dynamic-import-node']
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
    }]
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new ExtractTextPlugin('css/styles.css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ]
};
