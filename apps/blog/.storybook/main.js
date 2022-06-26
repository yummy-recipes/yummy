const path = require('path')
const { mergeConfig } = require('vite')

module.exports = {
  stories: ['../src/stories/*.jsx'],
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    previewCsfV3: true,
  },
  addons: ['@storybook/addon-essentials', 'storybook-addon-themes'],
  async viteFinal(config, { configType }) {
    // return the customized config
    return mergeConfig(config, {
      resolve: {
        alias: {
          gatsby: path.resolve(__dirname, './mocks/gatsby'),
        },
      },
      build: {
        sourcemap: false,
      },
    })
  },
}
