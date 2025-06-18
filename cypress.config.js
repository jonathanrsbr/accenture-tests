import { defineConfig } from 'cypress'
import createBundler from '@bahmutov/cypress-esbuild-preprocessor'
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild'
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor'

export default defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/',
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/features/**/*.feature',
    chromeWebSecurity: false,

    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config)

      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      )

      return config
    },
  },
})
