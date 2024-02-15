/// <reference types="cypress" />
export {};

describe('Creating an email for temporary-email', () => {
  before(() => {
    cy.clearAllLocalStorage();
  });

  it('Should create an email with address and token', () => {
    cy.intercept('GET', '/api/temp-mail/create-email').as('createEmail');

    cy.visit('/temporary-email');
    cy.wait('@createEmail').then((interception) => {
      const res = interception.response;
      if (!res) throw new Error('No response from the server');

      expect(res.statusCode).to.equal(200);
      expect(res.body).to.have.property('address');
      expect(res.body).to.have.property('token');
    });
  });
});
