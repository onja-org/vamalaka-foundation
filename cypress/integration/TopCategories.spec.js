/// <reference types="cypress" />


describe('Storybook', () => {
    beforeEach('visits storybook', () => {
        cy.visit('http://localhost:6006')
        cy.contains('TopCategories', { timeout: 20000 })
    })
    it('Has top categories and buttons', () => {
        cy.contains('TopCategories')
        cy.visit(
            'http://localhost:6006/iframe.html?id=components-topcategories--button-cat&args=&viewMode=story'
        )
        cy.contains('Top categories')
        cy.contains('Food')
        cy.contains('Spices')
        cy.contains('Handmade')
        cy.contains('Clothing')
        cy.contains('Collectibles')
        cy.contains('Everything')
        cy.get('ul').children('button')
    })
})
