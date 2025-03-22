const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    "baseApiUrl": "",
  },
    viewportWidth: 1920,
  video: true,
  watchForFileChanges: false,
  viewportHeight: 960,
  chromeWebSecurity: false,
  defaultCommandTimeout: 60000,
  requestTimeout: 180000,
  responseTimeout: 180000,
  pageLoadTimeout: 180000,
  screenshotsFolder: 'cypress/screenshots',

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://covis.ai',
    specPattern: [
      'cypress/e2e/task.cy.js',
    ],
    testIsolation:false,
    experimentalRunAllSpecs:true,
  },
});
