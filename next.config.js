const webpack = require('webpack');

const isProd = process.env.NODE_ENV === 'production';
const assetPrefix = isProd ? '/ospo1' : ''; // Ensure assets load from correct path

module.exports = {
  output: 'export',
  assetPrefix,
  trailingSlash: true, // Ensures all static routes end with a `/`
  images: {
    unoptimized: true, // Fixes `next/image` for static exports
  },
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
    url: false,
  },
  webpack: (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
      }),
    );

    config.resolve.modules.push(__dirname);

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        { loader: 'babel-loader' },
        { loader: 'react-svg-loader', options: { jsx: true } },
      ],
    });

    return config;
  },
  devIndicators: {
    autoPrerender: false,
  },
};
