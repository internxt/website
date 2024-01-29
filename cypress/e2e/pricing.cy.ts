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

  beforeEach(() => {
    cy.visit('/pricing');
  });

  describe('When the free plan button is clicked', () => {
    it('Then, the user is redirected to https://drive.internxt.com/new to signup', () => {
      cy.get('#priceTable').contains('Sign up now').click();

      cy.url().should('eq', 'https://drive.internxt.com/new');
    });
  });
});

//   describe('When the payment plan button is clicked', () => {
//     describe('When the payment plan is monthly', () => {
//       describe('When the plan is 200GB of space', () => {
//         it('Redirect to stripe checkout with the correct planId and mode', () => {
//           cy.get('#priceTable').contains('Monthly').click();
//           cy.get(`#planButton${products.month200GB.storage}`).contains(`${products.month200GB.storage}`).click();

//           cy.url().should((url) => {
//             expect(url).to.include(DRIVE_WEB_URL);
//             expect(url).to.include(products.month200GB.planId);
//           });
//         });
//       });

//       describe('When the plan is 2TB of space', () => {
//         it('Redirect to stripe checkout with the correct planId and mode', () => {
//           cy.get('#priceTable').contains('Monthly').click();
//           cy.get(`#planButton${products.month2TB.storage}`).contains(`${products.month2TB.storage}`).click();

//           cy.url().should((url) => {
//             expect(url).to.include(DRIVE_WEB_URL);
//             expect(url).to.include(products.month2TB.planId);
//           });
//         });
//       });

//       describe('When the plan is 5TB of space', () => {
//         it('Redirect to stripe checkout with the correct planId and mode', () => {
//           cy.get('#priceTable').contains('Monthly').click();

//           cy.get('#priceTable');

//           cy.get(`#planButton${products.month5TB.storage}`).contains(`${products.month5TB.storage}`).click();

//           cy.url().should((url) => {
//             expect(url).to.include(DRIVE_WEB_URL);
//             expect(url).to.include(products.month5TB.planId);
//           });
//         });
//       });

//       describe('When the plan is 10TB of space', () => {
//         it('Redirect to stripe checkout with the correct planId and mode', () => {
//           cy.get('#priceTable').contains('Monthly').click();

//           cy.get('#priceTable');

//           cy.get(`#planButton${products.month10TB.storage}`).contains(`${products.month10TB.storage}`).click();

//           cy.url().should((url) => {
//             expect(url).to.include(DRIVE_WEB_URL);
//             expect(url).to.include(products.month10TB.planId);
//           });
//         });
//       });
//     });

//     describe('When the payment plan is annually', () => {
//       describe('When the plan is 200GB of space', () => {
//         it('Redirect to stripe checkout with the correct planId and mode', () => {
//           cy.get(`#planButton${products.year200GB.storage}`).contains(`${products.year200GB.storage}`).click();

//           cy.url().should((url) => {
//             expect(url).to.include(DRIVE_WEB_URL);
//             expect(url).to.include(products.year200GB.planId);
//           });
//         });
//       });
//       describe('When the plan is 2TB of space', () => {
//         it('Redirect to stripe checkout with the correct planId and mode', () => {
//           cy.get(`#planButton${products.year2TB.storage}`).contains(`${products.year2TB.storage}`).click();

//           cy.url().should((url) => {
//             expect(url).to.include(DRIVE_WEB_URL);
//             expect(url).to.include(products.year2TB.planId);
//           });
//         });
//       });
//       describe('When the plan is 5TB of space', () => {
//         it('Redirect to stripe checkout with the correct planId and mode', () => {
//           cy.get(`#planButton${products.year5TB.storage}`).contains(`${products.year5TB.storage}`).click();

//           cy.url().should((url) => {
//             expect(url).to.include(DRIVE_WEB_URL);
//             expect(url).to.include(products.year5TB.planId);
//           });
//         });
//       });
//       describe('When the plan is 10TB of space', () => {
//         it('Redirect to stripe checkout with the correct planId and mode', () => {
//           cy.get(`#planButton${products.year10TB.storage}`).contains(`${products.year10TB.storage}`).click();

//           cy.url().should((url) => {
//             expect(url).to.include(DRIVE_WEB_URL);
//             expect(url).to.include(products.year10TB.planId);
//           });
//         });
//       });
//     });

//     describe('When the payment plan is lifetime', () => {
//       describe('When the plan is 2TB of space', () => {
//         it('Redirect to stripe checkout with the correct planId and mode', () => {
//           cy.get('#priceTable').contains('Lifetime').click();
//           cy.get(`#planButton${products.lifetime2TB.storage}`).contains(`${products.lifetime2TB.storage}`).click();

//           cy.url().should((url) => {
//             expect(url).to.include(DRIVE_WEB_URL);
//             expect(url).to.include(products.lifetime2TB.planId);
//           });
//         });
//       });
//       describe('When the plan is 5TB of space', () => {
//         it('Redirect to stripe checkout with the correct planId and mode', () => {
//           cy.get('#priceTable').contains('Lifetime').click();
//           cy.get(`#planButton${products.lifetime5TB.storage}`).contains(`${products.lifetime5TB.storage}`).click();

//           cy.url().should((url) => {
//             expect(url).to.include(DRIVE_WEB_URL);
//             expect(url).to.include(products.lifetime5TB.planId);
//           });
//         });
//       });
//       describe('When the plan is 10TB of space', () => {
//         it('Redirect to stripe checkout with the correct planId and mode', () => {
//           cy.get('#priceTable').contains('Lifetime').click();
//           cy.get(`#planButton${products.lifetime10TB.storage}`).contains(`${products.lifetime10TB.storage}`).click();

//           cy.url().should((url) => {
//             expect(url).to.include(DRIVE_WEB_URL);
//             expect(url).to.include(products.lifetime10TB.planId);
//           });
//         });
//       });
//     });
//   });
// });
