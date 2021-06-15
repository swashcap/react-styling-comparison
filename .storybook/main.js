const path = require("path");

module.exports = {
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  /**
   * Disable react-docgen until this is fixed:
   * {@link https://github.com/styleguidist/react-docgen-typescript/issues/366}
   * Related: {@link https://github.com/storybookjs/storybook/issues/15067}
   */
  typescript: {
    reactDocgen: false,
  },
  /**
   * Customize Webpack config.
   * {@link https://storybook.js.org/docs/configurations/custom-webpack-config/}
   */
  webpackFinal(config) {
    config.module.rules.push(
      {
        exclude: [/node_modules/, /\.module\.scss$/],
        include: path.resolve(__dirname, "../src"),
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          "sass-loader",
        ],
      },
      {
        include: path.resolve(__dirname, "../src"),
        test: /\.module\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
          "sass-loader",
        ],
      }
    );

    return config;
  },
};
