/*
  productsPage.js
  Selector and Methods for Products page
*/

const textData = require('../data/textData')
const BasePage = require('./basePage')
class ProductsPage extends BasePage {
    //Selectors
    productsHome_Header() { return cy.get('h2[class= "elementor-heading-title elementor-size-default"]').eq(0) }
    productsHome_Title() { return cy.get('h2[class= "elementor-heading-title elementor-size-default"]').eq(1) }
    productsBreakdown_Header() { return cy.get('h2[class= "elementor-heading-title elementor-size-default"]').eq(2) }
    productsBreakdown_Title() { return cy.get('h2[class= "elementor-heading-title elementor-size-default"]').eq(3) }
    productsBreakdownSection_Titles() { return cy.get('h2[class= "elementor-heading-title elementor-size-default"]') }
    letsGetStarted_Button() { return cy.get('a[class="elementor-button elementor-button-link elementor-size-lg"]') }
    //Methods
    checkProductsHomeHeader() {
        this.productsHome_Header().contains(textData.productsHeader2[0])
    }
    checkProductsHomeTitle() {
        this.productsHome_Title().contains(textData.productsHomeTitle).should('be.visible')
    }
    checkProductsBreakdownHeader() {
        this.productsBreakdown_Header().contains(textData.productsHeader2[1]).should('be.visible')
    }
    checkProductsBreakdownTitle() {
        this.productsBreakdown_Title().contains(textData.productsBreakdownTitle).should('be.visible')
    }
    checkProductsBreakdownSection() {
        for (let index = 4; index <= 7; index++) {
            this.productsBreakdownSection_Titles().eq(index).should(($element) => {
                expect($element.text()).to.equal(textData.productsBreakdownSection[index - 4])
            })
        }
    }
    checkLetsGetStartedButton() {
        this.letsGetStarted_Button().click()
        cy.url().should('include', 'contact')
        cy.go('back')
    }
}

module.exports = new ProductsPage()