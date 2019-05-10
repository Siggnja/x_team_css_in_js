'use strict'

const extractTextPlugin = require('extract-text-webpack-plugin'),
  webpack = require('webpack')

module.exports = {
  prodConfig: () => [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
  ],
}
