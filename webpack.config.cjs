const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: '/src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
        test: /\.css$/i,
        use:['style-loader','css-loader'],
        },
        {
          test: /\.[jt]sx?$/,
          loader: 'esbuild-loader',
          options: {
            target: 'es2015'
          }
        },
      ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body',

        })
    ]
}