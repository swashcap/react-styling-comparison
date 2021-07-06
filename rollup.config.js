import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import csso from "postcss-csso";
import incstr from "incstr";
import path from "path";
import postcss from "rollup-plugin-postcss";
import replace from "@rollup/plugin-replace";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

const generateId = incstr.idGenerator({
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
});

/**
 * > they cannot start with a digit, two hyphens, or a hyphen followed by a digit
 * @see {@link https://www.w3.org/TR/CSS21/syndata.html#characters}
 */
const nextId = () => {
  let id;

  do {
    id = generateId();
  } while (/^\d/.test(id) || /^-/.test(id) || /^-\d/.test(id));

  return id;
};

const idCache = {};

const defaultExternal = ["react", /react\/jsx.*/, /@babel\/runtime.*/];

const getPlugins = (input) => {
  const plugins = [
    babel({
      babelHelpers: "runtime",
      exclude: "node_modules/**",
      extensions: [".js", ".ts", ".tsx"],
    }),
    commonjs(),
    nodeResolve({
      extensions: [".js", ".ts", ".tsx"],
    }),
  ];

  if (input.includes("cssmodules")) {
    plugins.push(
      postcss({
        autoModules: false,
        extract: path.resolve("./dist/", `${path.parse(input).name}.min.css`),
        minimize: true,
        modules: {
          generateScopedName(name, filename) {
            const key = `${filename}_${name}`;

            return idCache[key] || (idCache[key] = nextId());
          },
        },
        plugins: [csso],
      })
    );
  }

  if (!input.includes("cjs")) {
    plugins.push(
      replace({
        "process.env.NODE_ENV": JSON.stringify("production"),
      }),
      terser()
    );
  }

  return plugins;
};

export default [
  // Components
  ...[
    "./src/components/Button/Button.cssmodules.tsx",
    "./src/components/Button/Button.inline.tsx",
    "./src/components/Button/Button.styletron.tsx",
    "./src/components/Button/Button.tachyons.tsx",
    "./src/components/Page/Page.cssmodules.tsx",
    "./src/components/Page/Page.inline.tsx",
    "./src/components/Page/Page.styletron.tsx",
    "./src/components/Page/Page.tachyons.tsx",
    "./src/components/Sidebar/Sidebar.inline.tsx",
    "./src/components/Sidebar/Sidebar.cssmodules.tsx",
    "./src/components/Sidebar/Sidebar.styletron.tsx",
    "./src/components/Sidebar/Sidebar.tachyons.tsx",
  ].map((input) => ({
    external: defaultExternal,
    input,
    output: {
      file: path.join("dist", `${path.parse(input).name}.js`),
    },
    plugins: getPlugins(input),
  })),

  // CommonJS
  ...[
    "./src/components/Page/Page.cssmodules.tsx",
    "./src/components/Page/Page.inline.tsx",
    "./src/index.styletron.tsx",
    "./src/components/Page/Page.tachyons.tsx",
  ].map((input) => ({
    external: defaultExternal,
    input,
    output: {
      file: path.join("dist", `${path.parse(input).name}.cjs.js`),
      format: "cjs",
    },
    plugins: getPlugins(input),
  })),

  // App
  ...[
    "src/app.cssmodules.tsx",
    "src/app.inline.tsx",
    "src/app.styletron.tsx",
    "src/app.tachyons.tsx",
  ].map((input) => ({
    input,
    output: {
      file: path.join("dist", `${path.parse(input).name}.js`),
    },
    plugins: getPlugins(input),
  })),
];
