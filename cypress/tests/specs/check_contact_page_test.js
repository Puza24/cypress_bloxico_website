/// <reference types="Cypress" />

const contactPage = require("../../support/pages/contactPage")

describe("Check Services page", () => {

    beforeEach(() => {
        cy.visit('/contact')
    })
    it("Check Home Contact section", () => {
        contactPage.checkContactHomeSection()
    })
    it.only("Check About Contact section", () => {
        contactPage.checkContactAboutSectionHeader()
        contactPage.checkContactAboutSection()
    })
})