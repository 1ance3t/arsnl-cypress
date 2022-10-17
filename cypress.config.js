const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'https://prod-v2.arsnl.art',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    viewportHeight: 1000,
    viewportWidth: 1280,
    chromeWebSecurity: false,
    retries: 3,
    env: {
      api: 'https://prod-v2-api.arsnl.art/api/v1',
      address: '0x90797f2AfbA52143f816F474D61cA4bb2D901269',
      signature:
        '0x1a57ae9a4a04b7ecc5dfec500c75d25ae1eab5e8580cdd750e1b1e2eb5c3228f10578e37b3a12afdd9e90857efa29b1722f002d0655816ff89f1d89bce554c9e1c',
    },
  },
  // baseUrl: 'https://prod-v2.arsnl.art/',
})
