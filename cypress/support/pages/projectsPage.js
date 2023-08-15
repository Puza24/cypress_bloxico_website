//
// Projects page
// projectsPage.js
//

const projectsTextData = require('../data/projectsTextData')
const BasePage = require('./basePage')

class projectsPage extends BasePage {
    //Selectors
    projectsHome_Header() { return cy.get('h2[class="elementor-heading-title elementor-size-default"]').eq(0) }
    projectsMain_Title() { return cy.get('h2[class="elementor-heading-title elementor-size-default"]').eq(1) }
    projectsBreakdown_Header() { return cy.get('h2[class="elementor-heading-title elementor-size-default"]').eq(2) }
    projectsPartners_Header() { return cy.get('h2[class="elementor-heading-title elementor-size-default"]').eq(9) }
    projects_Header() { return cy.get('h2[class="elementor-heading-title elementor-size-default"]') }
    // partnerFilecoin_Icon() { return cy.get('a[href="https://filecoin.io/"]') }
    // partnerCopyleft_Icon() { return cy.get('a[href="https://copyleft.solutions/"]') }
    partnersFirstRow_Icons() { return cy.get('div[class="elementor-container elementor-column-gap-default"]').eq(13) }
    partnersSecondRow_Icons() { return cy.get('div[class="elementor-container elementor-column-gap-default"]').eq(14) }
    letsGetStarted_Button() { return cy.get('a[class="elementor-button elementor-button-link elementor-size-lg"]') }

    //Methods
    checkProjectsHomeHeader() {
        this.projectsHome_Header().contains('Home • Projects').should('be.visible')
    }
    checkProjectsMainTitle() {
        this.projectsMain_Title().contains('Projects we did are a proven track record').should('be.visible')
    }
    checkProjectsBreakdownHeader() {
        this.projectsBreakdown_Header().contains('PROJECT BREAKDOWN').should('be.visible')
    }
    checkProjectsBreakdownSection() {
        for (let index = 4; index <= 8; index++) {
            this.projects_Header().eq(index).should(($element) => {
                expect($element.text()).to.equal(projectsTextData.projectsBreakdownTitles[index - 4])
            })
        }
    }
    checkProjectsPartnerHeader() {
        this.projectsPartners_Header().contains('PARTNERS').should('be.visible')
    }
    // ToDO - maybe better solution but it is not working
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
module.exports = new projectsPage()