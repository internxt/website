describe('Download files endpoint', () => {
  it('should return the link to download the requested file', () => {
    // Make a request to the API endpoint
    cy.request('/api/download/test-file.txt').then((response) => {
      // Ensure the response status is 200
      expect(response.status).to.equal(200);

      // Ensure the response body contains the downloadUrl property
      expect(response.body).to.have.property('downloadUrl');
    });
  });
});
