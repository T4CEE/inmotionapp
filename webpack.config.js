const path = require("path");

module.exports = {
  entry: {
    wanaCourt: "./public/WanaCourtBrochure.pdf",
    urbanMark: "./public/URBANMARKBROCHURE.pdf",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js", // `[name]` uses keys from entry points to generate unique filenames
  },
  module: {
    rules: [
      {
        test: /\.pdf$/,
        use: "raw-loader",
      },
    ],
  },
};
