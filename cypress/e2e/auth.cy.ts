/// <reference types="cypress" />

export {};

const characters = '0123456789';

function generateString(length) {
  let result = ' ';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

describe('Auth flow (Sign Up / Log In)', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  describe('When the user click on the Log In button', () => {
    it('Then, the user is redirected to https://drive.internxt.com/login', () => {
      // Open the home page
      cy.visit('/');

      // Click on the Log In button
      cy.get('#loginButton').click();

      // Check that the user is redirected to https://drive.internxt.com/login
      cy.url().should((url) => {
        expect(url).to.include('https://drive.internxt.com/login');
      });
    });
  });

  describe('When the user want to do Sign Up', () => {
    describe('When the user click on the Sign Up button', () => {
      it('Then, the user is redirected to https://drive.internxt.com/new', () => {
        // Open the home page
        cy.visit('/');

        // Click on the Sign Up button
        cy.get('#signupButton').as('btn').click();

        // Check that the user is redirected to https://drive.internxt.com/new
        cy.url().should((url) => {
          expect(url).to.include('https://drive.internxt.com/new');
        });
      });
    });

    describe('When the user do the Sign Up from the Sign Up inline (Home page)', () => {
      it('Then, the user is redirected to https://drive.internxt.com/new to do auto Sign Up', () => {
        cy.visit('/');

        // Fill the email and password fields
        cy.get('#signupEmail').type(`test${generateString(4)}@inxt.com`, { force: true });
        cy.get('#signupPassword').type('test1234.', { force: true });

        // Click on the Sign Up button
        cy.get('#signupInlineSubmit').click();

        // Check that the user is redirected to https://drive.internxt.com/new to do auto Sign Up
        cy.url().should((url) => {
          expect(url).to.include('https://drive.internxt.com/new?autoSubmit=true');
        });
      });
    });

    describe('When the user clicks on the free plan button in the card price section of the card', () => {
      it('Then, the user is redirected to https://drive.internxt.com/new to signup', () => {
        const cardId = '#freeAccountCard';

        cy.get(cardId).should('exist');
        cy.get(cardId).contains('Sign up now').click();

        cy.url().should('eq', 'https://drive.internxt.com/new');
      });
    });
  });
});
