/// <reference types="Cypress" />

describe("Check Footer Section", () => {

    beforeEach(() => {
        cy.visit('https://bloxico.com/')
    })
    it("Check redirection for Bloxico logo", () => {
        cy.get('a[href="https://bloxico.com/"]:visible').eq(1).click()
        cy.url().should('include', 'bloxico')
    })
    it("Check Let's get in touch section", () => {
        cy.contains("LET’S GET IN TOUCH!").should('be.visible')
        cy.contains('.elementor-element-7b85885', 'Veljka Dugoševića').should('be.visible')
    })
    it("Check contact email address", () => {
        cy.get('a[href="mailto:contact@bloxico.com"]').eq(0).should('not.be.disabled')
    })
    it("Check Contact Us button", () => {
        cy.contains('.elementor-button-content-wrapper', 'CONTACT US').find('.elementor-button-text').click()
        cy.url().should('include', 'contact')
    })
    it("Check Products hyperlink redirection", () => {
        cy.get('a[href="https://bloxico.com/products/"]:visible').eq(1).click()
        cy.url().should('include', 'products')
    })
    it("Check Privacy Policy hyperlink redirection", () => {
        cy.get('a[href="https://bloxico.com/privacy-policy/"]:visible').eq(0).click()
        cy.url().should('include', 'privacy-policy')
    })
    // it.only("Check Servies menu hyperlink redirections", () => {
    //     cy.get('a[style="color: #fff;"]').each(($link, index) => {
    //         if (index < 4) {
    //             const href = $link.attr('href')
    //             cy.wrap($link).click()
    //             cy.url().should('include', href)
    //         }
    //     })
    // })
    // it("Check Projects menu hyperlink redirections", () => {
    //     cy.get('a[style="color: #fff;"]').each(($link, index) => {
    //         if (index > 4 || index < 11) {
    //             const href = $link.attr('href')
    //             cy.wrap($link).click()
    //             cy.url().should('include', href)
    //         }
    //     })
    // })
})