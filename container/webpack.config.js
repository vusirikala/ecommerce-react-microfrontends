const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
    mode: 'development',
    devServer: {
        port: 8080
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                productsApp: 'products@http://localhost:8081/remoteEntry.js'    //The remote webpack.config.js file should contain a Module Federation with name set to "products"
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}