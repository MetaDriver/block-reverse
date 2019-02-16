module.exports = {
    assetsDir: 'static',
    css: {
        sourceMap: true,
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'https://velas.website',
                changeOrigin: true,
            },
        },
        port: 8080,
    },

};