//
// Service page 
// servicesPage.js
//

const BasePage = require('./basePage')

class servicesPage extends BasePage {
    //Selectors
    services_Header() { return cy.get('h2[class="elementor-heading-title elementor-size-default"]') }
    servicesHome_Header() { return cy.get('h2[class="elementor-heading-title elementor-size-default"]').eq(0) }
    servicesMain_Title() { return cy.get('h2[class="elementor-heading-title elementor-size-default"]').eq(1) }
    servicesBreakdown_Header() { return cy.get('h2[class="elementor-heading-title elementor-size-default"]').eq(2) }
    servicesHowWeDoIt_Header() { return cy.get('h2[class="elementor-heading-title elementor-size-default"]').eq(7) }
    readMore_Button() { return cy.get('.elementor-toggle-title') }
    letsGetStarted_Button() { return cy.get('a[class="elementor-button elementor-button-link elementor-size-lg"]').eq(1) }
    readMoreRSSP_Button() { return cy.get('a[class="elementor-button elementor-button-link elementor-size-lg"]').eq(0) }

    //Methods
    checkServicesHomeHeader() {
        this.servicesHome_Header().contains('Home • Services')
    }
    checkServicesMainTitle() {
        this.servicesMain_Title().contains('When it comes to Blockchain, we can do it all')
    }
    checkBreakdownHeader() {
        this.servicesBreakdown_Header().contains('SERVICE BREAKDOWN')
    }
    checkBreakdownSection() {
        for (let index = 4; index <= 6; index++) {
            this.services_Header().eq(index).should(($element) => {
                const expectedTexts = ['Software Development', 'IT Outsourcing', 'Blockchain consulting']
                expect($element.text()).to.equal(expectedTexts[index - 4])
            })
        }
    }
    checkReadMoreButton() {
        this.readMore_Button().should('not.be.disabled')
    }
    checkHowWeDoItHeader() {
        this.servicesHowWeDoIt_Header().contains('HOW WE DO IT')
    }
    checkLetsGetStartedButton() {
        this.letsGetStarted_Button().click()
        cy.url().should('include', 'contact')
        cy.go('back')
    }
}

module.exports = new servicesPage() 