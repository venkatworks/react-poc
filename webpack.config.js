const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html"
});

const paths = {
    DIST: path.resolve(__dirname, 'dist'),
    SRC: path.resolve(__dirname, './src')
};

module.exports = {
    entry: {
        app: ['babel-polyfill', path.join(paths.SRC, 'index.js')]
    
    },
    module: {
      rules: [
        {
            test: /\.jsx?$/,
            loader: 'babel-loader?cacheDirectory',
            exclude: /node_modules/
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
            test: /\.css$/,
            use: [
              {
                loader: "style-loader"
              },
              {
                loader: "css-loader"
              },
            ]
        },
        {
          test: /\.(png|jpg|gif|otf|svg)$/,
          use: [{
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }
          }]
        }
      ]
    },
    plugins: [htmlPlugin]
  };