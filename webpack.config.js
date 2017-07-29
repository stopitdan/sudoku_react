var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.(js?x)?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css"]
  }
};

module.exports = config;
