const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require('./package.json').dependencies;

module.exports = {
  mode: 'development',
  devServer: {
    port: 3001,
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'SHELL',
      filename: 'remoteEntry.js',
      remotes: {
        APP1: 'APP1@http://localhost:3002/remoteEntry.js',
        APP2: 'APP2@http://localhost:3003/remoteEntry.js',
      },
      shared: [
        {
          ...deps,
          react: { requiredVersion: deps.react, singleton: true, eager: true },
          'react-dom': {
            requiredVersion: deps['react-dom'],
            singleton: true,
            eager: true,
          },
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};