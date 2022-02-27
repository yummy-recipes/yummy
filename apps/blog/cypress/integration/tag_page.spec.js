context('Tag page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('renders properly', () => {
    cy.get('a').contains('Desery J').click()
    cy.wait(500)
    cy.get('a').contains('Woda').click()
    cy.wait(500)
    cy.get('section').contains('a', 'Nagłówek').parent().find('a').should('have.length', 9)
  })
})
