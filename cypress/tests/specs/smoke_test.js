/// <reference types="Cypress" /> 

describe("Smoke test Bloxico Website", () => {

    beforeEach(() => {
        cy.visit("https://bloxico.com/")
    })
    it("Check if you are at Bloxico Website", () => {
        cy.get(".elementor-heading-title:first-of-type:nth-of-type(1)").should("be.visible")
        cy.contains("Second to none").should('be.visible') 
    })
})