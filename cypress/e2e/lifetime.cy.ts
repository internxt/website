/// <reference types="cypress" />
export {};

import bytes from 'bytes';

const GENERAL_COUPON_DISCOUNT = 'IoYrRdmY';
const DRIVE_WEB_URL = Cypress.env('DRIVE_WEB_URL');
const API_DRIVE_URL = Cypress.env('API_DRIVE_URL');

const url = ({ planId, couponCode }: { planId: string; couponCode?: string }) => {
  return `${DRIVE_WEB_URL}/new?redirectUrl=${encodeURIComponent(DRIVE_WEB_URL + '/checkout-plan')}${encodeURIComponent(
    `?planId=${planId}${couponCode ? '&couponCode=' + couponCode : ''}&mode=payment`,
  )}`;
};

//Check if the buttons works properly
describe('Lifetime page', () => {
  describe('When the payment lifetime button is clicked', () => {
    describe('When the plan of 2TB is clicked', () => {
      it('Redirect to stripe checkout with the correct planId and mode', () => {
        cy.visit('/lifetime');
        cy.get('#priceTable').contains('Get 2TB').click();

        cy.request('get', `${API_DRIVE_URL}/payments/prices`).then((response) => {
          response.body.map((plan) => {
            if (bytes(plan.bytes) === '2TB' && plan.interval === 'lifetime') {
              cy.url().should('eq', url({ planId: plan.id, couponCode: GENERAL_COUPON_DISCOUNT }));
            }
          });
        });
      });
    });

    describe('When the plan of 5TB is clicked', () => {
      it('Redirect to stripe checkout with the correct planId and mode', () => {
        cy.visit('/lifetime');
        cy.get('#priceTable').contains('Get 5TB').click();

        cy.request('get', `${API_DRIVE_URL}/payments/prices`).then((response) => {
          response.body.map((plan) => {
            if (bytes(plan.bytes) === '5TB' && plan.interval === 'lifetime') {
              cy.url().should('eq', url({ planId: plan.id, couponCode: GENERAL_COUPON_DISCOUNT }));
            }
          });
        });
      });
    });

    describe('When the plan of 10TB is clicked', () => {
      it('Redirect to stripe checkout with the correct planId and mode', () => {
        cy.visit('/lifetime');
        cy.get('#priceTable').contains('Get 10TB').click();

        cy.request('get', `${API_DRIVE_URL}/payments/prices`).then((response) => {
          response.body.map((plan) => {
            if (bytes(plan.bytes) === '10TB' && plan.interval === 'lifetime') {
              cy.url().should('eq', url({ planId: plan.id, couponCode: GENERAL_COUPON_DISCOUNT }));
            }
          });
        });
      });
    });
  });
});
