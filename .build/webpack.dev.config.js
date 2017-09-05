var path = require('path')
var merge = require('webpack-merge')
var baseConfig = require('./webpack.base.config')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = merge(baseConfig, {
  entry: './demo/demo.js',
  output: {
    path: resolve('./dist'),
    publicPath: '/dist/',
    filename: 'demo.js'
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map'
})

