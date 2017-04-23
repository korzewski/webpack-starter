const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: `inline-source-map`,
  devServer: {
    contentBase: path.join(__dirname, `dist`),
    compress: true,
    port: 9000,
    // hot: true,
  },
  entry: [
    `./src/app.js`,
  ],
  output: {
    filename: `bundle.js`,
    path: path.resolve(__dirname, `dist`),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: `css-loader`,
              options: {
                sourceMap: true,
              }
            },
            {
              loader: `sass-loader`,
            },
          ]
        })
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: `babel-loader`,
          options: {
            presets: [`env`]
          }
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: `file-loader`,
          options: {
            name: `[name].[ext]`,
          }
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin(`styles.css`),
    // new webpack.HotModuleReplacementPlugin(),
  ]
}
