const webpack =  require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const devWebpackConfig = merge(baseWebpackConfig, {

  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    port: 8081,
    client: {
      overlay: {
        warnings: false,
        errors: true,
      }
    },
    historyApiFallback: true,
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    })
  ]
})

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig)
})
