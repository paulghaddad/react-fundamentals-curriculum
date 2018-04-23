const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: './app/index.js',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: { loader: "babel-loader" }},
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'app/index.html'
    })
  ],
  mode: 'development'
};

module.exports = config;
