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

interface Products {
  [key: string]: {
    storage: string;
    price: number;
    planId: string;
  };
}

function getPlanButton(planButton) {
  cy.get(`#planButton${planButton}`).contains(`${planButton}`).click({ force: true });
}

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

  beforeEach(() => {
    cy.request('get', `${window.origin}/api/stripe/get_coupons?coupon=${CouponType.LifetimeGeneral}`).then(
      (response) => {
        coupon = response.body;
        cy.visit('/lifetime');
      },
    );
  });

  describe('When the plan of 2TB is clicked', () => {
    it('Redirect to stripe checkout with the correct planId and mode', () => {
      getPlanButton(products.lifetime2TB.storage);

      cy.wait(1000);

      cy.url().should((url) => {
        expect(url).to.include(products.lifetime2TB.planId);
        expect(url).to.include(coupon);
        expect(url).to.include(DRIVE_WEB_URL);
      });
    });
  });

  describe('When the plan of 5TB is clicked', () => {
    it('Redirect to stripe checkout with the correct planId and mode', () => {
      getPlanButton(products.lifetime5TB.storage);

      cy.wait(1000);

      cy.url().should((url) => {
        expect(url).to.include(products.lifetime5TB.planId);
        expect(url).to.include(coupon);
        expect(url).to.include(DRIVE_WEB_URL);
      });
    });
  });

  describe('When the plan of 10TB is clicked', () => {
    it('Redirect to stripe checkout with the correct planId and mode', () => {
      getPlanButton(products.lifetime10TB.storage);

      cy.wait(1000);

      cy.url().should((url) => {
        expect(url).to.include(products.lifetime10TB.planId);
        expect(url).to.include(coupon);
        expect(url).to.include(DRIVE_WEB_URL);
      });
    });
  });
});
