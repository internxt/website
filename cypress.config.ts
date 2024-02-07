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
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1500,
    viewportHeight: 660,
    scrollBehavior: 'center',
    chromeWebSecurity: false,
  },
});
