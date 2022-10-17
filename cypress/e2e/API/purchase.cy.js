describe('profile', () => {
  it('should login and return token', () => {
    cy.login()
  })

  it('Purchase available edition for specific collection geometry via stripe', () => {
    cy.request({
      method: 'POST',
      url: `${Cypress.env('api')}/purchase/geometry/9/stripe`,
      headers: {
        bearer: Cypress.env('TOKEN'),
      },
    }).then((resp) => {
      console.log(resp)
      expect(resp.status).to.eq(200)
    })
  })
})
