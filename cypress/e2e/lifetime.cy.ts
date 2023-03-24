/// <reference types="cypress" />
export {};

import bytes from 'bytes';

const GENERAL_COUPON_DISCOUNT = 'IoYrRdmY';
const DRIVE_WEB_URL = Cypress.env('DRIVE_WEB_URL');
const API_DRIVE_URL = Cypress.env('API_DRIVE_URL');

interface Products {
  [key: string]: {
    storage: string;
    price: number;
    planId: string;
  };
}

const url = ({ planId, couponCode }: { planId: string; couponCode?: string }) => {
  return `${DRIVE_WEB_URL}/new?redirectUrl=${encodeURIComponent(DRIVE_WEB_URL + '/checkout-plan')}${encodeURIComponent(
    `?planId=${planId}${couponCode ? '&couponCode=' + couponCode : ''}&mode=payment`,
  )}`;
};

//Check if the buttons works properly
describe('Lifetime page', () => {
  const products: Products = {};
  before(() => {
    cy.request('get', `${API_DRIVE_URL}/payments/prices`).then((response) => {
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
  describe('When the payment lifetime button is clicked', () => {
    describe('When the plan of 2TB is clicked', () => {
      it('Redirect to stripe checkout with the correct planId and mode', () => {
        cy.visit('/lifetime');
        cy.get('#priceTable').contains(`Get ${products.lifetime2TB.storage}`).click();

        cy.url().should('eq', url({ planId: products.lifetime2TB.planId, couponCode: GENERAL_COUPON_DISCOUNT }));
      });
    });

    describe('When the plan of 5TB is clicked', () => {
      it('Redirect to stripe checkout with the correct planId and mode', () => {
        cy.visit('/lifetime');
        cy.get('#priceTable').contains(`Get ${products.lifetime5TB.storage}`).click();

        cy.url().should('eq', url({ planId: products.lifetime5TB.planId, couponCode: GENERAL_COUPON_DISCOUNT }));
      });
    });

    describe('When the plan of 10TB is clicked', () => {
      it('Redirect to stripe checkout with the correct planId and mode', () => {
        cy.visit('/lifetime');
        cy.get('#priceTable').contains(`Get ${products.lifetime10TB.storage}`).click();

        cy.url().should('eq', url({ planId: products.lifetime10TB.planId, couponCode: GENERAL_COUPON_DISCOUNT }));
      });
    });
  });
});
