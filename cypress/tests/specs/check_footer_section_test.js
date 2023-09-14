/// <reference types="Cypress" />

import homePage from "../../support/pages/homePage"

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
    //TODO: possible code refactoring, not working ATM
    // it.only("Check Servies menu hyperlink redirections", () => {
    //     cy.get('a[style="color: #fff;"]').each(($el, index, $list) => {
    //         if (index < 4) {
    //             const href = $el.attr('href')
    //             cy.wrap($el).as('link').click()
    //             cy.get('@link').should('include', href)
    //             cy.go('back')
    //         }
    //     })
    // })
    // it.only("Check Projects menu hyperlink redirections", () => {
    //     cy.get('a[style="color: #fff;"]').each(($link, index) => {
    //         if (index > 4 || index < 11) {
    //             const href = $link.attr('href')
    //             cy.wrap($link).click()
    //             cy.url().should('include', href)
    //             cy.go('back')
    //         }
    //     })
    // })
    it("Check Services menu hyperlink redirections", () => {
        homePage.checkServicesMenuFromFooter()
    })
    it("Check Project menu hyperlink redirections", () => {
        homePage.checkProjectsMenuFromFooter()
    })
})