const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new WebpackPwaManifest({
        name: 'J.A.T.E',
        short_name: 'JATE',
        description: 'Just Another Text Editor',
        background_color: '#1a1a1a',
        theme_color: '#1a1a1a',
        icons: [
          {
            src: path.resolve('./src/assets/icons/icon_512x512.png'),
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

