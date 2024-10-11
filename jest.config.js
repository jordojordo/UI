module.exports = {
  setupFilesAfterEnv:   ['./jest.setup.js'],
  modulePaths:          ['<rootDir>'],
  moduleFileExtensions: ['js', 'json', 'vue', 'ts', 'tsx'],
  moduleNameMapper:     {
    '^@vue/test-utils$': '<rootDir>/node_modules/@vue/test-utils/dist/vue-test-utils.cjs.js',
    '^vue$': '<rootDir>/node_modules/vue/dist/vue.cjs.js',    
    '^~/(.*)$':         '<rootDir>/$1',
    '^~~/(.*)$':        '<rootDir>/$1',
    '^@/(.*)$':         '<rootDir>/$1',
    '@shell/(.*)':      '<rootDir>/node_modules/@rancher/shell/$1',
    '@components/(.*)': '<rootDir>/node_modules/@rancher/components/dist/@rancher/components.common.js',
    '@kubewarden/(.*)': '<rootDir>/pkg/kubewarden/$1',
    '@tests/(.*)':      '<rootDir>/tests/$1'
  },
  transform: {
    '^.+\\.js$':   '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/@vue/vue3-jest',
    '^.+\\.tsx?$': ['ts-jest'],
  },
  transformIgnorePatterns:  ['/node_modules/(?!(vue|@vue|@rancher|jsonpath-plus))'],
  modulePathIgnorePatterns: [
    '<rootDir>/scripts/',
    '<rootDir>/assets/',
    '<rootDir>/charts/',
    '<rootDir>/extensions/',
    '<rootDir>/tests/e2e/',
    '<rootDir>/tests/blob-report/',
    '<rootDir>/dist-pkg/',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/tests/e2e/',
  ],
  coverageDirectory: '<rootDir>/coverage/unit',
  coverageReporters: ['json', 'text-summary'],
  preset:            'ts-jest',
  testEnvironment:   'jsdom',
  globals:           { 'ts-jest': { isolatedModules: true } },
};
