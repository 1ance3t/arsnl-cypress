describe('Collection', () => {
  before(() => {
    cy.login()
  })
  it('Fetch geometries of a collection', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.env('api')}/collection/geometries/geometries/2`,
      headers: {
        bearer: Cypress.env('TOKEN'),
      },
    }).then((resp) => {
      console.log(resp)
      expect(resp.body.artworkData).to.have.property('artist')
      expect(resp.body.artworkData.artist).to.be.a('string')
      Cypress.env('ARTWORK_UUID', resp.body.artworkData.artworkUUID)
    })
  })

  it('Fetch Artwork data by provided collection name and artwork UUIDs', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.env('api')}/collection/Frank%20Stella%20collection/${Cypress.env(
        'ARTWORK_UUID',
      )}`,
      headers: {
        bearer: Cypress.env('TOKEN'),
      },
    }).then((resp) => {
      expect(resp.body).to.have.property('artist')
      expect(resp.body).to.have.property('artworkUUID')
      expect(resp.body).to.have.property('agreement')
      expect(resp.body).to.have.property('assets')
      expect(resp.body).to.have.property('collectionName')
      expect(resp.body).to.have.property('creationDate')
      expect(resp.body).to.have.property('description')
      expect(resp.body).to.have.property('openseaURL')
    })
  })
})
