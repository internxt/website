module.exports = {
    apps: [{
        name: 'internxt-website',
        script: './node_modules/.bin/next start',
        env: {
            NODE_ENV: 'production'
        }
    }]
}