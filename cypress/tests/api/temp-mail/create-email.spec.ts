// <reference types="cypress" />
export {};

describe('Creating an email for temporary-email', () => {
  before(() => {
    cy.clearAllLocalStorage();
  });

  it('Should create an email with address and token', () => {
    cy.visit('/temporary-email');

    cy.request('GET', '/api/temp-mail/create-email').then((interception) => {
      const status = interception.status;
      const body = interception.body;

      expect(status).to.equal(200);
      expect(body).to.have.property('address');
      expect(body).to.have.property('token');
    });
  });
});
