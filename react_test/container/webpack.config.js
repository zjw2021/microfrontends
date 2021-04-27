const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const path = require('path')

module.exports = {
    mode: 'development',
    devServer: {
        port: 8080
    },
    plugins: [
        new HtmlWebpackPlugin ({
            template: './public/index.html'
        }),
        new ModuleFederationPlugin ({
            name: 'container',
            
        })
    ]
}