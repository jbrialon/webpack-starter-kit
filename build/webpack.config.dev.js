var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '../src/main.js')
  ],
  output: {
    path: path.join(__dirname, '../build/'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      '__DEV__': JSON.stringify(process.env.NODE_ENV)
   })
  ],
  devtool: "source-map",
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      exclude: /jcr_root/,
      loaders: []
    }, {
      test: /\.json?$/,
      loader: 'json'
    }, {
        test: /\.scss$/,
        loaders: ["style", "css", 'resolve-url', "sass"]
    }, {
        test: /\.(png|jpg)$/,
        loader: 'file-loader?name=[name].[ext]'
    }]
  },
  _hotPort: 8000
}
