const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        app: './app/index.js'
    },
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, './public'),
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react', '@babel/preset-env']
                }
            }
        }, {
            test: /\.css$/,
            loader: ['style-loader', 'postcss-loader']
        }, {
            test: /\.(png|jpg|jpeg|gif|svg)$/,
            loader: 'file-loader?limit=8192&name=assets/[name].[ext]?[hash]'
        }]
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: './app/favicon.ico' },
                // { from: './app/assets', to: 'assets' } Enable when needed
            ]
        })
    ],
    devtool: 'eval'
};
