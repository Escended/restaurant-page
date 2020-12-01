const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|gif|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              // name (file) {
              //   return '[name]_[hash].[ext]'
              // },
              // publicPath: (url) => {
              //   return url.replace(/./, 'dist/assets/')
              // },
              name: '[path][name].[ext]',
              outputPath: (file) => {
                let path = file.split("src/")[1]; //this will yield assets/img/img1.png     
                return path;
              },
            },
          },
        ]
      },
    ],
  },
};