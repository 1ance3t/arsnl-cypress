module.exports = class Page {
  open(path) {
    return cy.visit(`https://prod-v2.arsnl.art${path}`)
  }
}
