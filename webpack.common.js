const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        enforce: 'pre',
        options: {
          fix: true,
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        loader: 'file-loader',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'public'), // 如果要打包 注释掉这句话
    filename: 'zjvis.min.js',
    library: 'zjvis',
    libraryTarget: 'umd',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
}
