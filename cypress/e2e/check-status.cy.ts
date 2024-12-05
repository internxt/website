/// <reference types="cypress" />

export {};
// THe first item is empty because it is the home page
const nameFiles = [
  '',
  'about',
  'affiliates',
  'annual',
  'black-friday',
  'byte-converter',
  'cloud-storage-comparison',
  'cloudwards',
  'cyber-awareness',
  'dealfuel',
  'drive',
  'legal',
  'lifetime_special',
  'lifetime',
  'media-area',
  'open-source',
  'partner-discount',
  'password-checker',
  'password-generator',
  'photos',
  'pricing',
  'privacy-directory',
  'privacy',
  'stackcommerce',
  'techradar-discount',
  'temporary-email',
  'virus-scanner',
  'what-does-google-know-about-me',
  'locker',
  'startpage',
  'file-converter',
  'specialoffer/freeuser',
];

const langs = {
  en: 'English',
  es: 'Spanish',
  de: 'German',
  fr: 'French',
  it: 'Italian',
  ru: 'Russian',
  zh: 'Chinese',
  'zh-tw': 'Taiwan',
};

describe('Verify that pages do not produce a 500 error', () => {
  Object.keys(langs).forEach((lang, index) => {
    describe(`Verify that pages do not produce a 500 error for ${langs[lang]} version`, () => {
      nameFiles.forEach((route) => {
        it(`${route} page`, () => {
          cy.request({
            url: `/${lang}/${route}`,
          }).then((response) => {
            expect(response.status).to.eq(200);
          });
        });
      });
    });
  });
});
