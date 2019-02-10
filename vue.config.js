module.exports = {
    assetsDir: 'static',
    css: {
        sourceMap: true,
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://test.swisstech.io',
                changeOrigin: true,
            },
        },
        port: 8080,
    },

};