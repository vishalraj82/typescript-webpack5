import * as path from 'path';
import * as Webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const config: Webpack.Configuration = {
    mode: 'development',
    entry: {
        'static/main': path.join(__dirname, 'src', 'index.tsx'),
        'static/clock': path.join(__dirname, 'src', 'examples', 'clock.tsx'),
    },
    output: {
        path: path.join(__dirname, '..', 'dist'),
        filename: '[name].js'
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: 'static/vendor'
        }
    },
    resolve: {
        extensions: ['.tsx', '.ts']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
            {
                test: /\.s[ac]ss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new HtmlWebpackPlugin({
            inject: 'body',
            template: path.join(__dirname, 'index.html'),
            chunks: ['static/vendor', 'static/main']
        }),
        new HtmlWebpackPlugin({
            inject: 'body',
            template: path.join(__dirname, 'index.html'),
            filename: 'clock.html',
            chunks: ['static/vendor', 'static/clock']
        }),
    ]
};

export default config;
