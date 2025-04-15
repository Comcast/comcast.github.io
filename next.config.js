const webpack = require('webpack');
// const path = require('path');
const isProd = (process.env.NODE_ENV || 'production') === 'production';
const assetPrefix = isProd ? '' : '';

module.exports = {
  // future: {
  //   webpack5: true,
  // },
  // node: {
  //   __dirname: true,
  //   __filename: true,
  // },
  // resolve: {
  //   alias: {
  //     src: path.resolve(__dirname, 'src'),
  //     test: path.resolve(__dirname, 'test'),
  //   },
  // },
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
    url: false,
  },
  // exportPathMap() {
  //   return {
  //     '/src/pages/': { page: '/' },
  //     '/src/pages/blog': { page: '/blog' },
  //     '/src/pages/community': { page: '/community' },
  //     '/src/pages/events': { page: '/events' },
  //     '/src/pages/people': { page: '/people' },
  //     '/src/pages/projects': { page: '/projects' },
  //   };
  // },
  assetPrefix,
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
        {
          loader: 'babel-loader',
        },
        {
          loader: 'react-svg-loader',
          options: {
            jsx: true, // true outputs JSX tags
          },
        },
      ],
    });

    return config;
  },
  devIndicators: {
    autoPrerender: false,
  },
};
