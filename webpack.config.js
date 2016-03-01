var path = require('path');
var webpack = require('webpack');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('shared.js');

module.exports = {
  context: path.resolve('js'),
  entry: {
    about: './about_page.js',
    home: './home_page.js',
    contact: './contact_page.js'
  },
  output: {
    path: path.resolve('build/js/'),
    publicPath: '/public/assets/js/',
    filename: "[name].js"
  },
  watch: true,
  devServer: {
    contentBase: 'public'
  },

  plugins: [
    commonsPlugin
  ],
  module: {
    preloaders: [
      {
        test: /\.es6$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      }
    ],
    loaders: [
      {
        test: /\.es6$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        loader: "style-loader!css-loader!less-loader"
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.es6']
  }
};
