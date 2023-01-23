const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFiles: [require.resolve('whatwg-fetch')],
  setupFilesAfterEnv: ['<rootDir>/test/setupEnv.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '@/components/(.*)': '<rootDir>/components/$1',
    '@/serializers/(.*)': '<rootDir>/serializers/$1',
    '@/lib/(.*)': '<rootDir>/lib/$1',
    '@/test/(.*)': '<rootDir>/test/$1',
    '@/test-utils': '<rootDir>/utils/testUtils',
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
};

module.exports = createJestConfig(customJestConfig);
