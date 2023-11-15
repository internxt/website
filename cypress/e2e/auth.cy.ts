/// <reference types="cypress" />

export {};

const characters = '0123456789';

const isProduction = process.env.NODE_ENV === 'production';

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
      cy.url().should('eq', 'https://drive.internxt.com/login');
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
        cy.url().should('eq', 'https://drive.internxt.com/new');
      });
    });

    describe('When the user do the Sign Up from the Sign Up inline (Home page)', () => {
      it('Then, the user is redirected to https://drive.internxt.com/new to do auto Sign Up', () => {
        const linkToRedirect = isProduction
          ? 'https://drive.internxt.com/app'
          : 'https://drive.internxt.com/new?autoSubmit=true';

        cy.visit('/');

        cy.get('#signupEmail').type(`test${generateString(4)}@inxt.com`, { force: true });
        cy.get('#signupPassword').type('test1234.', { force: true });

        cy.get('#signupInlineSubmit').click({ force: true });

        isProduction && cy.getCookie('cr').should('exist');

        cy.url().should('eq', linkToRedirect);
      });
    });
  });
});
