const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  name: 'client',
  devtool: 'source-map',
  entry: path.resolve(__dirname, '../src/index.js'),
  target: 'web',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[name].js'
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
          plugins: ['syntax-dynamic-import']
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
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => module.context && module.context.indexOf('node_modules') !== -1
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new UglifyJsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin()
  ],
  devServer: {
    historyApiFallback: true,
    publicPath: 'http://localhost:8080/dist/',
    contentBase: './dist/'
  }
};
