const CI = process.env.CI
module.exports = {
  transform: {
    '^.+\\.jsx?$': require.resolve('./jest-preprocess.js'),
    '^.+\\.svg$': require.resolve('./config/jest/svgrTransform.js'),
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': require.resolve('./mocks/file-mock.js'),
  },
  testPathIgnorePatterns: ['node_modules', '.cache', 'cypress', 'examples'],
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  globals: {
    __PATH_PREFIX__: '',
  },
  testURL: 'http://localhost',
  setupFiles: [
    require.resolve('./loadershim.js'),
    require.resolve('./mocks/gatsby.js'),

  ],
  reporters: ['default'].concat(CI ? [['jest-junit', {outputDirectory: 'test-results/jest'}]] : []),
}
