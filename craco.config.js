const path = require("path");
module.exports = {
  // ...
  webpack: {
    alias: {
      Components: path.resolve(__dirname, "src/components/"),
      Store: path.resolve(__dirname, "src/store"),
      Assets: path.resolve(__dirname, "src/assets/"),
    },
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 8192, // 限制图片大小为8KB
                outputPath: "assets/", // 输出目录
                name: "[name].[hash:7].[ext]", // 输出文件名
              },
            },
          ],
        },
      ],
    },
  },
};
