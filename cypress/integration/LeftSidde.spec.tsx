/// <reference types="cypress" />

import { COPYFILE_FICLONE_FORCE } from "constants"

describe("LeftSide", () => {
    beforeEach("visits LeftSide", () => {
        cy.visit("http://localhost:6006")
        cy.contains("LeftSide", {timeout: 20000})

    })
    it("Has the left side component", () => {
        cy.contains("LeftSide")
        cy.visit("http://localhost:6006/?path=/story/example-introduction--page")
        cy.get('div')
        cy.contains("p")
    })
})
