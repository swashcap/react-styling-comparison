import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import csso from "postcss-csso";
import incstr from "incstr";
import path from "path";
import postcss from "rollup-plugin-postcss";
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

const makeConfig = (input, isCJS) => {
  const { name } = path.parse(input);

  const config = {
    external: ["react", /react\/jsx.*/, /@babel\/runtime.*/],
    input,
    plugins: [
      babel({
        babelHelpers: "runtime",
        exclude: "node_modules/**",
        extensions: [".js", ".ts", ".tsx"],
      }),
      commonjs(),
      nodeResolve({
        extensions: [".js", ".ts", ".tsx"],
      }),
      terser(),
    ],
  };

  if (isCJS) {
    config.output = {
      file: path.join("dist", `${name}.cjs.js`),
      format: "cjs",
    };
  } else {
    config.output = {
      file: path.join("dist", `${name}.js`),
    };
  }

  if (name.includes("cssmodules")) {
    config.plugins.push(
      postcss({
        autoModules: false,
        extract: path.resolve("./dist/", `${name}.min.css`),
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

  return config;
};

export default [
  makeConfig("./src/Button/Button.cssmodules.tsx"),
  makeConfig("./src/Button/Button.inline.tsx"),
  makeConfig("./src/Button/Button.styletron.tsx"),
  makeConfig("./src/Button/Button.tachyons.tsx"),
  makeConfig("./src/Page/Page.cssmodules.tsx"),
  makeConfig("./src/Page/Page.inline.tsx"),
  makeConfig("./src/Page/Page.tachyons.tsx"),
  makeConfig("./src/Sidebar/Sidebar.inline.tsx"),
  makeConfig("./src/Sidebar/Sidebar.cssmodules.tsx"),
  makeConfig("./src/Sidebar/Sidebar.styletron.tsx"),
  makeConfig("./src/Sidebar/Sidebar.tachyons.tsx"),
  makeConfig("./src/index.cssmodules.ts"),
  makeConfig("./src/index.cssmodules.ts", "cjs"),
  makeConfig("./src/index.inline.ts"),
  makeConfig("./src/index.inline.ts", "cjs"),
  makeConfig("./src/index.styletron.ts"),
  makeConfig("./src/index.styletron.ts", "cjs"),
  makeConfig("./src/index.tachyons.ts"),
  makeConfig("./src/index.tachyons.ts", "cjs"),
];
