/// <reference types="cypress" />

describe('Input Name', () => {
  beforeEach('visits input component', () => {
    cy.visit('http://localhost:6006')
    cy.contains('Input Name', { timeout: 20000 })
  })
  it('Has input components', () => {
    cy.visit(
      'http://localhost:6006/iframe.html?id=input-input-name--text-input&viewMode=story'
    )
    cy.get('label')
    cy.get('input').should('have.attr', 'placeholder')
    cy.get('input').should('have.attr', 'type')
  })
  it('Has input password components', () => {
    cy.visit(
      'http://localhost:6006/iframe.html?id=input-input-name--password-input&args=&viewMode=story'
    )
    cy.get('label')
    cy.get('input').should('have.attr', 'placeholder')
    cy.get('input').should('have.attr', 'type')
    cy.contains('Show')
  })
})
