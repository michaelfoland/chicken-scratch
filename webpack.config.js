var path = require('path');

module.exports = {
  entry: './src/chicken-scratch.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'chicken-scratch.js',
    library: 'chickenScratch',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname,'src')
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        }
      }
    ]  
  },
  optimization: {
    concatenateModules: true
  }
};