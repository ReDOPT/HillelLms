const  path = require('path')
const miniCssExtactPugin = require('mini-css-extract-plugin')
const test = require("node:test");
module.exports = {
    mode:"production",

    output: {
        path: path.resolve(__dirname,'dist'),
    },

    watch: true,
    entry: {
        main: [path.join(__dirname,'./src/index.js'),path.join(__dirname,'./src/sass/styles.scss')]
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    miniCssExtactPugin.loader,
                    "css-loader",
                    "sass-loader",
                ]
            },
        ]
    },

    plugins: [
        new miniCssExtactPugin({
            filename:"syles.css"
        })
    ]
}
