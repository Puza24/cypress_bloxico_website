describe("Check Footer Section", () => {

    beforeEach(() => {
        cy.visit('https://bloxico.com/')
    })
    it("Check redirection for Bloxico logo", () => {
        cy.get('a[href="https://bloxico.com/"]:visible').eq(1).click()
        cy.url().should('include', 'bloxico')
    })
    // it("Check Let's get in touch section", () => {
    //     cy.contains("LET'S GET IN TOUCH!").should('be.visible')
    // })
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
})