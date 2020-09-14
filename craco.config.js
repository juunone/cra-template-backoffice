const path = require('path')
const { whenProd, ESLINT_MODES } = require('@craco/craco')
const resolve = (arg) => path.resolve(__dirname, arg)

module.exports = {
  babel: {
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      ['@babel/plugin-proposal-optional-chaining'],
    ],
  },
  webpack: {
    alias: {
      '@': resolve('src'),
      assets: resolve('src/assets'),
    },
  },
  eslint: {
    mode: whenProd(() => ESLINT_MODES.file, 'extends'),
  },
}
