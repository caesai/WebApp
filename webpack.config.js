const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

const clientConfig = {
  entry: './src/index.js',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'js/[name]-[hash].bundle.js',
    chunkFilename: 'js/[name]-[hash].js'
  },
  resolve: {
    modules: [__dirname, 'node_modules', 'src']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: [path.resolve('./src')],
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

const serverConfig = {
  entry: './src/index.js',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'js/index.server.bundle.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    modules: [__dirname, 'node_modules', 'src']
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      include: [path.resolve('./src')],
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
  plugins: [new ExtractTextPlugin('css/styles.css')]
};

module.exports = [
  clientConfig,
  serverConfig
];
