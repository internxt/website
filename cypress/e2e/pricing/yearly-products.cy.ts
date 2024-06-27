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

describe('Yearly products in Pricing page', () => {
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
  });

  describe('When the payment plan is annually', () => {
    beforeEach(() => {
      cy.visit('/pricing');
      cy.wait(3000);
    });

    describe('When the plan is 200GB of space', () => {
      it('Redirect to stripe checkout with the correct planId and mode', () => {
        cy.checkIfProductExistAndRedirectWorks(products.year200GB);
      });
    });
    describe('When the plan is 2TB of space', () => {
      it('Redirect to stripe checkout with the correct planId and mode', () => {
        cy.checkIfProductExistAndRedirectWorks(products.year2TB);
      });
    });
    describe('When the plan is 5TB of space', () => {
      it('Redirect to stripe checkout with the correct planId and mode', () => {
        cy.checkIfProductExistAndRedirectWorks(products.year5TB);
      });
    });
    describe('When the plan is 10TB of space', () => {
      it('Redirect to stripe checkout with the correct planId and mode', () => {
        cy.checkIfProductExistAndRedirectWorks(products.year10TB);
      });
    });
  });
});
