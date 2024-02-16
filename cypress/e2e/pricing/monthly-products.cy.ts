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

describe('Monthly products in Pricing page', () => {
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

  describe('When the payment plan is monthly', () => {
    beforeEach(() => {});

    describe('When the plan is 200GB of space', () => {
      it('Redirect to stripe checkout with the correct planId and mode', () => {
        cy.checkIfProductExistAndRedirectWorks(products.month200GB, 'Monthly');
      });
    });

    describe('When the plan is 2TB of space', () => {
      it('Redirect to stripe checkout with the correct planId and mode', () => {
        cy.checkIfProductExistAndRedirectWorks(products.month2TB, 'Monthly');
      });
    });

    describe('When the plan is 5TB of space', () => {
      it('Redirect to stripe checkout with the correct planId and mode', () => {
        cy.checkIfProductExistAndRedirectWorks(products.month5TB, 'Monthly');
      });
    });

    describe('When the plan is 10TB of space', () => {
      it('Redirect to stripe checkout with the correct planId and mode', () => {
        cy.checkIfProductExistAndRedirectWorks(products.month10TB, 'Monthly');
      });
    });
  });
});
