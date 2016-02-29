module.exports = {
  entry: ["./utils.js", "./app.js"],
  output: {
    filename: "bundle.js"
  },
  watch: true,
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
