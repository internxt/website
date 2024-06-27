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

function checkIfProductExistAndRedirectWorks(product, interval: Interval = 'Individual', switchButton = false) {
  const buttonId = `#planButton${product.storage}`;
  const planId = product.planId;

  cy.get('#billingButtons').contains(interval).should('be.visible').click({ force: true });

  if (switchButton) {
    cy.get('#switchButton').should('exist').should('be.visible');
    cy.wait(1000);
    cy.get('#switchButton').click({ force: true });
  }

  cy.get(buttonId).should('exist').should('be.visible').click({ force: true });

  cy.wait(3000);

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

Cypress.Commands.add('forceClick', { prevSubject: 'element' }, (subject, options) => {
  cy.wrap(subject).click({ force: true });
});

declare global {
  namespace Cypress {
    interface Chainable {
      getLatestReleaseInfo: typeof getLatestReleaseInfo;
      checkIfProductExistAndRedirectWorks: typeof checkIfProductExistAndRedirectWorks;
      forceClick;
    }
  }
}
