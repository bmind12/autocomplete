import path from 'path'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'

export default {
    entry: './src/index.tsx',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|ts|tsx)$/,
                exclude: /(node_modules)/,
                use: 'babel-loader',
            },
        ],
    },
    resolve: {extensions: ['.js', '.ts', '.tsx']},
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: path.join(__dirname, 'public/'),
        port: 8080,
        publicPath: 'http://localhost:8080/dist/',
    },
    plugins: [new ForkTsCheckerWebpackPlugin()],
}
