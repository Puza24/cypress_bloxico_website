/// <reference types="Cypress" />

const servicePage = require("../../support/pages/servicePage")

describe("Check Services page", () => {
    
    beforeEach(() => {
        cy.visit('/services/')
    })
    it("Check Home Services section", () => {
        servicePage.checkServicesHomeHeader()
        servicePage.checkServicesMainTitle()
    })
    it("Check Breakdown Services section", () => {
        servicePage.checkBreakdownHeader()
        servicePage.checkBreakdownSection()
        servicePage.checkReadMoreButton()
    })
    it("Check How we do it Services section", () => {
        servicePage.checkHowWeDoItHeader()
        // TODO: Check redirection when opened on the same window, not working ATM
        // servicePage.readMoreRSSP_Button().invoke('removeAttr', 'target').click()
        // cy.url().should('include', 'Bloxico-RSSP-Procedure')
        // cy.go('back')
        servicePage.checkLetsGetStartedButton()
    })
})