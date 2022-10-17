describe('Collection', () => {
  before(() => {
    cy.login()
  })
  it('Fetch collection data by provided collection name', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.env('api')}/collection/geometries/geometries`,
      headers: {
        bearer: Cypress.env('TOKEN'),
      },
    }).then((resp) => {
      expect(resp.body).to.have.property('artworkEditionsData')
      expect(resp.body.artworkEditionsData).to.be.a('array')
      expect(resp.body).to.have.property('collectionName')
      expect(resp.body.collectionName).to.be.a('string')
      expect(resp.status).to.eq(200)
    })
  })
  it('Fetch collection data by provided collection name', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.env('api')}/me/artworks`,
      headers: {
        bearer: Cypress.env('TOKEN'),
      },
    }).then((resp) => {
      expect(resp.body).to.have.property('address')
      expect(resp.body.address).to.be.a('string')
      expect(resp.body).to.have.property('artworkData')
      expect(resp.body.artworkData).to.be.a('array')
      console.log(resp)
      expect(resp.status).to.eq(200)
    })
  })
})
