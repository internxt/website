/// <reference types="cypress" />

import { STRIPE_PRODUCT } from '../../pages/api/stripe/stripeProducts';

//Check if the buttons works properly
describe('Pricing landing', () => {
  const DRIVE_WEB_URL = Cypress.env('DRIVE_WEB_URL');
  const TWOTB_OFF_COUPON = 'P8PSpVs6';

  const params = ({ planId, couponCode, mode }: { planId: string; couponCode?: string; mode?: string }) => {
    return `${DRIVE_WEB_URL}/new?redirectUrl=${encodeURIComponent(
      DRIVE_WEB_URL + '/checkout-plan',
    )}${encodeURIComponent(
      `?planId=${planId}${couponCode ? '&couponCode=' + couponCode : ''}&mode=${mode ? mode : 'subscription'}`,
    )}`;
  };

  describe('Free plan button', () => {
    describe('10GB free plan', () => {
      it('should redirect to https://drive.internxt.com/new', () => {
        cy.visit('/pricing', { timeout: 10000 });
        cy.get('#priceTable').contains('Get Internxt for free').click();

        cy.url().should('eq', 'https://drive.internxt.com/new');
      });
    });
  });

  describe('Paid plan button', () => {
    describe('20GB plan', () => {
      describe('Monthly', () => {
        it('Redirect to stripe checkout - 20GB', () => {
          cy.visit('/pricing', { timeout: 10000 });
          cy.get('#priceTable').contains('Monthly').click();
          cy.get('#priceTable').contains('Get 20GB').click();

          cy.url().should('eq', params({ planId: STRIPE_PRODUCT.GB201.production }));
        });
      });
      describe('Annual', () => {
        it('Redirect to stripe checkout - 20GB', () => {
          cy.visit('/pricing', { timeout: 10000 });
          cy.get('#priceTable').contains('Get 20GB').click();

          cy.url().should('eq', params({ planId: STRIPE_PRODUCT.GB2012.production }));
        });
      });
    });

    describe('200GB plan', () => {
      describe('Monthly', () => {
        it('Redirect to stripe checkout - 200GB', () => {
          cy.visit('/pricing', { timeout: 10000 });
          cy.get('#priceTable').contains('Monthly').click();
          cy.get('#priceTable').contains('Get 200GB').click();

          cy.url().should('eq', params({ planId: STRIPE_PRODUCT.GB2001.production }));
        });
      });
      describe('Annual', () => {
        it('Redirect to stripe checkout - 200GB', () => {
          cy.visit('/pricing', { timeout: 10000 });
          cy.get('#priceTable').contains('Get 200GB').click();

          cy.url().should('eq', params({ planId: STRIPE_PRODUCT.GB20012.production }));
        });
      });
    });

    describe('2TB plan', () => {
      describe('Monthly', () => {
        it('Redirect to stripe checkout - 2TB', () => {
          cy.visit('/pricing', { timeout: 10000 });
          cy.get('#priceTable').contains('Monthly').click();
          cy.get('#priceTable').contains('Get 2TB').click();

          cy.url().should('eq', params({ planId: STRIPE_PRODUCT.TB21.production }));
        });
      });
      describe('Annual', () => {
        it('Redirect to stripe checkout - 2TB', () => {
          cy.visit('/pricing', { timeout: 10000 });
          cy.contains('Get 90% off 2TB').click();

          cy.url().should('eq', params({ planId: STRIPE_PRODUCT.TB212.production, couponCode: TWOTB_OFF_COUPON }));
        });
      });
    });
    describe('lifetime plan', () => {
      describe('2TB lifetime plan', () => {
        it('Redirect to stripe checkout - 2TB', () => {
          cy.visit('/pricing', { timeout: 10000 });
          cy.get('#priceTable').contains('Lifetime').click();
          cy.get('#priceTable').contains('Get 2TB').click();

          cy.url().should(
            'eq',
            params({ planId: STRIPE_PRODUCT.lifetime2TB.production, mode: STRIPE_PRODUCT.lifetime2TB.mode }),
          );
        });
      });
      describe('5TB lifetime plan', () => {
        it('Redirect to stripe checkout - 5TB', () => {
          cy.visit('/pricing', { timeout: 10000 });
          cy.get('#priceTable').contains('Lifetime').click();
          cy.get('#priceTable').contains('Get 5TB').click();

          cy.url().should(
            'eq',
            params({ planId: STRIPE_PRODUCT.lifetime5TB.production, mode: STRIPE_PRODUCT.lifetime5TB.mode }),
          );
        });
      });
      describe('10TB lifetime plan', () => {
        it('Redirect to stripe checkout - 10TB', () => {
          cy.visit('/pricing', { timeout: 10000 });
          cy.get('#priceTable').contains('Lifetime').click();
          cy.get('#priceTable').contains('Get 10TB').click();

          cy.url().should(
            'eq',
            params({ planId: STRIPE_PRODUCT.lifetime10TB.production, mode: STRIPE_PRODUCT.lifetime10TB.mode }),
          );
        });
      });
    });
  });
});
