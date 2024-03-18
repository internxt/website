/// <reference types="cypress" />
export {};

describe('Checking that the banners redirect the user to the correct page', () => {
  describe('Hello bar (Top banner)', () => {
    it('Should redirect the user to lifetime page', () => {
      const bannerId = '#topBannerActionButton';
      const namepathToRedirect = 'lifetime';

      cy.visit('/');

      cy.get(bannerId).should('exist');
      cy.get(bannerId).click();

      cy.url().should('contain', namepathToRedirect);
    });
  });
});
