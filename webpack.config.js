const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  devtool: "source-map",
  plugins: [new CleanWebpackPlugin()],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "react-daisyui.js",
    library: {
      name: "react-daisyui",
      type: "esm",
    },
  },
  externals: {
    // avoid bundling externals into the same file
    react: "react",
    "react-dom": "react-dom",
    daisyui: "daisyui",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [/(node_modules|\.webpack)/, /\.stories\.tsx$/],
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "postcss-loader" },
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader", // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css"],
  },
};
