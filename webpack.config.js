var path = require('path');
var TerserPlugin=require("terser-webpack-plugin")

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: {
        "app": "./lib/index.js"
    },
    plugins: [
        new TerserPlugin()
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'kkiapay.bundle.js',
        library: 'kkiapay'
    }
}
