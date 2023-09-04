//
// Contact page 
// contactPage.js
//

const textData = require('../data/textData')
const BasePage = require('./basePage')

class contactPage extends BasePage {
    //Selectors
    contactHome_Header() { return cy.get('h2[class="elementor-heading-title elementor-size-default"]') }
    contactMain_Title() { return cy.get('h2[class="elementor-heading-title elementor-size-default"]').eq(1) }
    contactAbout_Header() { return cy.get('h2[class="elementor-heading-title elementor-size-default"]').eq(2) }
    aboutCulture_Tab() { return cy.get('#elementor-tab-title-1801') }
    aboutOurValues_Tab() { return cy.get('#elementor-tab-title-1802') }
    aboutOurTeam_Tab() { return cy.get('#elementor-tab-title-1803') }
    aboutOurPartners_Tab() { return cy.get('#elementor-tab-title-1804') }
    // contactAbout_Tabs() {return cy.get('.elementor-element-ac8a3de > :nth-child(1)')}
    contactBloxico_Header() { return cy.get('h2[class="elementor-heading-title elementor-size-default"]').eq(4) }
    joinBloxico_Button() { return cy.get('[class="elementor-button-text"]').contains('JOIN BLOXICO') }
    contactBloxico_Title() { return cy.get('h2[class="elementor-heading-title elementor-size-default"]').eq(5) }
    contactEmail_Button() { return cy.get('a[href="mailto:contact@bloxico.com"]').eq(0) }
    //Methods
    checkContactHomeSection() {
        this.contactHome_Header().contains(textData.contactHeader2[0]).should('be.visible')
        this.contactMain_Title().contains(textData.contactTitle[0])
    }
    checkContactAboutSectionHeader() {
        this.contactAbout_Header().contains(textData.contactHeader2[1]).should('be.visible')
    }
    checkContactAboutSection() {
        const tabs = [this.aboutCulture_Tab, this.aboutOurValues_Tab, this.aboutOurTeam_Tab, this.aboutOurPartners_Tab]
        tabs.forEach(tabs => {
            // tabs().click().should('include', textData.contactAboutTabs)
            tabs().should('not.be.disabled')
        })
    }
    checkJoinBloxicoButton() {
        this.joinBloxico_Button().should('not.be.disabled')
    }
    checkContactBloxicoHeader() {
        this.contactBloxico_Header().contains(textData.contactHeader2[2]).should('be.visible')
    }
    checkContactBloxicoSection() {
        this.contactBloxico_Title().contains(textData.contactTitle[1]).should('be.visible')
        this.contactEmail_Button().should('not.be.disabled')
    }
}

module.exports = new contactPage()