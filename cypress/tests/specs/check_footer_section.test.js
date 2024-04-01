/* 
  check_footer_section.test.js
  Steps for test Check footer section 
*/

/// <reference types="Cypress" />
const homePage = require("../../support/pages/homePage");

describe("Check Footer Section", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  // TODO - fix failing test
  // it("Check redirection for Bloxico logo", () => {
  //   cy.pause();
  //   homePage.checkBloxicoLogoFromFooter();
  // });
  it("Check Let's get in touch section", () => {
    homePage.checkLetsGetInTouchFromFooter();
    homePage.footerEmail_Hyperlink().should("not.be.disabled");
    homePage.checkContactUsPageFromFooter();
  });
  it("Check Products hyperlink redirection", () => {
    homePage.checkProductsPageFromFooter();
  });
  it("Check Privacy Policy hyperlink redirection", () => {
    homePage.checkPrivacyPolicyPageFromFooter();
  });
  it("Check Services menu hyperlink redirections", () => {
    homePage.checkServicesMenuFromFooter();
  });
  it("Check Project menu hyperlink redirections", () => {
    homePage.checkProjectsMenuFromFooter();
  });
//   it("Check Bloxico Social hyperlink redirection", () => {
//     homePage.checkSocialLinksFromFooter();
//   });
});
