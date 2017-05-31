var path = require("path");

module.exports = {
  entry: [
    './app/app.js'
  ],
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './public',
    port: 8100
  },
  watch: true,
  module: {
    // preLoaders: [
    //   {
    //     test: /\.js$/,
    //     exclude: /node_modules/,
    //     loader: 'jshint-loader'
    //   }
    // ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: [/\.js$/, /\.es6$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, "./node_modules/bourbon"),
      path.resolve(__dirname, "./node_modules/bourbon-neat")
    ]
  },
  resolve: {
    extensions: ['', '.js', '.es6']
  }
}
