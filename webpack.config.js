const path = require('path');

module.exports = {
  entry: '/src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.tsx?/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx','.js', '.jsx']
  },
  devServer: {
    publicPath: '/dist',
    contentBase: path.join(__dirname, 'src'),
    hot: true,
  }
};