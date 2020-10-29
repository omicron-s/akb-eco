const path = require('path');
const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      jquery: 'jquery',
      'window.jquery': 'jquery',
      $: 'jquery',
      'window.$': 'jquery',
    }),
  ],

  entry: {
    main: './src/js/main.js',
    home: './src/js/pages/home.js',
    product: './src/js/pages/product.js',
    compare: './src/js/pages/compare.js',
    catalog: './src/js/pages/catalog.js',
  },

  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '/',
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          enforce: true,
        },
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: [['@babel/preset-env', { modules: false }]],
          },
        },
      },
    ],
  },

  resolve: {
    alias: {
      '%blocks%': path.resolve(__dirname, 'src/views/blocks'),
      '%components%': path.resolve(__dirname, 'src/views/components'),
      '%layouts%': path.resolve(__dirname, 'src/views/layouts'),
    },
  },
};
