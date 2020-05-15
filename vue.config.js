const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, 'dist'),
  publicPath: '/',
  css: {
    extract: false,
  },
  filenameHashing: false,

  chainWebpack: config => {
    config.output.filename(`js/[name].js`);
    config.optimization.splitChunks(false);
  },
  devServer: {
    host: 'localhost',
    port: 9000,
  },
  transpileDependencies: ['vuetify'],
};
