/// <reference types="cypress" />
export {};
import bytes from 'bytes';

const DRIVE_WEB_URL = Cypress.env('DRIVE_WEB_URL');

interface Products {
  [key: string]: {
    storage: string;
    price: number;
    planId: string;
  };
}

function checkIfProductExistAndRedirectWorks(product) {
  const buttonId = `#planButton${product.storage}`;
  const planId = product.planId;

  cy.get(buttonId).should('exist');
  cy.get(buttonId).contains(`${product.storage}`).click();

  cy.url().should((url) => {
    expect(url).to.include(DRIVE_WEB_URL);
    expect(url).to.include(planId);
  });
}

describe('Lifetime products in Pricing page', () => {
  const products: Products = {};
  beforeEach(() => {
    cy.request('get', `${window.origin}/api/stripe/stripe_products`).then((response) => {
      response.body.map((product) => {
        const id = product.interval + bytes(product.bytes);

        products[id] = {
          storage: bytes(product.bytes),
          price: product.amount / 100,
          planId: product.id,
        };
      });
    });
    cy.visit('/pricing');
    cy.get('#billingButtons').contains('Lifetime').click();
  });

  describe('When the payment plan is lifetime', () => {
    describe('When the plan is 2TB of space', () => {
      it('Redirect to stripe checkout with the correct planId and mode', () => {
        checkIfProductExistAndRedirectWorks(products.lifetime2TB);
      });
    });
    describe('When the plan is 5TB of space', () => {
      it('Redirect to stripe checkout with the correct planId and mode', () => {
        checkIfProductExistAndRedirectWorks(products.lifetime5TB);
      });
    });
    describe('When the plan is 10TB of space', () => {
      it('Redirect to stripe checkout with the correct planId and mode', () => {
        checkIfProductExistAndRedirectWorks(products.lifetime10TB);
      });
    });
  });
});
