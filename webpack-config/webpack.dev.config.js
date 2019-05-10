'use strict'

const extractTextPlugin = require('extract-text-webpack-plugin'),
  webpack = require('webpack')

module.exports = {
  devConfig: () => [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"',
      },
    }),
  ],
}
