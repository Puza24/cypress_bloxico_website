/* 
  check_footer_section_test.js
  Steps for test Check footer section 
*/

/// <reference types="Cypress" />
const homePage = require("../../support/pages/homePage")

describe("Check Footer Section", () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it("Check redirection for Bloxico logo", () => {
        homePage.checkBloxicoLogoFromFooter()
    })
    it("Check Let's get in touch section", () => {
        homePage.checkLetsGetInTouchFromFooter()
    })
    it("Check contact email address", () => {
        homePage.footerEmail_Hyperlink().should('not.be.disabled')
    })
    it("Check Contact Us button", () => {
        homePage.checkContactUsPageFromFooter()
    })
    it("Check Products hyperlink redirection", () => {
        homePage.checkProductsPageFromFooter()
    })
    it("Check Privacy Policy hyperlink redirection", () => {
        homePage.checkPrivacyPolicyPageFromFooter()
    })
    it("Check Services menu hyperlink redirections", () => {
        homePage.checkServicesMenuFromFooter()
    })
    it("Check Project menu hyperlink redirections", () => {
        homePage.checkProjectsMenuFromFooter()
    })
    // it("Check Bloxico Social hyperlink redirection", () => {
    //     homePage.checkSocialLinksFromFooter()
    // })
})