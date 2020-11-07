const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TailwindCSS = require('tailwindcss');

const loaders = {
  babel: {
    loader: 'babel-loader',
    options: {
      plugins: ['react-refresh/babel'],
    },
  },
  css:{
    loader: 'css-loader',
  },
  postcss: {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        ident: 'postcss',
        plugins: [
          new TailwindCSS(),
        ],
      },
    },
  },
  style:{
    loader: 'style-loader',
  },
  typescript: {
    loader: 'ts-loader',
    options: {
      transpileOnly: true,
    },
  },
};

module.exports = (_, argv) => {
  const isDevelopment = argv.mode === 'development';

  return {
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /.tsx?$/,
          exclude: /node_modules/,
          use: [
            isDevelopment && loaders.babel,
            loaders.typescript,
          ].filter(Boolean),
        },
        {
          test: /\.css$/,
          use: [loaders.style, loaders.css, loaders.postcss],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
      plugins: [
        new TsconfigPathsPlugin(),
      ],
    },
    plugins: [
      isDevelopment && new ReactRefreshWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
      }),
      new ForkTsCheckerWebpackPlugin({
        async: isDevelopment,
        typescript: {
          configOverwrite: {
            compilerOptions: {
              noUnusedLocals: false,
              sourceMap: false,
            },
          },
        },
      }),
    ].filter(Boolean),
    devtool: isDevelopment ? 'source-map' : false,
    devServer: {
      hot: true,
      stats: {
        children: false,
        modules: false,
        colors: true,
      },
    },
  };
};
