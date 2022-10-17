describe.only('profile', () => {
  it('should login and return token', () => {
    cy.login()
  })

  it('Check the stats', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.env('api')}/stats`,
      headers: {
        bearer: Cypress.env('TOKEN'),
      },
    }).then((resp) => {
      expect(resp.status).to.eq(200)
      expect(resp.body).to.have.property('privateSale')
      expect(resp.body.privateSale).to.be.a('boolean')
      expect(resp.body).to.have.property('publicSale')
      expect(resp.body.publicSale).to.be.a('boolean')
    })
  })

  it('Return the list of all used whitelist tokens with user data', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.env('api')}/whitelist_used_tokens`,
      headers: {
        bearer: Cypress.env('TOKEN'),
      },
    }).then((resp) => {
      expect(resp.status).to.eq(200)
      expect(resp.body).to.have.property('usedTokensData')
    })
  })

  it('Fetch artworks data by profiles address', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.env('api')}/me/artworks?limit=10&offset=10`,
      headers: {
        bearer: Cypress.env('TOKEN'),
      },
    }).then((resp) => {
      expect(resp.status).to.eq(200)
      expect(resp.body).to.have.property('address')
      expect(resp.body.address).to.be.a('string')
      expect(resp.body).to.have.property('artworkData')
      expect(resp.body.artworkData).to.be.a('array')
    })
  })
})
