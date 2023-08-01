/// <reference types="Cypress" />

describe("Check Services page", () => {

    beforeEach(() => {
        cy.visit('https://bloxico.com/services/')
    })
    it("Check Home Services section", () => {
        cy.get('h2[class="elementor-heading-title elementor-size-default"]').as('HeaderText')
        cy.get('@HeaderText').eq(0).contains('Home • Services')
        cy.get('@HeaderText').eq(1).contains('When it comes to Blockchain, we can do it all')
    })
    it("Check Breakdown Services section", () => {
        cy.get('h2[class="elementor-heading-title elementor-size-default"]').as('HeaderText')
        cy.get('@HeaderText').eq(2).contains('SERVICE BREAKDOWN')
        for (let index = 4; index <= 6; index++) {
            cy.get('@HeaderText').eq(index).should(($element) => {
                const expectedTexts = ['Software Development', 'IT Outsourcing', 'Blockchain consulting']
                expect($element.text()).to.equal(expectedTexts[index - 4])
            })
        }
        cy.get('.elementor-toggle-title').should('not.be.disabled').click()
    })
    it("Check How we do it Services section", () => {
        cy.get('h2[class="elementor-heading-title elementor-size-default"]').as('HeaderText')
        cy.get('@HeaderText').eq(7).contains('HOW WE DO IT')
        cy.get('a[class="elementor-button elementor-button-link elementor-size-lg"]').as('sectionButton')
        // cy.get('@sectionButton').eq(0).invoke('removeAttr', 'target').click()
        // cy.url().should('include', 'Bloxico-RSSP-Procedure')
        // cy.go('back')
        cy.get('@sectionButton').eq(1).click()
        cy.url().should('include', 'contact')
        cy.go('back')
    })
})