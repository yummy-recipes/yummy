const CI = process.env.CI
module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': '<rootDir>/../../config/jest/jest-preprocess.js',
    '^.+\\.svg$': '<rootDir>/../../config/jest/svgrTransform.js'
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/../../config/jest/mocks/file-mock.js',
    '^gatsby-page-utils/(.*)$': 'gatsby-page-utils/dist/$1', // Workaround for https://github.com/facebook/jest/issues/9771
  },
  testPathIgnorePatterns: ['node_modules', '.cache', 'cypress', 'examples'],
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  globals: {
    __PATH_PREFIX__: '',
  },
  testURL: 'http://localhost',
  setupFiles: [
    '<rootDir>/../../config/jest/loadershim.js',
    './jest/mocks/gatsby.js'
  ],
  reporters: ['default'].concat(CI ? [['jest-junit', {outputDirectory: 'test-results/jest'}]] : []),
}
