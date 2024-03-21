/// <reference types="cypress" />
export {};
// ***********************************************
// Custom commands to use it in the tests
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import { getLatestReleaseInfo } from '../../src/lib/github';

const DRIVE_WEB_URL = Cypress.env('DRIVE_WEB_URL');

type Interval = 'Individual' | 'Lifetime';

function checkIfProductExistAndRedirectWorks(product, interval: Interval = 'Individual', switchButton?) {
  const buttonId = `#planButton${product.storage}`;
  const planId = product.planId;

  cy.visit('/pricing');
  cy.get('#billingButtons').contains(interval).click();

  if (switchButton) {
    cy.get('#switchButton').should('exist').click();
  }

  cy.get(buttonId).should('exist');
  cy.get(buttonId).click();

  cy.url().should((url) => {
    expect(url).to.include(DRIVE_WEB_URL);
    expect(url).to.include(planId);
  });
}

// Get the platform and version of the latest release
Cypress.Commands.add('getLatestReleaseInfo', (client: string, repo: string) => {
  return getLatestReleaseInfo(client, repo);
});

// Check if the product exists and the redirect works
Cypress.Commands.add('checkIfProductExistAndRedirectWorks', checkIfProductExistAndRedirectWorks);

declare global {
  namespace Cypress {
    interface Chainable {
      getLatestReleaseInfo: typeof getLatestReleaseInfo;
      checkIfProductExistAndRedirectWorks: typeof checkIfProductExistAndRedirectWorks;
    }
  }
}
