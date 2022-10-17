Cypress.Commands.add('login', () => {
  cy.request({
    method: 'POST',
    url: Cypress.env('api') + '/auth/signin',
    body: {
      address: Cypress.env('address'),
      signature: Cypress.env('signature'),
    },
  }).then((resp) => {
    expect(resp.status).to.eq(201)
    expect(resp.body).to.have.property('address')
    expect(resp.body.address).to.be.a('string')
    expect(resp.body).to.have.property('signature')
    expect(resp.body.signature).to.be.a('string')
    expect(resp.body).to.have.property('userSessionToken')
    expect(resp.body.userSessionToken).to.be.a('string')
    Cypress.env('TOKEN', resp.body.userSessionToken)
    cy.setCookie('_hjAbsoluteSessionInProgress', '1')
    window.localStorage.setItem('userSessionToken', resp.body.userSessionToken)
    window.localStorage.setItem('signature', resp.body.signature)
    window.localStorage.setItem('wallet_provider', 'MetaMask')
    window.localStorage.setItem('friends_with_mate', true)
    window.localStorage.setItem('signed', true)
  })
})
