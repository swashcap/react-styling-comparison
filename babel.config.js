module.exports = {
  presets: [
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
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
