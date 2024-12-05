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
      cy.get('#loginButton').click({ force: true });

      // Check that the user is redirected to https://drive.internxt.com/login
      cy.url().should((url) => {
        expect(url).to.include('https://drive.internxt.com/login');
      });
    });
  });

  // describe('When the user want to do Sign Up', () => {
  //   describe('When the user click on the Sign Up button', () => {
  //     it('Then, the user is redirected to https://drive.internxt.com/new', () => {
  //       // Open the home page
  //       cy.visit('/');

  //       cy.wait(2000);

  //       // Click on the Sign Up button
  //       cy.get('#signupButton').click({ force: true });

  //       // Check that the user is redirected to https://drive.internxt.com/new
  //       cy.url().should((url) => {
  //         expect(url).to.include('https://drive.internxt.com/new');
  //       });
  //     });
  //   });
  // });
});
