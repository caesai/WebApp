const path = require('path');
const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
  node: {
    fs: 'empty'
  },
  resolve: {
    modules: [path.resolve(__dirname,'../node_modules')]
  },
  module: {
    rules: [
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
      // {
      //   test: /\.scss$/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: 'style-loader',
      //     use: ['css-loader?minimize=true', 'sass-loader']
      //   })
      // },
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
      },
      {
        test: /\.wasm$/,
        use: ['wasm-loader']
      }
    ]
  },
  plugins: [
    // new ExtractTextPlugin('css/styles.css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin()
  ],
  devServer: {
    historyApiFallback: true,
    publicPath: 'http://localhost:8080/dist/',
    contentBase: './dist/'
  }
};
