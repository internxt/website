/// <reference types="cypress" />
export {};
import bytes from 'bytes';

interface Products {
  [key: string]: {
    storage: string;
    price: number;
    planId: string;
  };
}

describe('Lifetime products in Pricing page', () => {
  const products: Products = {};
  beforeEach(() => {
    cy.request('get', `${window.origin}/api/stripe/stripe_products?currency=eur`).then((response) => {
      response.body.individuals.map((product) => {
        const id = product.interval + bytes(product.bytes);

        products[id] = {
          storage: bytes(product.bytes),
          price: product.amount / 100,
          planId: product.id,
        };
      });
    });
  });

  describe('When the payment plan is lifetime', () => {
    beforeEach(() => {
      cy.visit('/pricing');
      cy.wait(3000);
    });

    describe('When the plan is 2TB of space', () => {
      it('Redirect to stripe checkout with the correct planId and mode', () => {
        cy.checkIfProductExistAndRedirectWorks(products.lifetime2TB, 'Lifetime');
      });
    });
    describe('When the plan is 5TB of space', () => {
      it('Redirect to stripe checkout with the correct planId and mode', () => {
        cy.checkIfProductExistAndRedirectWorks(products.lifetime5TB, 'Lifetime');
      });
    });
    describe('When the plan is 10TB of space', () => {
      it('Redirect to stripe checkout with the correct planId and mode', () => {
        cy.checkIfProductExistAndRedirectWorks(products.lifetime10TB, 'Lifetime');
      });
    });
  });
});
