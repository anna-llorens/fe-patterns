const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devServer: {
    port: 3001,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Cross-Origin-Resource-Policy": "cross-origin",
    },
  },
  output: {
    publicPath: "http://localhost:3001/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "shipments",
      filename: "remoteEntry.js",
      exposes: {
        "./ShipmentsIndex": "./src/shipments.js",
      },
    }),
  ],
};
