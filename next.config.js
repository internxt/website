module.exports = {
  basePath: '',
  async redirects() {
    return [
      {
        source: '/en/team',
        destination: '/en/about',
        permanent: true,
      },
      {
        source: '/es/team',
        destination: '/es/about',
        permanent: true,
      },
      {
        source: '/team',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/ivacy',
        destination: '/',
        permanent: true,
      },
      {
        source: '/login',
        destination: 'https://drive.internxt.com/login',
        permanent: false,
      },
      {
        source: '/products',
        destination: '/drive',
        permanent: false,
      },
      {
        source: '/en/products',
        destination: '/drive',
        permanent: false,
      },
      {
        source: '/es/products',
        destination: '/drive',
        permanent: false,
      },
      {
        source: '/exclusive-lifetime',
        destination: '/lifetime',
        permanent: false,
      },
      {
        source: '/lifetime-2tb',
        destination: '/lifetime',
        permanent: false,
      },
      {
        source: '/lifetime-10tb',
        destination: '/lifetime',
        permanent: false,
      },
      {
        source: '/es/exclusive-lifetime',
        destination: '/es/lifetime',
        permanent: false,
      },
      {
        source: '/en/exclusive-lifetime',
        destination: '/en/lifetime',
        permanent: false,
      },
      {
        source: '/es/infinite',
        destination: '/es/lifetime',
        permanent: false,
      },
      {
        source: '/en/infinite',
        destination: '/en/lifetime',
        permanent: false,
      },
      {
        source: '/infinite',
        destination: '/lifetime',
        permanent: false,
      },
      {
        source: '/inxt',
        destination: '/token',
        permanent: true,
      },
      {
        source: '/sharewareonsale',
        destination: '/pricing',
        permanent: false,
      },
      {
        source: '/special-offer',
        destination: '/pricing',
        permanent: false,
      },
      {
        source: '/default.htm',
        destination: '/',
        permanent: false,
      },
      {
        source: '/default.html',
        destination: '/',
        permanent: false,
      },
    ];
  },
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
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
