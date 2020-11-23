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
    images: {
        domains: ["cdn-images-1.medium.com"]
    }
}