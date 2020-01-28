const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: './index.js'
  },
  module: {
    rules: [{
        test: /\.pug$/,
        use: ['pug-loader']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [{
          loader: 'file-loader?name=/fonts/fonts.scss'
        }]
      },
      {
        test: /\.(s(a|c)|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: 'file-loader?name=/images/[name].[ext]'
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.pug',
    }),
    new MiniCssExtractPlugin({
      filename: "index.css"
    })
  ]
}