//
// Projects page
// projectsPage.js
//

const projectsTextData = require('../data/projectsTextData')
const BasePage = require('./basePage')

class projectssPage extends BasePage {
    //Selectors
    projectsHome_Header() { return cy.get('h2[class="elementor-heading-title elementor-size-default"]').eq(0) }
    projectsMain_Title() { return cy.get('h2[class="elementor-heading-title elementor-size-default"]').eq(1) }
    projectsBreakdown_Header() { return cy.get('h2[class="elementor-heading-title elementor-size-default"]').eq(2) }
    projectsPartners_Header() { return cy.get('h2[class="elementor-heading-title elementor-size-default"]').eq(9) }
    projects_Header() { return cy.get('h2[class="elementor-heading-title elementor-size-default"]') }
    projectsPartners_Icons() { return cy.get('a[class="elementor-element elementor-element-1ddfb66 elementor-widget elementor-widget-image"]') }

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
}
module.exports = new projectssPage()