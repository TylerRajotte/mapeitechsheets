const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const WebpackFavicons = require('webpack-favicons');

module.exports = {
    entry: [
        "core-js/modules/es.promise",
        "core-js/modules/es.array.iterator",
        path.resolve(__dirname, 'src/index.js')
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        chunkFilename: '[id].js',
        publicPath: '',
        assetModuleFilename: 'assets/[name][ext][query]'
    },
    devServer: {
        writeToDisk: true,
        inline: false
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(scss)$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader'}, 
                    { loader: 'css-loader' }, 
                    { loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env", {
                                            //Options
                                        }
                                    ]
                                ]
                            }
                        }
                    }, 
                    { loader: 'sass-loader' }]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2)$/,
                type: 'asset/resource'
            },
            {
                test:/\.(svg)$/,
                type: 'asset/resource'
            },
            {
                test:/\.(pdf)$/,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new BundleAnalyzerPlugin({
            openAnalyzer: false
        }),
        new WebpackFavicons({
            src: './src/assets/favicon.svg'
        })
    ]
};
