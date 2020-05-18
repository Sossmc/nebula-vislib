const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = (env) =>
  merge(common, {
    mode: 'development',
    entry: `./test/${env}.test.js`,
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './public',
      port: 8081,
      open: true,
    },
  })
