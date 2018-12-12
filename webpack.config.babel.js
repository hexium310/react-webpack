import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const loaders = {
  babel: {
    loader: 'babel-loader',
  },
}

export default {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: loaders.babel,
      }
    ]
  },
  resolve: {
    extensions: ['.js', 'jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
}
