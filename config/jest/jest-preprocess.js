const babelOptions = {
  presets: ['babel-preset-gatsby'],
  plugins: ['dynamic-import-node'],
}

module.exports = require('babel-jest').default.createTransformer(babelOptions)
