import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import csso from "postcss-csso";
import incstr from "incstr";
import path from "path";
import postcss from "rollup-plugin-postcss";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

const nextId = incstr.idGenerator({
  prefix: "a_",
});
const idCache = {};

const makeConfig = (input) => {
  const { name } = path.parse(input);

  const config = {
    external: ["react", "classNames", /@babel\/runtime.*/],
    input,
    output: {
      file: path.join("dist", `${name}.js`),
    },
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
  makeConfig("./src/index.cssmodules.ts"),
  makeConfig("./src/index.tachyons.ts"),
  makeConfig("./src/Button/Button.cssmodules.tsx"),
  makeConfig("./src/Button/Button.tachyons.tsx"),
  makeConfig("./src/Sidebar/Sidebar.cssmodules.tsx"),
  makeConfig("./src/Sidebar/Sidebar.tachyons.tsx"),
];
