// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const queryConfig = require('@tanstack/eslint-plugin-query/flat');

module.exports = defineConfig([
  expoConfig,
  queryConfig,
  {
    ignores: ['dist/*'],
  },
]);
