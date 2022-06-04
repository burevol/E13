const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const MinimizeWebpackPlugin = require('css-minimizer-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const path = require('path');
const { compile } = require('pug');

module.exports = (env) => {

    let conf = {
        entry: './index.js',
        output: {
            filename: 'main.js'
        },
        mode: "development",
        devServer: {
            static: {
                directory: path.join(__dirname, 'dist'),
            },
            hot: true,
        },
        plugins: [
            new MiniCssExtractPlugin(),
            new HtmlWebpackPlugin({ title: 'Development', }),
            new TerserWebpackPlugin(),
            new MinimizeWebpackPlugin(),
            new ESLintPlugin(),
            new StylelintPlugin({ exclude: "./dist/*" }),
        ],
        optimization: {
            minimizer: [
                // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
                // `...`,
                new MinimizeWebpackPlugin(),
                new TerserWebpackPlugin(),
            ],
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                esModule: true,
                            },
                        },
                        'css-loader',
                    ],
                },
            ]
        }
    };

    if (env.production) {
        conf.mode = 'production';
        conf.devServer.hot = false;
        conf.plugins = [
            new MiniCssExtractPlugin(),
            new HtmlWebpackPlugin({ title: 'Development', }),
            new TerserWebpackPlugin(),
            new MinimizeWebpackPlugin(),
            new ESLintPlugin(),
            new StylelintPlugin({ exclude: "./dist/*" }),
        ];
    } else {
        conf.mode = 'development';
        conf.devServer.hot = true; 
        delete conf.optimization; 
        conf.plugins = [
            new MiniCssExtractPlugin(),
            new HtmlWebpackPlugin({ title: 'Development', }),
            new ESLintPlugin(),
            new StylelintPlugin({ exclude: "./dist/*" }),
        ];  
    }

    return conf;
}
