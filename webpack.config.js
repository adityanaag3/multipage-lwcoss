const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        about: './src/about.js'
    },
    output: {
        filename: '[name].bundle.[contenthash].js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/about.html',
            filename: 'about/index.html',
            chunks: ['about']
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index-new.html',
            chunks: ['index']
        })
    ]
};
