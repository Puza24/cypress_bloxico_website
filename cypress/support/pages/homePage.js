// 
// Home page
// homePage.js
//

const urlData = require('../data/urlData')
const BasePage = require('./basePage')

class homePage extends BasePage {

    //Selectors
    footerBloxico_Logo() { return cy.get('a[href="https://bloxico.com/"]:visible').eq(1) }
    footerContactSection_Title() { return cy.contains("LET’S GET IN TOUCH!") }
    footerAddress_Text() { return cy.contains('.elementor-element-d8ef344', 'Veljka Dugoševića') }
    footerEmail_Hyperlink() { return cy.get('a[href="mailto:contact@bloxico.com"]').eq(0) }
    footerContact_Button() { return cy.contains('.elementor-button-content-wrapper', 'CONTACT US').find('.elementor-button-text') }
    footerProducts_Hyperlink() { return cy.get('a[href="https://bloxico.com/products/"]:visible').eq(1) }
    footerPrivacyPolicy_Hyperlink() { return cy.get('a[href="https://bloxico.com/privacy-policy/"]:visible').eq(0) }
    footerServices_Hyperlink() { return cy.get('a[href="https://bloxico.com/services/"]:visible').eq(2) }
    footerProject_Hyperlink() { return cy.get('a[href="https://bloxico.com/projects/"]:visible').eq(1) }

    //Methods
    checkBloxicoLogoFromFooter() {
        this.footerBloxico_Logo().click()
        cy.url().should('include', 'bloxico')
    }
    checkLetsGetInTouchFromFooter() {
        this.footerContactSection_Title().should('be.visible')
        this.footerAddress_Text().should('be.visible')
    }
    checkProductsPageFromFooter() {
        this.footerProducts_Hyperlink().click()
        cy.url().should('include', 'products')
    }
    checkPrivacyPolicyPageFromFooter() {
        this.footerPrivacyPolicy_Hyperlink().click()
        cy.url().should('include', 'privacy-policy')
    }
    checkContactUsPageFromFooter() {
        this.footerContact_Button().click()
        cy.url().should('include', 'contact')
    }
    clickServicesHyperlink() {
        this.footerServices_Hyperlink().click()
    }
    checkServicesMenuFromFooter() {
        this.clickServicesHyperlink()
        cy.url().should('include', 'services')
        cy.go('back')
        const hrefValues = [urlData.softwareDevelopmentURL, urlData.itOutsourcingURL, urlData.blockchainConsultingURL]
        hrefValues.forEach((href) => {
            cy.get(`a[href="${href}"]:visible`).each(($link) => {
                cy.wrap($link).click()
                cy.url().should('include', href)
                cy.go('back')
            })
        })
    }
    clickProjectHyperlink() {
        this.footerProject_Hyperlink().click()
    }
    checkProjectsMenuFromFooter() {
        this.clickProjectHyperlink()
        cy.url().should('include', 'project')
        cy.go('back')
        const hrefValues = [urlData.nftTixURL, urlData.keevoURL, urlData.atalaScanURL, urlData.catalysVotingURL, urlData.testMatrixURL]
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