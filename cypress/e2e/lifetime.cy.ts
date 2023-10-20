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
      cy.get(`#planButton${products.lifetime2TB.storage}`).contains(`${products.lifetime2TB.storage}`).click();

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
      cy.get(`#planButton${products.lifetime5TB.storage}`).contains(`${products.lifetime5TB.storage}`).click();

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
      cy.get(`#planButton${products.lifetime10TB.storage}`).contains(`${products.lifetime10TB.storage}`).click();

      cy.wait(1000);

      cy.url().should((url) => {
        expect(url).to.include(products.lifetime10TB.planId);
        expect(url).to.include(coupon);
        expect(url).to.include(DRIVE_WEB_URL);
      });
    });
  });
});
