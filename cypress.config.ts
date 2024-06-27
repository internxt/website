import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('@cypress/code-coverage/task')(on, config);

      // It's IMPORTANT to return the config object
      // with any changed environment variables
      return config;
    },
    reporterOptions: {
      reportDir: '.nyc_output',
    },
    fileServerFolder: '.',
    specPattern: ['**/*.spec.ts', '**/*.cy.ts'],
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1800,
    viewportHeight: 970,
    scrollBehavior: 'center',
    chromeWebSecurity: false,
    env: {
      codeCoverage: {
        url: 'http://localhost:3000/coverage',
      },
    },
  },
});
