const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  entry: './src/index-dev.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public',
    port: 8011,
    open: true,
  },
})
