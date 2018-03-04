const path = require('path');
const webpack = require('webpack');
const { ReactLoadablePlugin } = require('react-loadable/webpack');

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
  resolve: {
    modules: [path.resolve(__dirname,'../node_modules')]
  },
  externals: ['express'],
  module: {
    loaders: [{
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
    new ReactLoadablePlugin({
      filename: '../dist/react-loadable.json'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
};