/// <reference types="cypress" />
export {};

import { VPN_CHROME_WEB_STORE } from '@/constants';

const VPN_PATHNAME = '/vpn';
const BUTTON_TEXT = 'Download VPN';

describe('RedirectButton component', () => {
  const redirectButtonId = '#redirect-button-id';
  describe('Redirect the user to the VPN Chrome Web Store', () => {
    beforeEach(() => {
      cy.visit(VPN_PATHNAME);
    });

    it('should render the button with correct text', () => {
      cy.get(redirectButtonId).should('contain', BUTTON_TEXT);
    });

    it('should have the correct URL', () => {
      cy.get(redirectButtonId).should('have.attr', 'href', VPN_CHROME_WEB_STORE);
    });

    it('should open the link in a new tab', () => {
      cy.get(redirectButtonId).should('have.attr', 'target', '_blank');
    });
  });
});
