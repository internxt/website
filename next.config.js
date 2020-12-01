module.exports = {
    async redirects() {
        return [
            {
                source: '/drive',
                destination: '/',
                permanent: true,
            },
        ]
    },
    /* i18n: {
        locales: ['en', 'es'],
        defaultLocale: 'en'
    }, */
    images: {
        domains: ["cdn-images-1.medium.com"]
    }
}