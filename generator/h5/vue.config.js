const webpack = require('webpack');
const pjson = require(process.cwd() + '/package.json');

module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' ? pjson.launch.publicPath : './',
  devServer: {
    proxy: {
      '/api': {
        target: 'https://openapi-test.changjinglu.net',
        pathRewrite: { '^/api': '' },
      },
    },
    port: 8080,
    disableHostCheck: true,
  },
  configureWebpack: config => {
    return {
      plugins: [
        new webpack.DefinePlugin({
          APPLICATION_VERSION: JSON.stringify(
            require('./package.json').version
          ),
        }),
      ],
    };
  },
};
