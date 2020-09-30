const path = require('path');
const withImages = require('next-images');

module.exports = withImages({
  webpack: (config, { dev }) => {
    if (dev) {
      config.module.rules.push({
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          // eslint options (if necessary)
          // emitError: true,
          emitWarning: true,
          configFile: path.join(__dirname, './.eslintrc.js'),
        },
      });
    }
    return config;
  },
});
