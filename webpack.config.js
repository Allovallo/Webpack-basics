const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'build'),
  },

  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' },
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

