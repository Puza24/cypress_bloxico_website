/*
  projectsPage.js
  Selector and Methods for Projects page
*/

const textData = require('../data/textData')
const BasePage = require('./basePage')
class ProjectsPage extends BasePage {
    //Selectors
    projectsHome_Header() { return cy.get('h2[class="elementor-heading-title elementor-size-default"]').eq(0) }
    projectsMain_Title() { return cy.get('h2[class="elementor-heading-title elementor-size-default"]').eq(1) }
    projectsBreakdown_Header() { return cy.get('h2[class="elementor-heading-title elementor-size-default"]').eq(2) }
    projectsPartners_Header() { return cy.get('h2[class="elementor-heading-title elementor-size-default"]').eq(9) }
    projects_Header() { return cy.get('h2[class="elementor-heading-title elementor-size-default"]') }
    //TODO: Selectors for checking partners section
    // partnerFilecoin_Icon() { return cy.get('a[href="https://filecoin.io/"]') }
    // partnerCopyleft_Icon() { return cy.get('a[href="https://copyleft.solutions/"]') }
    partnersFirstRow_Icons() { return cy.get('div[class="elementor-container elementor-column-gap-default"]').eq(13) }
    partnersSecondRow_Icons() { return cy.get('div[class="elementor-container elementor-column-gap-default"]').eq(14) }
    letsGetStarted_Button() { return cy.get('a[class="elementor-button elementor-button-link elementor-size-lg"]') }
    //Methods
    checkProjectsHomeHeader() {
        this.projectsHome_Header().contains(textData.projectsHeader2[0]).should('be.visible')
    }
    checkProjectsMainTitle() {
        this.projectsMain_Title().contains(textData.projectsTitles).should('be.visible')
    }
    checkProjectsBreakdownHeader() {
        this.projectsBreakdown_Header().contains(textData.projectsHeader2[1]).should('be.visible')
    }
    checkProjectsBreakdownSection() {
        for (let index = 4; index <= 8; index++) {
            this.projects_Header().eq(index).should(($element) => {
                expect($element.text()).to.equal(textData.projectsBreakdownTitles[index - 4])
            })
        }
    }
    checkProjectsPartnerHeader() {
        this.projectsPartners_Header().contains(textData.projectsHeader2[2]).should('be.visible')
    }
    // TODO: possible code refactoring, not working ATM
    // checkProjectsPartnerIcons() {
    //     const icons = [this.partnerFilecoin_Icon, this.partnerCopyleft_Icon]
    //     icons.forEach(icon => {
    //         icon().invoke('removeAttr', 'target').click()
    //         icons().should('include', projectsTextData.projectsPartnersURL)
    //         cy.go('back')
    //     })
    // }
    checkProjectsPartnerIcons() {
        const rows = [this.partnersFirstRow_Icons, this.partnersSecondRow_Icons]
        rows.forEach(rows => {
            rows().find('div a img[decoding="async"]').should('have.length', '4')
        })
    }
    checkProjectsLetsGetStartedButton() {
        this.letsGetStarted_Button().click()
        cy.url().should('include', 'contact')
    }
}

module.exports = new ProjectsPage()