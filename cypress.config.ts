import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: process.env.NODE_ENV === 'production' ? 'https://internxt.com' : 'http://localhost:3001',
    viewportWidth: 1500,
    viewportHeight: 660,
    defaultCommandTimeout: 10000,
    scrollBehavior: 'center',
    chromeWebSecurity: false,
  },
});
