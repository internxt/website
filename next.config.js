module.exports = {
  i18n: {
    locales: ['en', 'es', 'fr'],
    defaultLocale: 'en',
  },
  async redirects() {
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
        permanent: false,
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
        permanent: false,
      })),
      // =======================================================
      // REDIRECTS TO PRICING
      ...['/sharewareonsale', '/special-offer', '/lifetime', '/pricing-individuals-annually'].map((src) => ({
        source: src,
        destination: '/pricing',
        permanent: false,
      })),
      // REDIRECTS TO PRICING (WITH LANG)
      ...['/sharewareonsale', '/special-offer', '/lifetime', '/pricing-individuals-annually'].map((src) => ({
        source: `/:lang${src}`,
        destination: '/:lang/pricing',
        permanent: false,
      })),
      // =======================================================
      // REDIRECTS TO INTERNXT DESIGN SYSTEM DOCUMENTATION
      {
        source: '/ids',
        destination: 'https://inxt.atlassian.net/wiki/spaces/DESIGN',
        permanent: false,
      },
      // =======================================================
      {
        source: '/team',
        destination: '/about',
        permanent: false,
      },
      {
        source: '/:lang/team',
        destination: '/:lang/about',
        permanent: false,
      },
      {
        source: '/login',
        destination: 'https://drive.internxt.com/login',
        permanent: false,
      },
      {
        source: '/:lang/cyber-awareness',
        destination: '/cyber-awareness',
        permanent: false,
      },
      {
        source: '/:lang/login',
        destination: 'https://drive.internxt.com/login',
        permanent: false,
      },
      {
        source: '/products',
        destination: '/drive',
        permanent: false,
      },
      {
        source: '/:lang/products',
        destination: '/:lang/drive',
        permanent: false,
      },
      {
        source: '/inxt',
        destination: '/token',
        permanent: false,
      },
      {
        source: '/:lang/inxt',
        destination: '/:lang/token',
        permanent: false,
      },
      {
        source: '/comparison',
        destination: '/cloud-storage-comparison',
        permanent: false,
      },
      {
        source: '/:lang/comparison',
        destination: '/:lang/cloud-storage-comparison',
        permanent: false,
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
