module.exports = {
  async redirects() {
    return [
      {
        source: '/drive',
        destination: '/',
        permanent: true,
      },
      {
        source: '/core/setup-and-tips',
        destination: '/core',
        permanent: true,
      },
      {
        source: '/es/drive',
        destination: '/es',
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
};
