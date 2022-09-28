module.exports = {
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
  async rewrites() {
    return [
      // REDIRECTS TO HOME
      ...[
        '/cloud',
        '/roadmap',
        '/home',
        '/core',
        '/ivacy',
        '/default.html',
        '/default.htm',
        '/merch',
        '/giveawayoftheday',
      ].map((src) => ({
        source: src,
        destination: '/',
      })),
      // REDIRECTS TO HOME (WITH LANG)
      ...[
        '/cloud',
        '/roadmap',
        '/home',
        '/core',
        '/ivacy',
        '/default.html',
        '/default.htm',
        '/merch',
        '/giveawayoftheday',
      ].map((src) => ({
        source: `/:lang${src}`,
        destination: '/:lang',
      })),
      // =======================================================
      // REDIRECTS TO PRICING
      ...['/sharewareonsale', '/special-offer', '/lifetime', '/pricing-individuals-annually'].map((src) => ({
        source: src,
        destination: '/pricing',
      })),
      // REDIRECTS TO PRICING (WITH LANG)
      ...['/sharewareonsale', '/special-offer', '/lifetime', '/pricing-individuals-annually'].map((src) => ({
        source: `/:lang${src}`,
        destination: '/:lang/pricing',
      })),
      // =======================================================
      // REDIRECTS TO INTERNXT DESIGN SYSTEM DOCUMENTATION
      {
        source: '/ids',
        destination: 'https://inxt.atlassian.net/wiki/spaces/DESIGN',
      },
      // =======================================================
      {
        source: '/team',
        destination: '/about',
      },
      {
        source: '/:lang/team',
        destination: '/:lang/about',
      },
      {
        source: '/login',
        destination: 'https://drive.internxt.com/login',
      },
      {
        source: '/:lang/login',
        destination: 'https://drive.internxt.com/login',
      },
      {
        source: '/products',
        destination: '/drive',
      },
      {
        source: '/:lang/products',
        destination: '/:lang/drive',
      },
      {
        source: '/inxt',
        destination: '/token',
      },
      {
        source: '/:lang/inxt',
        destination: '/:lang/token',
      },
      {
        source: '/comparison',
        destination: '/cloud-storage-comparison',
      },
      {
        source: '/:lang/comparison',
        destination: '/:lang/cloud-storage-comparison',
      },
    ];
  },
  images: {
    domains: ['cdn-images-1.medium.com'],
  },
  env: {
    SEGMENT_API_KEY_PROD: process.env.SEGMENT_API_KEY_PROD,
  },
};
