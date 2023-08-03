// 
// Home page
// homePage.js
//

const BasePage = require('./basePage')

class homePage extends BasePage {

    //Selectors
    elements = {
        footerBloxico_Logo: () => cy.get('a[href="https://bloxico.com/"]:visible').eq(1),
        footerContactSection_Title: () => cy.contains("LET’S GET IN TOUCH!"),
        footerAddress_Text: () => cy.contains('.elementor-element-d8ef344', 'Veljka Dugoševića'),
        footerEmail_Hyperlink: () => cy.get('a[href="mailto:contact@bloxico.com"]').eq(0),
        footerContact_Button: () => cy.contains('.elementor-button-content-wrapper', 'CONTACT US').find('.elementor-button-text'),
        footerProducts_Hyperlink: () => cy.get('a[href="https://bloxico.com/products/"]:visible').eq(1),
        footerPrivacyPolicy_Hyperlink: () => cy.get('a[href="https://bloxico.com/privacy-policy/"]:visible').eq(0),
        footerServices_Hyperlink: () => cy.get('a[href="https://bloxico.com/services/"]:visible').eq(2),
        footerProject_Hyperlink: () => cy.get('a[href="https://bloxico.com/projects/"]:visible').eq(1)
    }
    //Methods
    clickBloxicoLogo() {
        this.elements.footerBloxico_Logo().click()
    }
    clickProductsHyperlink() {
        this.elements.footerProducts_Hyperlink().click()
    }
    clickPrivacyPolicyHyperlink() {
        this.elements.footerPrivacyPolicy_Hyperlink().click()
    }
    clickContactUsButton() {
        this.elements.footerContact_Button().click()
    }
    clickServicesHyperlink() {
        this.elements.footerServices_Hyperlink().click()
    }
    checkFooterServicesMenu() {
        const hrefValues = [
            'https://bloxico.com/services#software-development',
            'https://bloxico.com/services#it-outsourcing',
            'https://bloxico.com/services#blockchain-consulting'
        ]
        hrefValues.forEach((href) => {
            cy.get(`a[href="${href}"]:visible`).each(($link) => {
                cy.wrap($link).click()
                cy.url().should('include', href)
                cy.go('back')
            })
        })
    }
    clickProjectHyperlink() {
        this.elements.footerProject_Hyperlink().click()
    }
    checkFooterProjectsMenu() {
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
                cy.url().should('include', href)
                cy.go('back')
            })
        })
    }
}

module.exports = new homePage()