/// <reference types="Cypress" />

import homePage from "../../support/pages/homePage"

describe("Check Footer Section", () => {

    beforeEach(() => {
        cy.visit('https://bloxico.com/')
    })
    it("Check redirection for Bloxico logo", () => {
        homePage.clickBloxicoLogo()
        cy.url().should('include', 'bloxico')
    })
    it("Check Let's get in touch section", () => {
        homePage.elements.footerContactSection_Title().should('be.visible')
        homePage.elements.footerAddress_Text().should('be.visible')
    })
    it("Check contact email address", () => {
        homePage.elements.footerEmail_Hyperlink().should('not.be.disabled')
    })
    it("Check Contact Us button", () => {
        homePage.clickContactUsButton()
        cy.url().should('include', 'contact')
    })
    it("Check Products hyperlink redirection", () => {
        homePage.clickProductsHyperlink()
        cy.url().should('include', 'products')
    })
    it("Check Privacy Policy hyperlink redirection", () => {
        homePage.clickPrivacyPolicyHyperlink()
        cy.url().should('include', 'privacy-policy')
    })
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
        homePage.clickServicesHyperlink()
        cy.url().should('include', 'services')
        cy.go('back')
        homePage.checkFooterServicesMenu()
    })
    it("Check Project menu hyperlink redirections", () => {
        homePage.clickProjectHyperlink()
        cy.url().should('include', 'project')
        cy.go('back')
        homePage.checkFooterProjectsMenu()
    })
})