const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        chunkFilename: '[id].js',
        publicPath: '',
        assetModuleFilename: 'asset/[name][ext][query]'
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
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: function () {
                                    return [
                                    require('autoprefixer')
                                    ];
                                }
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
        })
    ]
};
