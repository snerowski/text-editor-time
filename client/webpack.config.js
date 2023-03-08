const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './client/src/js/index.js',
      install: './client/src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'client/dist'),
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './client/dist/index.html',
        filename: 'index.html'
      }),
      new WebpackPwaManifest({
        name: 'J.A.T.E',
        short_name: 'JATE',
        description: 'Just Another Text Editor',
        background_color: '#1a1a1a',
        theme_color: '#1a1a1a',
        images: [
          {
            dist: path.resolve('./dist/images'),
            sizes: [72, 96, 128, 144, 192, 384, 512],
          },
        ],
      }),
    ],
    module: {
      rules: [
        
      ],
    },
  };
};






