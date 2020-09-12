module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ["*.js", ".storybook/**/*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": 0,
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  root: true,
  rules: {
    "prettier/prettier": "error",
    "react/display-name": 0,
    "react/prop-types": 0,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};