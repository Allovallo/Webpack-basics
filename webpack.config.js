const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'build'),
  },

  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "styles.css",
      // chunkFilename: "[id].css",
    }),],

  module: {
    rules: [
      { test: /\.s[ac]ss$/i,
        use: [
          // "style-loader",
          // Translates CSS into CommonJS
          MiniCssExtractPlugin.loader,
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",] },
      { test: /\.ts$/, use: 'ts-loader' },

      { test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ],
  },

  devServer: {
    port: 4444,
    open: true,
  },
};

