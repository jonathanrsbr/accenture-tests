const eslintPluginCypress = require('eslint-plugin-cypress')
const eslintPluginPrettier = require('eslint-plugin-prettier')
const prettierConfig = require('./.prettierrc.json')

module.exports = [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        cy: 'readonly',
        Cypress: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        before: 'readonly',
        beforeEach: 'readonly',
        after: 'readonly',
        afterEach: 'readonly',
        context: 'readonly',
        expect: 'readonly',
      },
    },
    plugins: {
      cypress: eslintPluginCypress,
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...eslintPluginCypress.configs.recommended.rules,
      'prettier/prettier': ['error', prettierConfig],
      'cypress/unsafe-to-chain-command': 'off',
    },
    ignores: ['node_modules', 'cypress/videos', 'cypress/screenshots'],
  },
]
