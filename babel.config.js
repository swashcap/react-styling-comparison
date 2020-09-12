module.exports = {
  presets: [
    "@babel/preset-react",
    [
      "@babel/preset-typescript",
      {
        allExtensions: true,
        isTSX: true,
      },
    ],
  ],
  plugins: ["@babel/plugin-transform-runtime"],
};
