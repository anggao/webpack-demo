var path = require('path');


module.exports = {
  context: path.resolve('js'),
  entry: ["./utils.js", "./app"],
  output: {
    path: path.resolve('build/js/'),
    publicPath: '/public/assets/js/',
    filename: "bundle.js"
  },
  watch: true,
  devServer: {
    contentBase: 'public'
  },
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
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.es6']
  }
};
