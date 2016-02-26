var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var autoprefixer = require('autoprefixer')
var extractCSS = new ExtractTextPlugin('[name].css');

module.exports = {
  entry: [
    path.join(__dirname, '../src/main.js')
  ],
  output: {
    path: path.join(__dirname, '../dist/'),
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loaders : []
    }, {
      test: /\.json?$/,
      loader: 'json'
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
    }, {
      test: /\.(png|jpg)$/,
      loader: 'file-loader?name=img/[name].[ext]'
    }]
 },
 postcss: [
   autoprefixer({ browsers: ['last 3 versions'] })
 ],
 plugins: [
   new ExtractTextPlugin('[name].css'),
   new webpack.optimize.OccurenceOrderPlugin(),
   new webpack.DefinePlugin({
     'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
     '__DEV__': JSON.stringify(false)
   }),
   new HtmlWebpackPlugin({
     template: 'src/index.html',
     inject: 'body',
     filename: 'index.html'
   })
 ]
}
