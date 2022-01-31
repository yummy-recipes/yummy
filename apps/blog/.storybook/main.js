module.exports = {
  stories: ['../src/stories/*.js'],
  core: {
    builder: 'webpack5',
  },
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
  ],
  webpackFinal: async config => {
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]
    // Use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
    config.module.rules[0].use[0].options.plugins.push(
      require.resolve("babel-plugin-remove-graphql-queries")
    )

    config.module.rules.push({
      test: /\.sass$/,
      use: [
        require.resolve('style-loader'), // creates style nodes from JS strings
        { // css modules support
          loader: require.resolve('css-loader'),
          options: {
            esModule: true,
            importLoaders: 1,
            modules: {
              namedExport: true
            }
          },
        },
        {
          loader: require.resolve('sass-loader'),
          options: {
            sassOptions:{
              indentedSyntax: true
            }
          }
        }
      ]
    })

    return config
  }
}
