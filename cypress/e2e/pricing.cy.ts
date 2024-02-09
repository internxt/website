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

//Check if the buttons works properly
describe('Pricing page', () => {
  const products: Products = {};
  before(() => {
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

  beforeEach(() => {
    cy.visit('/pricing');
  });

  describe('When the free plan button is clicked', () => {
    it('Then, the user is redirected to https://drive.internxt.com/new to signup', () => {
      const cardId = '#freeAccountCard';

      cy.get(cardId).should('exist');
      cy.get(cardId).contains('Sign up now').click();

      cy.url().should('eq', 'https://drive.internxt.com/new');
    });
  });

  describe('When the payment plan button is clicked', () => {
    describe('When the payment plan is monthly', () => {
      beforeEach(() => {
        cy.get('#billingButtons').contains('Monthly').click();
        cy.get('#priceTable');
      });

      describe('When the plan is 200GB of space', () => {
        it('Redirect to stripe checkout with the correct planId and mode', () => {
          checkIfProductExistAndRedirectWorks(products.month200GB);
        });
      });

      describe('When the plan is 2TB of space', () => {
        it('Redirect to stripe checkout with the correct planId and mode', () => {
          checkIfProductExistAndRedirectWorks(products.month2TB);
        });
      });

      describe('When the plan is 5TB of space', () => {
        it('Redirect to stripe checkout with the correct planId and mode', () => {
          checkIfProductExistAndRedirectWorks(products.month5TB);
        });
      });

      describe('When the plan is 10TB of space', () => {
        it('Redirect to stripe checkout with the correct planId and mode', () => {
          checkIfProductExistAndRedirectWorks(products.month10TB);
        });
      });
    });

    describe('When the payment plan is annually', () => {
      beforeEach(() => {
        cy.get('#priceTable');
      });

      describe('When the plan is 200GB of space', () => {
        it('Redirect to stripe checkout with the correct planId and mode', () => {
          checkIfProductExistAndRedirectWorks(products.year200GB);
        });
      });
      describe('When the plan is 2TB of space', () => {
        it('Redirect to stripe checkout with the correct planId and mode', () => {
          checkIfProductExistAndRedirectWorks(products.year2TB);
        });
      });
      describe('When the plan is 5TB of space', () => {
        it('Redirect to stripe checkout with the correct planId and mode', () => {
          checkIfProductExistAndRedirectWorks(products.year5TB);
        });
      });
      describe('When the plan is 10TB of space', () => {
        it('Redirect to stripe checkout with the correct planId and mode', () => {
          checkIfProductExistAndRedirectWorks(products.year10TB);
        });
      });
    });

    describe('When the payment plan is lifetime', () => {
      beforeEach(() => {
        cy.get('#billingButtons').contains('Lifetime').click();
        cy.get('#priceTable');
      });

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
});
