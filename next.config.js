module.exports = {
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
  async redirects() {
    return [
      {
        source: '/team',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/:lang/team',
        destination: '/:lang/about',
        permanent: true,
      },
      {
        source: '/ivacy',
        destination: '/',
        permanent: true,
      },
      {
        source: '/:lang/ivacy',
        destination: '/',
        permanent: true,
      },
      {
        source: '/login',
        destination: 'https://drive.internxt.com/login',
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
        source: '/exclusive-lifetime',
        destination: '/lifetime',
        permanent: false,
      },
      {
        source: '/:lang/exclusive-lifetime',
        destination: '/:lang/lifetime',
        permanent: false,
      },
      {
        source: '/lifetime-2tb',
        destination: '/lifetime',
        permanent: false,
      },
      {
        source: '/:lang/lifetime-2tb',
        destination: '/:lang/lifetime',
        permanent: false,
      },
      {
        source: '/lifetime-10tb',
        destination: '/lifetime',
        permanent: false,
      },
      {
        source: '/:lang/lifetime-10tb',
        destination: '/:lang/lifetime',
        permanent: false,
      },
      {
        source: '/exclusive-lifetime',
        destination: '/lifetime',
        permanent: false,
      },
      {
        source: '/:lang/exclusive-lifetime',
        destination: '/:lang/lifetime',
        permanent: false,
      },
      {
        source: '/infinite',
        destination: '/lifetime',
        permanent: false,
      },
      {
        source: '/:lang/infinite',
        destination: '/:lang/lifetime',
        permanent: false,
      },
      {
        source: '/inxt',
        destination: '/token',
        permanent: true,
      },
      {
        source: '/:lang/inxt',
        destination: '/:lang/token',
        permanent: true,
      },
      {
        source: '/sharewareonsale',
        destination: '/pricing',
        permanent: false,
      },
      {
        source: '/:lang/sharewareonsale',
        destination: '/:lang/pricing',
        permanent: false,
      },
      {
        source: '/special-offer',
        destination: '/pricing',
        permanent: false,
      },
      {
        source: '/:lang/special-offer',
        destination: '/:lang/pricing',
        permanent: false,
      },
      {
        source: '/default.htm',
        destination: '/',
        permanent: false,
      },
      {
        source: '/:lang/default.htm',
        destination: '/:lang/',
        permanent: false,
      },
      {
        source: '/default.html',
        destination: '/',
        permanent: false,
      },
      {
        source: '/:lang/default.html',
        destination: '/:lang/',
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
  future: {
    webpack5: true
  }
};
