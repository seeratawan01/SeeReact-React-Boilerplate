const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevelopment = process.env.NODE_ENV === 'development'


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'seereact_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images/',
                    },
                }],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                title: "SeeReact React App",
                template: 'public/index.html',
                filename: './index.html',
                favicon: './public/favicon.ico'
            }
        ),
        new MiniCssExtractPlugin({
            filename: './style.css',
        })
    ],
    stats: {
        children: false,
    },
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        port: 3000
    },
    mode: isDevelopment ? 'development' : 'production'
}