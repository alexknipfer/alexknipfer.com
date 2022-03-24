module.exports = {
  preset: 'ts-jest',
  setupFiles: [require.resolve('whatwg-fetch')],
  setupFilesAfterEnv: ['<rootDir>/test/setupEnv.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
  moduleNameMapper: {
    '@/components/(.*)': '<rootDir>/components/$1',
    '@/serializers/(.*)': '<rootDir>/serializers/$1',
    '@/lib/(.*)': '<rootDir>/lib/$1',
    '@/test/(.*)': '<rootDir>/test/$1',
    '@/test-utils': '<rootDir>/utils/testUtils',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
};
