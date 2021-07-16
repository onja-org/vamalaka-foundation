describe('Storybook Components', () => {
  beforeEach('visits option story', () => {
    cy.visit('http://localhost:6006')
    cy.contains('RoleSelectOption', { timeout: 20000 })
  })

  it('Has the buyer option component', () => {
    cy.contains('RoleSelectOption')
    cy.visit(
      'http://localhost:6006/iframe.html?id=components-roleselectoption--buyer&args=&viewMode=story'
    )
    cy.get('div').find('img').should('have.attr', 'src')
    cy.get('div').find('h6')
    cy.get('div').find('p')
    cy.get('div').find('button')
  })

  it('Has the seller option component', () => {
    cy.contains('RoleSelectOption')
    cy.visit(
      'http://localhost:6006/iframe.html?id=components-roleselectoption--seller&args=&viewMode=story'
    )
    cy.get('div').find('img').should('have.attr', 'src')
    cy.get('div').find('h6')
    cy.get('div').find('p')
    cy.get('div').find('button')
  })
})
