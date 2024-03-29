/* 
  check_contact_page.test.js
  Steps for test Check contact page 
*/

/// <reference types="Cypress" />
const contactPage = require("../../support/pages/contactPage")

describe("Check Services page", () => {
    beforeEach(() => {
        cy.visit('/contact')
    })
    it("Check Home Contact section", () => {
        contactPage.checkContactHomeSection()
    })
    it("Check About Contact section", () => {
        contactPage.checkContactAboutSectionHeader()
        contactPage.checkContactAboutSection()
        contactPage.checkJoinBloxicoButton()
    })
    it("Check Contact Bloxico section", () => {
        contactPage.checkContactBloxicoHeader()
        contactPage.checkContactBloxicoSection()
    })
})