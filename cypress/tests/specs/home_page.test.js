/* 
  home_page.test.js
  Steps for test Check home page 
*/

/// <reference types="Cypress" />
const textData = require("../../support/data/textData");
const homePage = require("../../support/pages/homePage");

describe("Smoke test Bloxico Website", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Check Hero section", () => {
    homePage.checkTitle();
    homePage.checkLetsGetStarted();
  });
});
