context('Blog', () => {
  beforeEach(() => {
    cy.visit('/blog')
  })

  it('renders properly', () => {
    cy.get('a[class*=card]').should('have.length', 2)

    cy.get('a[class*=card]:first').should($card => {
      expect($card.find('span[class*=contentCategory]')).to.contain('blog')
      expect($card.find('h2[class*=contentTitle]')).to.contain('A second demo')
      expect($card.find('span[class*=datePublished]')).to.contain('22 maj 2019')
      expect($card.find('div[class*=contentSummary] p')).to.contain('Salami ground')
      expect($card.find('div[class*=contentSummary] p').text().length).to.eq(237)
      expect($card.find('span[class*=showMore]')).to.contain('Czytaj dalej')
    })
  })

  it('renders the post page properly', () => {
    cy.get('a[class*=card]:first').click({force: true})
    cy.wait(500)

    cy.get('div[class*=post_intro]').should($post => {
      expect($post.find('ol[class*=breadcrumbs] li:first')).to.contain('Strona Główna')
      expect($post.find('ol[class*=breadcrumbs] li:last')).to.contain('blog')
      expect($post.find('h1[class*=postTitle]')).to.contain('A second demo')
      expect($post.find('span[class*=datePublished]')).to.contain('22 maj 2019')
      expect($post.find('div[class*=postHeadline] p')).to.contain('Salami ground')
      expect($post.find('div[class*=postHeadline] p').text().length).to.eq(237)
    })

    cy.get('div[class*=post_body]').should($post => {
      expect($post.find('p')).to.have.length(5)
      expect($post.find('p')).to.contain('Spicy jalapeno bacon')
      expect($post.find('p').text().length).to.eq(100)
    })
  })
})
