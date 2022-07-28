
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader","css-loader"]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              // Prefer `dart-sass`
              implementation: require("dart-sass"),
            },
        }
        
    ]
}
]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: '/dist',
    filename: "bundle.js"
  },
  devServer: {
    static: path.join(__dirname, "public/"),
    port: 3000,
    historyApiFallback: true,

  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};