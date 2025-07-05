const { defineConfig } = require("cypress");
const reporter = require("cypress-mochawesome-reporter/plugin");
module.exports = defineConfig({
  e2e: {
      video: true,

     baseUrl: 'https://magento.softwaretestingboard.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});


 


 