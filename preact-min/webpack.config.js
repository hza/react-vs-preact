module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: ['./src/index'],
  output: {
    filename: 'app.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [{
        test: /\.tsx?$/,
        use: [{ loader: 'ts-loader' }]
      }
    ]
  },
  devServer: {
    compress: true,
    port: 9000,
  }
};