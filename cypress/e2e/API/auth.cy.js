describe('Authenticate or register user.', () => {
  it('regUserSessionToken', () => {
    cy.login()
  })

  it('Check the user-session', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.env('api')}/auth/check`,
      headers: {
        bearer: Cypress.env('TOKEN'),
      },
    }).then((resp) => {
      expect(resp.body).to.have.property('address')
      expect(resp.body.address).to.be.a('string')
      expect(resp.body).to.have.property('userSessionToken')
      expect(resp.body.userSessionToken).to.be.a('null')
      expect(resp.body).to.have.property('uuid')
      expect(resp.body.uuid).to.be.a('string')
      expect(resp.status).to.eq(200)
    })
  })

  it('Deletes users session', () => {
    cy.request({
      method: 'DELETE',
      url: `${Cypress.env('api')}/auth/signout`,
      headers: {
        bearer: Cypress.env('TOKEN'),
      },
    }).then((resp) => {
      expect(resp.body).to.be.empty
      expect(resp.status).to.eq(200)
    })
  })
})
