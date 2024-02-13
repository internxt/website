/// <reference types="cypress" />
export {};

describe('Testing Temporary Email API', () => {
  it(
    'Should generate a temporary email',
    {
      baseUrl: 'https://internxt.com',
    },
    () => {
      cy.request({
        method: 'GET',
        url: '/api/temp-mail/create-email',
      }).then((response) => {
        expect(response.status).to.eq(200);

        expect(response.body).to.have.property('address');
        expect(response.body).to.have.property('token');
      });
    },
  );
});
