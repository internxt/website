describe('Download the latest app release', () => {
  it('should return the latest download links from github', () => {
    cy.getLatestReleaseInfo('internxt', 'drive-desktop').then((latestDriveDesktopRelease) => {
      cy.getLatestReleaseInfo('internxt', 'drive-desktop-macos').then((latestDriveDesktopMacOSRelease) => {
        cy.request('GET', '/api/download').then((response) => {
          const body = response?.body;

          // Verificar que las versiones devueltas coincidan con las últimas versiones de los repositorios
          expect(body.platforms.Windows).to.equal(latestDriveDesktopRelease.links.windows);
          expect(body.platforms.MacOS).to.equal(latestDriveDesktopMacOSRelease.links.macos);
          // Verifica las otras plataformas según sea necesario
        });
      });
    });
  });
});
