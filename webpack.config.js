module.exports = {
    // other configurations...
    module: {
      rules: [
        {
          test: /\.js$/,
          enforce: 'pre',
          loader: 'source-map-loader',
          exclude: [
            /node_modules\/@mediapipe\/tasks-vision/, // Exclude @mediapipe tasks-vision package
          ],
        },
      ],
    },
  };
  