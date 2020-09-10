module.exports = {
    devServer: {
        proxy: {
            '^/api/': {
                target: 'http://localhost:8000/schedule/',
            }
        }
    },
    // outputDir must be added to Django's TEMPLATE_DIRS
    outputDir: './dist/',
    // assetsDir must match Django's STATIC_URL
    assetsDir: 'static',
}