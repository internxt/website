/// <reference types="cypress" />
export {};
import bytes from 'bytes';
import { CouponType } from './lifetime.cy';

const DRIVE_WEB_URL = Cypress.env('DRIVE_WEB_URL');

interface Products {
  [key: string]: {
    storage: string;
    price: number;
    planId: string;
  };
}

const url = ({ planId, couponCode, mode }: { planId: string; couponCode?: string; mode?: string }) => {
  return `${DRIVE_WEB_URL}/new?redirectUrl=${encodeURIComponent(DRIVE_WEB_URL + '/checkout-plan')}${encodeURIComponent(
    `?planId=${planId}${couponCode ? '&couponCode=' + couponCode : ''}&mode=${mode ? mode : 'subscription'}`,
  )}&skipSignupIfLoggedIn=true`;
};

//Check if the buttons works properly
describe('Pricing page', () => {
  const products: Products = {};
  let coupon: string;
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
      cy.request('get', `${window.origin}/api/stripe/get_coupons?coupon=${CouponType.TwoTBCoupon}`).then((response) => {
        coupon = response.body;
      });
    });
  });

  describe('When the free plan button is clicked', () => {
    it('Then, the user is redirected to https://drive.internxt.com/new to signup', () => {
      cy.visit('/pricing');

      cy.get('#priceTable').contains('Sign up now').click();

      cy.url().should('eq', 'https://drive.internxt.com/new');
    });
  });

  describe('When the payment plan button is clicked', () => {
    describe('When the payment plan is monthly', () => {
      describe('When the plan is 20GB of space', () => {
        it('Redirect to stripe checkout with the correct planId and mode', () => {
          cy.visit('/pricing');
          cy.get('#priceTable').contains('Monthly').click();
          cy.get('#priceTable').contains(`Get ${products.month20GB.storage}`).click();

          cy.url().should('eq', url({ planId: products.month20GB.planId }));
        });
      });

      describe('When the plan is 200GB of space', () => {
        it('Redirect to stripe checkout with the correct planId and mode', () => {
          cy.visit('/pricing');
          cy.get('#priceTable').contains('Monthly').click();
          cy.get('#priceTable').contains(`Get ${products.month200GB.storage}`).click();

          cy.url().should('eq', url({ planId: products.month200GB.planId }));
        });
      });

      describe('When the plan is 2TB of space', () => {
        it('Redirect to stripe checkout with the correct planId and mode', () => {
          cy.visit('/pricing');
          cy.get('#priceTable').contains('Monthly').click();
          cy.get('#priceTable').contains(`Get ${products.month2TB.storage}`).click();

          cy.url().should('eq', url({ planId: products.month2TB.planId }));
        });
      });
    });

    describe('When the payment plan is annually', () => {
      describe('When the plan is 20GB of space', () => {
        it('Redirect to stripe checkout with the correct planId and mode', () => {
          cy.visit('/pricing');
          cy.get('#priceTable').contains(`Get ${products.year20GB.storage}`).click();

          cy.url().should('eq', url({ planId: products.year20GB.planId }));
        });
      });
      describe('When the plan is 200GB of space', () => {
        it('Redirect to stripe checkout with the correct planId and mode', () => {
          cy.visit('/pricing');
          cy.get('#priceTable').contains(`Get ${products.year200GB.storage}`).click();

          cy.url().should('eq', url({ planId: products.year200GB.planId }));
        });
      });
      describe('When the plan is 2TB of space', () => {
        it('Redirect to stripe checkout with the correct planId and mode', () => {
          cy.visit('/pricing');
          cy.get('#priceTable').contains('button', `${products.year2TB.storage}`).click();

          cy.url().should('contain', url({ planId: products.year2TB.planId }));
        });
      });
    });

    describe('When the payment plan is lifetime', () => {
      describe('When the plan is 2TB of space', () => {
        it('Redirect to stripe checkout with the correct planId and mode', () => {
          cy.visit('/pricing');
          cy.get('#priceTable').contains('Lifetime').click();
          cy.get('#priceTable').contains(`Get ${products.lifetime2TB.storage}`).click();

          cy.url().should('eq', url({ planId: products.lifetime2TB.planId, mode: 'payment' }));
        });
      });
      describe('When the plan is 5TB of space', () => {
        it('Redirect to stripe checkout with the correct planId and mode', () => {
          cy.visit('/pricing');
          cy.get('#priceTable').contains('Lifetime').click();
          cy.get('#priceTable').contains(`Get ${products.lifetime5TB.storage}`).click();

          cy.url().should('eq', url({ planId: products.lifetime5TB.planId, mode: 'payment' }));
        });
      });
      describe('When the plan is 10TB of space', () => {
        it('Redirect to stripe checkout with the correct planId and mode', () => {
          cy.visit('/pricing');
          cy.get('#priceTable').contains('Lifetime').click();
          cy.get('#priceTable').contains(`Get ${products.lifetime10TB.storage}`).click();

          cy.url().should('eq', url({ planId: products.lifetime10TB.planId, mode: 'payment' }));
        });
      });
    });
  });
});
