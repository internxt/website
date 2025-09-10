module.exports = {
  i18n: {
    locales: ['en', 'es', 'fr', 'it', 'zh', 'ru', 'de', 'zh-tw'],
    defaultLocale: 'en',
  },
  experimental: {
    swcPlugins: [['swc-plugin-coverage-instrument', { coverage: true }]],
    scrollRestoration: true,
  },
  webpack(config) {
    config.module.rules.push({
      loader: '@svgr/webpack',
      options: {
        prettier: false,
        svgo: true,
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: { removeViewBox: false },
              },
            },
          ],
        },
        titleProp: true,
      },
      test: /\.svg$/,
    });

    return config;
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Vary', value: 'Origin' },
          //! DO NOT TOUCH
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,DELETE,PATCH,POST,PUT' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // REDIRECTS TO HOME
      ...[
        '/cloud',
        '/roadmap',
        '/home',
        '/core',
        '/default.html',
        '/default.htm',
        '/merch',
        '/giveawayoftheday',
        '/child-safety-ebook',
        '/use-cases',
        '/internxt-library',
        '/online-privacy-ebook',
        '/token',
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
        '/default.html',
        '/default.htm',
        '/merch',
        '/giveawayoftheday',
        '/child-safety-ebook',
        '/use-cases',
        '/internxt-library',
        '/online-privacy-ebook',
        '/token',
      ].map((src) => ({
        source: `/:lang${src}`,
        destination: '/:lang',
        permanent: false,
      })),
      // =======================================================
      // REDIRECTS TO PRICING
      ...['/sharewareonsale', '/special-offer', '/pricing-individuals-annually'].map((src) => ({
        source: src,
        destination: '/pricing',
        permanent: false,
      })),
      // REDIRECTS TO PRICING (WITH LANG)
      ...['/sharewareonsale', '/special-offer', '/pricing-individuals-annually'].map((src) => ({
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
        source: '/:lang/lifetime',
        destination: '/lifetime',
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
        source: '/:lang/ivacy',
        destination: '/ivacy',
        permanent: false,
      },
      {
        source: '/:lang/partner-discount',
        destination: '/partner-discount',
        permanent: false,
      },
      {
        source: '/:lang/techradar-discount',
        destination: '/techradar-discount',
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
        source: '/comparison',
        destination: '/cloud-storage-comparison',
        permanent: false,
      },
      {
        source: '/:lang/comparison',
        destination: '/:lang/cloud-storage-comparison',
        permanent: false,
      },
      {
        source: '/:lang/virus-scanner',
        destination: '/virus-scanner',
        permanent: false,
      },
      {
        source: '/:lang/byte-converter',
        destination: '/byte-converter',
        permanent: false,
      },
      {
        source: '/:lang/converter-tool',
        destination: '/byte-converter',
        permanent: false,
      },
      {
        source: '/converter-tool',
        destination: '/byte-converter',
        permanent: false,
      },
      {
        source: '/photos',
        destination: '/drive',
        permanent: false,
      },
      {
        source: '/:lang/photos',
        destination: '/:lang/drive',
        permanent: false,
      },
      {
        source: '/coingate',
        destination: '/redeem/coingate',
        permanent: false,
      },
      {
        source: '/stackcommerce',
        destination: '/redeem/stackcommerce',
        permanent: false,
      },
      {
        source: '/pcloud-alternative',
        destination: '/comparison/pcloud-alternative',
        permanent: false,
      },
      {
        source: '/dropbox-alternative',
        destination: '/comparison/dropbox-alternative',
        permanent: false,
      },
      {
        source: '/mega-alternative',
        destination: '/comparison/mega-alternative',
        permanent: false,
      },
      {
        source: '/pcloud-alternative',
        destination: '/comparison/pcloud-alternative',
        permanent: false,
      },
      {
        source: '/dropbox-alternative',
        destination: '/comparison/dropbox-alternative',
        permanent: false,
      },
      {
        source: '/mega-alternative',
        destination: '/comparison/mega-alternative',
        permanent: false,
      },
    ];
  },
  images: {
    domains: ['cdn-images-1.medium.com', process.env.CLOUDFLARE_STATIC_ASSETS_HOST, 'haveibeenpwned.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.CLOUDFLARE_STATIC_ASSETS_HOST,
        port: '',
        pathname: '/website/**',
      },
    ],
  },
  env: {
    SEGMENT_API_KEY_PROD: process.env.SEGMENT_API_KEY_PROD,
  },
};
