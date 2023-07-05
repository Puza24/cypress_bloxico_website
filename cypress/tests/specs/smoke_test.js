/// <reference types="Cypress" /> 

describe("Smoke test Bloxico Website", () => {

    beforeEach(() => {
        cy.visit("https://bloxico.com/")
    })
    // it("Check if you are at Bloxico Website", () => {
    //     cy.get(".elementor-heading-title:first-of-type:nth-of-type(1)").should("be.visible")
    //     cy.contains("Second to none").should('be.visible') 
    // })
    // it("Click on Let's get started button", () => {
    //     cy.contains("LET'S GET STARTED").click()
    //     cy.contains('Home • Services').should('be.visible')
    // })
    it("Check Services dropdown", () => {
        cy.contains("LET'S GET STARTED").click()
        cy.contains('i[class="elementor-menu-toggle__icon--open eicon-menu-bar"]').click()
        // cy.get('#sm-16885723209546094-1 > .sub-arrow').click()
        
    })
})
