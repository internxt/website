/// <reference types="cypress" />

import { STRIPE_PRODUCT } from '../../pages/api/stripe/stripeProducts';

//Check if the buttons works properly
describe('Pricing page', () => {
  const DRIVE_WEB_URL = Cypress.env('DRIVE_WEB_URL');
  const TWOTB_OFF_COUPON = 'P8PSpVs6';

  const url = ({ planId, couponCode, mode }: { planId: string; couponCode?: string; mode?: string }) => {
    return `${DRIVE_WEB_URL}/new?redirectUrl=${encodeURIComponent(
      DRIVE_WEB_URL + '/checkout-plan',
    )}${encodeURIComponent(
      `?planId=${planId}${couponCode ? '&couponCode=' + couponCode : ''}&mode=${mode ? mode : 'subscription'}`,
    )}`;
  };

  describe('When the free plan button is clicked', () => {
    it('Then, the user is redirected to https://drive.internxt.com/new to signup', () => {
      cy.visit('/pricing');

      cy.get('#priceTable').contains('Get Internxt for free').click();

      cy.url().should('eq', 'https://drive.internxt.com/new');
    });
  });

  describe('When the payment plan button is clicked', () => {
    describe('When the payment plan is monthly', () => {
      describe('When the plan is 20GB of space', () => {
        it('Redirect to stripe checkout with the correct planId and mode', () => {
          cy.visit('/pricing');
          cy.get('#priceTable').contains('Monthly').click();
          cy.get('#priceTable').contains('Get 20GB').click();

          cy.url().should('eq', url({ planId: STRIPE_PRODUCT.GB201.production }));
        });
      });

      describe('When the plan is 200GB of space', () => {
        it('Redirect to stripe checkout with the correct planId and mode', () => {
          cy.visit('/pricing');
          cy.get('#priceTable').contains('Monthly').click();
          cy.get('#priceTable').contains('Get 200GB').click();

          cy.url().should('eq', url({ planId: STRIPE_PRODUCT.GB2001.production }));
        });
      });

      describe('When the plan is 2TB of space', () => {
        it('Redirect to stripe checkout with the correct planId and mode', () => {
          cy.visit('/pricing');
          cy.get('#priceTable').contains('Monthly').click();
          cy.get('#priceTable').contains('Get 2TB').click();

          cy.url().should('eq', url({ planId: STRIPE_PRODUCT.TB21.production }));
        });
      });
    });

    describe('When the payment plan is annually', () => {
      describe('When the plan is 20GB of space', () => {
        it('Redirect to stripe checkout with the correct planId and mode', () => {
          cy.visit('/pricing');
          cy.get('#priceTable').contains('Get 20GB').click();

          cy.url().should('eq', url({ planId: STRIPE_PRODUCT.GB2012.production }));
        });
      });
      describe('When the plan is 200GB of space', () => {
        it('Redirect to stripe checkout with the correct planId and mode', () => {
          cy.visit('/pricing');
          cy.get('#priceTable').contains('Get 200GB').click();

          cy.url().should('eq', url({ planId: STRIPE_PRODUCT.GB20012.production }));
        });
      });
      describe('When the plan is 2TB of space', () => {
        it('Redirect to stripe checkout with the correct planId and mode', () => {
          cy.visit('/pricing');
          cy.contains('Get 90% off 2TB').click();

          cy.url().should('eq', url({ planId: STRIPE_PRODUCT.TB212.production, couponCode: TWOTB_OFF_COUPON }));
        });
      });
    });

    describe('When the payment plan is lifetime', () => {
      describe('When the plan is 2TB of space', () => {
        it('Redirect to stripe checkout with the correct planId and mode', () => {
          cy.visit('/pricing');
          cy.get('#priceTable').contains('Lifetime').click();
          cy.get('#priceTable').contains('Get 2TB').click();

          cy.url().should(
            'eq',
            url({ planId: STRIPE_PRODUCT.lifetime2TB.production, mode: STRIPE_PRODUCT.lifetime2TB.mode }),
          );
        });
      });
      describe('When the plan is 5TB of space', () => {
        it('Redirect to stripe checkout with the correct planId and mode', () => {
          cy.visit('/pricing');
          cy.get('#priceTable').contains('Lifetime').click();
          cy.get('#priceTable').contains('Get 5TB').click();

          cy.url().should(
            'eq',
            url({ planId: STRIPE_PRODUCT.lifetime5TB.production, mode: STRIPE_PRODUCT.lifetime5TB.mode }),
          );
        });
      });
      describe('When the plan is 2TB of space', () => {
        it('Redirect to stripe checkout with the correct planId and mode', () => {
          cy.visit('/pricing');
          cy.get('#priceTable').contains('Lifetime').click();
          cy.get('#priceTable').contains('Get 10TB').click();

          cy.url().should(
            'eq',
            url({ planId: STRIPE_PRODUCT.lifetime10TB.production, mode: STRIPE_PRODUCT.lifetime10TB.mode }),
          );
        });
      });
    });
  });
});
