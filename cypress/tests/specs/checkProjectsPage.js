/// <reference types="Cypress" />

const projectsPage = require("../../support/pages/projectsPage")

describe("Check Projects page", () => {
    beforeEach(() => {
        cy.visit('https://bloxico.com/projects')
    })
    it("Check Home Projects section", () => {
        projectsPage.checkProjectsHomeHeader()
        projectsPage.checkProjectsMainTitle()
    })
    it("Check Breakdown Project section", () => {
        projectsPage.checkProjectsBreakdownHeader()
        projectsPage.checkProjectsBreakdownSection()
    })
    it("Check Partners Project section", () => {
        projectsPage.checkProjectsPartnerHeader()
    })
})