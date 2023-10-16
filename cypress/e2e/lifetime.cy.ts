/// <reference types="cypress" />
export {};

import bytes from 'bytes';

export enum CouponType {
  TwoTBCoupon = 'COUPON_SUBSCRIPTION_90_OFF',
  LifetimeGeneral = 'COUPON_LIFETIME_GENERAL',
  LifetimeSpecial = 'COUPON_LIFETIME_SPECIAL',
  CloudwardsCoupon = 'COUPON_CLOUDWARDS',
}

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
  )}&skipSignupIfLoggedIn=true`;
};

//Check if the buttons works properly
describe('Lifetime page', () => {
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
    });

    cy.request('get', `${window.origin}/api/stripe/get_coupons?coupon=${CouponType.LifetimeGeneral}`).then(
      (response) => {
        coupon = response.body;
      },
    );
  });
  describe('When the payment lifetime button is clicked', () => {
    describe('When the plan of 2TB is clicked', () => {
      it('Redirect to stripe checkout with the correct planId and mode', () => {
        cy.visit('/lifetime');
        cy.get('#priceTable').contains(`Get ${products.lifetime2TB.storage}`).click();

        cy.url().should('include', url({ planId: products.lifetime2TB.planId, couponCode: coupon }));
      });
    });

    describe('When the plan of 5TB is clicked', () => {
      it('Redirect to stripe checkout with the correct planId and mode', () => {
        cy.visit('/lifetime');
        cy.get('#priceTable').contains(`Get ${products.lifetime5TB.storage}`).click();

        cy.url().should('include', url({ planId: products.lifetime5TB.planId, couponCode: coupon }));
      });
    });

    describe('When the plan of 10TB is clicked', () => {
      it('Redirect to stripe checkout with the correct planId and mode', () => {
        cy.visit('/lifetime');
        cy.get('#priceTable').contains(`Get ${products.lifetime10TB.storage}`).click();

        cy.url().should('include', url({ planId: products.lifetime10TB.planId, couponCode: coupon }));
      });
    });
  });
});
