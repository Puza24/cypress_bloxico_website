/// <reference types="Cypress" />

const productsPage = require("../../support/pages/productsPage")

describe("Check Products page", () => {

    beforeEach(() => {
        cy.visit('/products/')
    })
    it("Check Home Services section", () => {
        productsPage.checkProductsHomeHeader()
        productsPage.checkProductsHomeTitle()
    })
    it("Check Breakdown Products section", () => {
        productsPage.checkProductsBreakdownHeader()
        productsPage.checkProductsBreakdownTitle()
        productsPage.checkProductsBreakdownSection()
        productsPage.checkLetsGetStartedButton()
    })
})