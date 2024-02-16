describe('downloadDriveLinks', () => {
  it('should return the correct download links', () => {
    cy.visit('/drive');

    cy.request('GET', '/api/download').then((response) => {
      const body = response?.body;

      expect(body.platforms).to.have.keys(['Android', 'iPad', 'iPhone', 'Windows', 'MacOS', 'UNIX', 'Linux', 'all']);
    });
  });
});
