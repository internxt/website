import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3001',
    chromeWebSecurity: false,
    viewportWidth: 1500,
    viewportHeight: 660,
    scrollBehavior: 'center',
  },
});
