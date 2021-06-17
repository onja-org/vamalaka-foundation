/// <reference types="cypress" />

describe("Storybook", () => {
    beforeEach("visits storybook", () => {
        cy.visit("http://localhost:6006")
        cy.contains("LeftSide", {timeout: 20000})

    })
  
    it("Has the left side component", () => {
        cy.contains("LeftSide")
        cy.visit("http://localhost:6006/iframe.html?id=leftside--view-1&args=&viewMode=story")
    })
})