const Page = require('./page')

class LandingPage extends Page {
  get connectWalletBtn() {
    return cy.get('div[@class="Dropdown_dropdown__kyod3"]')
  }

  open() {
    return super.open('profile')
  }
}

module.exports = new LandingPage()
