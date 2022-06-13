const { mergeConfig } = require('vite')

module.exports = {
  stories: ['../src/stories/*.jsx'],
  core: {
    builder: process.env.USE_VITE_BUILDER
      ? '@storybook/builder-vite'
      : 'webpack5',
  },
  addons: ['@storybook/addon-essentials'],
  async viteFinal(config, { configType }) {
    // return the customized config
    return mergeConfig(config, {})
  },
  webpackFinal: async (config) => {
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]
    // Use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
    config.module.rules[0].use[0].options.plugins.push(
      require.resolve('babel-plugin-remove-graphql-queries'),
    )

    // Replace default css loader
    config.module.rules[7].use = [
      require.resolve('style-loader'), // creates style nodes from JS strings
      {
        // css modules support
        loader: require.resolve('css-loader'),
        options: {
          esModule: true,
          importLoaders: 1,
          modules: {
            namedExport: true,
          },
        },
      },
    ]

    return config
  },
}
