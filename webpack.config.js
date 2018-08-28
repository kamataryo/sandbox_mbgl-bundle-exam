module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: __dirname + 'docs/',
    filename: 'webpack.bundle.js'
  }
}
