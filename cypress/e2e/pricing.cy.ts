/// <reference types="cypress" />
export {};
import bytes from 'bytes';

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
          cy.request('get', 'https://api.internxt.com/payments/prices').then((response) => {
            response.body.map((plan) => {
              if (bytes(plan.bytes) === '20GB' && plan.interval === 'month') {
                cy.url().should('eq', url({ planId: plan.id }));
              }
            });
          });
        });
      });
    });

    describe('When the plan is 200GB of space', () => {
      it('Redirect to stripe checkout with the correct planId and mode', () => {
        cy.visit('/pricing');
        cy.get('#priceTable').contains('Monthly').click();
        cy.get('#priceTable').contains('Get 200GB').click();

        cy.request('get', 'https://api.internxt.com/payments/prices').then((response) => {
          response.body.map((plan) => {
            if (bytes(plan.bytes) === '200GB' && plan.interval === 'month') {
              cy.url().should('eq', url({ planId: plan.id }));
            }
          });
        });
      });
    });

    describe('When the plan is 2TB of space', () => {
      it('Redirect to stripe checkout with the correct planId and mode', () => {
        cy.visit('/pricing');
        cy.get('#priceTable').contains('Monthly').click();
        cy.get('#priceTable').contains('Get 2TB').click();

        cy.request('get', 'https://api.internxt.com/payments/prices').then((response) => {
          response.body.map((plan) => {
            if (bytes(plan.bytes) === '2TB' && plan.interval === 'month') {
              cy.url().should('eq', url({ planId: plan.id }));
            }
          });
        });
      });
    });

    describe('When the payment plan is annually', () => {
      describe('When the plan is 20GB of space', () => {
        it('Redirect to stripe checkout with the correct planId and mode', () => {
          cy.visit('/pricing');
          cy.get('#priceTable').contains('Get 20GB').click();

          cy.request('get', 'https://api.internxt.com/payments/prices').then((response) => {
            response.body.map((plan) => {
              if (bytes(plan.bytes) === '20GB' && plan.interval === 'year') {
                cy.url().should('eq', url({ planId: plan.id }));
              }
            });
          });
        });
      });
      describe('When the plan is 200GB of space', () => {
        it('Redirect to stripe checkout with the correct planId and mode', () => {
          cy.visit('/pricing');
          cy.get('#priceTable').contains('Get 200GB').click();

          cy.request('get', 'https://api.internxt.com/payments/prices').then((response) => {
            response.body.map((plan) => {
              if (bytes(plan.bytes) === '200GB' && plan.interval === 'year') {
                cy.url().should('eq', url({ planId: plan.id }));
              }
            });
          });
        });
      });
      describe('When the plan is 2TB of space', () => {
        it('Redirect to stripe checkout with the correct planId and mode', () => {
          cy.visit('/pricing');
          cy.contains('Get 90% off 2TB').click();

          cy.request('get', 'https://api.internxt.com/payments/prices').then((response) => {
            response.body.map((plan) => {
              if (bytes(plan.bytes) === '2TB' && plan.interval === 'year') {
                cy.url().should('eq', url({ planId: plan.id, couponCode: TWOTB_OFF_COUPON }));
              }
            });
          });
        });
      });
    });

    describe('When the payment plan is lifetime', () => {
      describe('When the plan is 2TB of space', () => {
        it('Redirect to stripe checkout with the correct planId and mode', () => {
          cy.visit('/pricing');
          cy.get('#priceTable').contains('Lifetime').click();
          cy.get('#priceTable').contains('Get 2TB').click();

          cy.request('get', 'https://api.internxt.com/payments/prices').then((response) => {
            response.body.map((plan) => {
              if (bytes(plan.bytes) === '2TB' && plan.interval === 'lifetime') {
                cy.url().should('eq', url({ planId: plan.id, mode: 'payment' }));
              }
            });
          });
        });
      });
      describe('When the plan is 5TB of space', () => {
        it('Redirect to stripe checkout with the correct planId and mode', () => {
          cy.visit('/pricing');
          cy.get('#priceTable').contains('Lifetime').click();
          cy.get('#priceTable').contains('Get 5TB').click();

          cy.request('get', 'https://api.internxt.com/payments/prices').then((response) => {
            response.body.map((plan) => {
              if (bytes(plan.bytes) === '5TB' && plan.interval === 'lifetime') {
                cy.url().should('eq', url({ planId: plan.id, mode: 'payment' }));
              }
            });
          });
        });
      });
      describe('When the plan is 2TB of space', () => {
        it('Redirect to stripe checkout with the correct planId and mode', () => {
          cy.visit('/pricing');
          cy.get('#priceTable').contains('Lifetime').click();
          cy.get('#priceTable').contains('Get 10TB').click();

          cy.request('get', 'https://api.internxt.com/payments/prices').then((response) => {
            response.body.map((plan) => {
              if (bytes(plan.bytes) === '10TB' && plan.interval === 'lifetime') {
                cy.url().should('eq', url({ planId: plan.id, mode: 'payment' }));
              }
            });
          });
        });
      });
    });
  });
});
