const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implementasi event jika diperlukan
    },
    baseUrl: 'https://lms.teknologidigital.co.id',
    specPattern: 'cypress/e2e/**/*.cy.js',
  },
})
