/* 
  check_home_page.test.js
  Steps for test Check home page 
*/

/// <reference types="Cypress" /> 
//TODO: Create POM and refactor code
describe("Smoke test Bloxico Website", () => {

    beforeEach(() => {
        cy.visit("https://bloxico.com/")
    })
    it("Check if you are at Bloxico Website", () => {
        cy.get(".elementor-heading-title:first-of-type:nth-of-type(1)").should("be.visible")
        cy.contains("Second to none").should('be.visible') 
    })
    it("Click on Let's get started button and check Services page", () => {
        cy.contains("LET'S GET STARTED").click()
        cy.contains('Home • Services').should('be.visible')
    })
})