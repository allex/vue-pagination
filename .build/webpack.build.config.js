const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

function generateConfig (filename, options) {
  var uglify = filename.indexOf('min') > -1
  var config = {
    entry: path.join(__dirname, '..', 'src/index.js'),
    output: {
      path: resolve('dist'),
      publicPath: '/dist/',
      filename: filename + '.js',
      library: options.exportName,
      libraryTarget: 'umd',
      umdNamedDefine: true
    },
    externals: {
      lodash: {
        commonjs2: 'lodash',
        commonjs: 'lodash',
        amd: 'lodash',
        root: '_' // indicates global variable
      },
      vue: {
        commonjs2: 'vue',
        commonjs: 'vue',
        amd: 'vue',
        root: 'Vue'
      }
    },
    devtool: 'source-map',
    plugins: []
  }

  if (uglify) {
    config.plugins.push(
      new UglifyJSPlugin({
        compressor: {
          warnings: false
        },
        sourceMap: true
      })
    )
  }

  return merge(baseConfig, config)
}

const config = ['index','index.min'].map((key) => {
  return generateConfig(key, { exportName: 'VuePagination' })
})

module.exports = config
