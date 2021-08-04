/* eslint no-undef: 0 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: ['./src/index.js'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    port: 4000,
    watchContentBase: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
};
