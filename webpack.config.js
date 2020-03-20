const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development'


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'seer_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images',
                    },
                }],

            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                title: "SeeR React App",
                template: './public/index.html',
                filename: './index.html',
                favicon: './public/favicon.ico'
            }
        )
    ],
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        port: 3000
    },
    mode: isDevelopment ? 'development' : 'production'
}