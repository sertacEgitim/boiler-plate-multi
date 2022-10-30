const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",

  mode: "development",

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },

  optimization: {
    minimize: false,
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),

    new HtmlWebpackPlugin({
      inject: "body",
      title: "Home Page",
      filename: "index.html", //output file
      template: "./src/views/home.html",  //input file
    }),

    new HtmlWebpackPlugin({
      inject: "body",
      title: "About Page",
      filename: "index.html", //output file
      template: "./src/views/home.html",  //input file
    }),



    // [].concat(
    //   pages.map(
    //     (page) =>
    //       new HtmlWebpackPlugin({
    //         inject: "body",
    //         title: `${page} Page || Kara Keçi`,
    //         template: `./src/${page}.html`,
    //       })
    //   )
    // ),
  ],

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "/",
            },
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.html$/,
        loader: "underscore-template-loader",
      },
      // Images loader
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: "asset/resource",
      },
    ],
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "./dist"),
    },
    devMiddleware: {
      writeToDisk: true,
    },
    open: true,
    compress: true,
    liveReload: true,
    hot: true,
    port: 9000,
  },
};
