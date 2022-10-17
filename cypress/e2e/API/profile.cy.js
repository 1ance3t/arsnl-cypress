describe('profile', () => {
  it('should login and return token', () => {
    cy.login()
  })

  it('should return user data model', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.env('api')}/profile/me`,
      headers: {
        bearer: Cypress.env('TOKEN'),
      },
    }).then((resp) => {
      expect(resp.status).to.eq(200)
      console.log(resp.body.UserUUID)
      Cypress.env('UserUUID', resp.body.UserUUID)
    })
  })
  it('update user', () => {
    cy.request({
      method: 'PUT',
      url: `${Cypress.env('api')}/profile/me/update`,
      headers: {
        bearer: Cypress.env('TOKEN'),
      },
      body: {
        Discord: 'myDiscord',
        address: Cypress.env('address'),
        email: '',
      },
    }).then((resp) => {
      expect(resp.status).to.eq(200)
    })
  })

  it('delete user', () => {
    cy.request({
      method: 'DELETE',
      url: `${Cypress.env('api')}/profile/me/delete`,
      headers: {
        bearer: Cypress.env('TOKEN'),
      },
    }).then((resp) => {
      expect(resp.status).to.eq(200)
    })
  })
  it('profileUUID', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.env('api')}/profile/${Cypress.env('UserUUID')}`,
      headers: {
        bearer: Cypress.env('TOKEN'),
      },
    }).then((resp) => {
      expect(resp.status).to.eq(200)
    })
  })
})
