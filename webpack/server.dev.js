const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  name: 'server',
  devtool: 'eval',
  entry: path.resolve(__dirname,'../server/index.js'),
  target: 'node',
  output: {
    path: path.resolve(__dirname,'../'),
    publicPath: '/dist/',
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },
  node: {
    fs: 'empty'
  },
  resolve: {
    modules: [path.resolve(__dirname,'../node_modules')]
  },
  externals: ['express', nodeExternals()],
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        plugins: ['syntax-dynamic-import']
      }
    },
    {
      test: /\.scss$/,
      use: ['css-loader/locals']
    },
    {
        test: /\.(png|jpeg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '/img/[name].[ext]',
              emit: false
            }
          }
        ]
    },
    {
        test: /\.(png|jpeg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '/img/[name].[ext]',
              emit: false
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
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
};
