const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devServer: {
    port: 3000,
  },
  output: {
    publicPath: "http://localhost:3000/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        shipments: "shipments@http://localhost:3001/remoteEntry.js",
        tracker: "tracker@http://localhost:3002/remoteEntry.js",
      },
    }),
  ],
};
