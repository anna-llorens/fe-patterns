const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devServer: {
    port: 3002,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Cross-Origin-Resource-Policy": "cross-origin",
    },
  },
  output: {
    publicPath: "http://localhost:3002/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "tracker",
      filename: "remoteEntry.js",
      exposes: {
        "./TrackerIndex": "./src/tracker.js",
      },
    }),
  ],
};
