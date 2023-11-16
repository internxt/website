/// <reference types="cypress" />
export {};
import bytes from 'bytes';

const DRIVE_WEB_URL = Cypress.env('DRIVE_WEB_URL');

export enum CouponType {
  TwoTBCoupon = 'COUPON_SUBSCRIPTION_90_OFF',
  LifetimeGeneral = 'COUPON_LIFETIME_GENERAL',
  LifetimeSpecial = 'COUPON_LIFETIME_SPECIAL',
  CloudwardsCoupon = 'COUPON_CLOUDWARDS',
}

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

  beforeEach(() => {
    cy.visit('/pricing');
  });

  describe('When the free plan button is clicked', () => {
    it('Then, the user is redirected to https://drive.internxt.com/new to signup', () => {
      cy.get('#priceTable').contains('Sign up now').click({ force: true });

      cy.url().should('eq', 'https://drive.internxt.com/new');
    });
  });

  describe('When the payment plan button is clicked', () => {
    describe('When the payment plan is monthly', () => {
      beforeEach(() => {
        cy.get('#priceTable').contains('Monthly').click();
      });
      describe('When the plan is 20GB of space', () => {
        it('Redirect to stripe checkout with the correct planId and mode', () => {
          getPlanButton(products.month20GB.storage);

          cy.url().should((url) => {
            expect(url).to.include(DRIVE_WEB_URL);
            expect(url).to.include(products.month20GB.planId);
          });
        });
      });

      describe('When the plan is 200GB of space', () => {
        it('Redirect to stripe checkout with the correct planId and mode', () => {
          getPlanButton(products.month200GB.storage);

          cy.url().should((url) => {
            expect(url).to.include(DRIVE_WEB_URL);
            expect(url).to.include(products.month200GB.planId);
          });
        });
      });

      describe('When the plan is 2TB of space', () => {
        it('Redirect to stripe checkout with the correct planId and mode', () => {
          getPlanButton(products.month2TB.storage);

          cy.url().should((url) => {
            expect(url).to.include(DRIVE_WEB_URL);
            expect(url).to.include(products.month2TB.planId);
          });
        });
      });
    });

    describe('When the payment plan is annually', () => {
      describe('When the plan is 20GB of space', () => {
        it('Redirect to stripe checkout with the correct planId and mode', () => {
          getPlanButton(products.year20GB.storage);

          cy.url().should((url) => {
            expect(url).to.include(DRIVE_WEB_URL);
            expect(url).to.include(products.year20GB.planId);
          });
        });
      });
      describe('When the plan is 200GB of space', () => {
        it('Redirect to stripe checkout with the correct planId and mode', () => {
          getPlanButton(products.year200GB.storage);

          cy.url().should((url) => {
            expect(url).to.include(DRIVE_WEB_URL);
            expect(url).to.include(products.year200GB.planId);
          });
        });
      });
      describe('When the plan is 2TB of space', () => {
        it('Redirect to stripe checkout with the correct planId and mode', () => {
          getPlanButton(products.year2TB.storage);

          cy.url().should((url) => {
            expect(url).to.include(DRIVE_WEB_URL);
            expect(url).to.include(products.year2TB.planId);
          });
        });
      });
    });

    describe('When the payment plan is lifetime', () => {
      beforeEach(() => {
        cy.get('#priceTable').contains('Lifetime').click();
      });
      describe('When the plan is 2TB of space', () => {
        it('Redirect to stripe checkout with the correct planId and mode', () => {
          getPlanButton(products.lifetime2TB.storage);

          cy.url().should((url) => {
            expect(url).to.include(products.lifetime2TB.planId);
            expect(url).to.include(DRIVE_WEB_URL);
          });
        });
      });
      describe('When the plan is 5TB of space', () => {
        it('Redirect to stripe checkout with the correct planId and mode', () => {
          getPlanButton(products.lifetime5TB.storage);

          cy.url().should((url) => {
            expect(url).to.include(products.lifetime5TB.planId);
            expect(url).to.include(DRIVE_WEB_URL);
          });
        });
      });
      describe('When the plan is 10TB of space', () => {
        it('Redirect to stripe checkout with the correct planId and mode', () => {
          getPlanButton(products.lifetime10TB.storage);

          cy.url().should((url) => {
            expect(url).to.include(products.lifetime10TB.planId);
            expect(url).to.include(DRIVE_WEB_URL);
          });
        });
      });
    });
  });
});
