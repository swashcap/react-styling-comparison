module.exports = {
  overrides: [
    {
      plugins: ["@emotion", "@babel/plugin-transform-runtime"],
      presets: [
        [
          "@babel/preset-react",
          {
            importSource: "@emotion/react",
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
      test: [/\.emotion\.tsx$/],
    },
  ],
  plugins: ["@babel/plugin-transform-runtime"],
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
};
