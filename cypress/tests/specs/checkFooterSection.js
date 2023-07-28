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
        cy.contains('.elementor-element-d8ef344', 'Veljka Dugoševića').should('be.visible')
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
        cy.get('a[href="https://bloxico.com/services/"]:visible').eq(2).click();
        cy.url().should('include', 'services')
        const hrefValues = [
            'https://bloxico.com/services#software-development',
            'https://bloxico.com/services#it-outsourcing',
            'https://bloxico.com/services#blockchain-consulting'
        ]
        hrefValues.forEach((href) => {
            cy.get(`a[href="${href}"]:visible`).each(($link) => {
                cy.wrap($link).click()
                cy.url().should('include', 'services')
            })
        })
    })
    it("Check Project menu hyperlink redirections", () => {
        cy.get('a[href="https://bloxico.com/projects/"]:visible').eq(1).click()
        cy.url().should('include', 'project')
        cy.go('back')

        const hrefValues = [
            'https://bloxico.com/projects#nft-tix',
            'https://bloxico.com/projects#keevo',
            'https://bloxico.com/projects#atala-scan',
            'https://bloxico.com/projects#catalyst-voting-system',
            'https://bloxico.com/projects#system-test-matrix'
        ]
        hrefValues.forEach((href) => {
            cy.get(`a[href="${href}"]:visible`).each(($link) => {
                cy.wrap($link).click()
                cy.url().should('include', 'project')
                cy.go('back')

            })
        })
    })
})