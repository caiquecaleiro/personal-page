const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[chunkhash].js'
  },
  devServer: {
    port: 4000
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader']
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: ['url-loader', {
          loader: 'image-webpack-loader',
          options: {}
        }]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.[contenthash].css'),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CopyWebpackPlugin([
      { from: 'CNAME' },
      { from: 'img/favicon.ico' }
    ])
  ]
};

module.exports = config;