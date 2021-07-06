const cp = require("child_process");
const path = require("path");
const util = require("util");

const getFileSize = async (filename) => {
  const { stdout, stderr } = await util.promisify(cp.exec)(
    `gzip < ${path.resolve(filename)} | wc -c`
  );

  if (stderr) {
    throw new Error(stderr);
  }

  return parseInt(stdout.trim(), 10);
};

const files = new Map([
  ["button:js", "./dist/Button.cssmodules.js"],
  ["button:css", "./dist/Button.cssmodules.min.css"],
  ["button:inline", "./dist/Button.inline.js"],
  ["button:styletron", "./dist/Button.styletron.js"],
  ["button:tachyons", "./dist/Button.tachyons.js"],
  ["page:js", "./dist/Page.cssmodules.js"],
  ["page:css", "./dist/Page.cssmodules.min.css"],
  ["page:inline", "./dist/Page.inline.js"],
  ["page:styletron", "./dist/Page.styletron.js"],
  ["page:tachyons", "./dist/Page.tachyons.js"],
  ["sidebar:js", "./dist/Sidebar.cssmodules.js"],
  ["sidebar:css", "./dist/Sidebar.cssmodules.min.css"],
  ["sidebar:inline", "./dist/Sidebar.inline.js"],
  ["sidebar:styletron", "./dist/Sidebar.styletron.js"],
  ["sidebar:tachyons", "./dist/Sidebar.tachyons.js"],
  ["app:css", "./dist/app.cssmodules.min.css"],
  ["app:inline", "./dist/app.inline.js"],
  ["app:js", "./dist/app.cssmodules.js"],
  ["app:styletron", "./dist/app.styletron.js"],
  ["app:tachyons", "./dist/app.tachyons.js"],
  ["tachyons", "./dist/tachyons.min.css"],
]);

Promise.all(Array.from(files.values()).map(getFileSize))
  .then((fileSizes) => {
    const keys = Array.from(files.keys());
    const sizes = new Map(fileSizes.map((size, index) => [keys[index], size]));

    console.table({
      Button: {
        "CSS Modules": {
          JS: sizes.get("button:js"),
          CSS: sizes.get("button:css"),
        },
        "Inline Styles": {
          JS: sizes.get("button:inline"),
          CSS: 0,
        },
        Styletron: {
          JS: sizes.get("button:styletron"),
          CSS: 0,
        },
        Tachyons: {
          JS: sizes.get("button:tachyons"),
          CSS: sizes.get("tachyons"),
        },
      },
      Page: {
        "CSS Modules": {
          JS: sizes.get("page:js"),
          CSS: sizes.get("page:css"),
        },
        "Inline Styles": {
          JS: sizes.get("page:inline"),
          CSS: 0,
        },
        Styletron: {
          JS: sizes.get("page:styletron"),
          CSS: 0,
        },
        Tachyons: {
          JS: sizes.get("page:tachyons"),
          CSS: sizes.get("tachyons"),
        },
      },
      Sidebar: {
        "CSS Modules": {
          JS: sizes.get("sidebar:js"),
          CSS: sizes.get("sidebar:css"),
        },
        "Inline Styles": {
          JS: sizes.get("sidebar:inline"),
          CSS: 0,
        },
        Styletron: {
          JS: sizes.get("sidebar:styletron"),
          CSS: 0,
        },
        Tachyons: {
          JS: sizes.get("sidebar:tachyons"),
          CSS: sizes.get("tachyons"),
        },
      },
      "App (Page + React)": {
        "CSS Modules": {
          JS: sizes.get("app:js"),
          CSS: sizes.get("app:css"),
        },
        "Inline Styles": {
          JS: sizes.get("app:inline"),
          CSS: 0,
        },
        Styletron: {
          JS: sizes.get("app:styletron"),
          CSS: 0,
        },
        Tachyons: {
          JS: sizes.get("app:tachyons"),
          CSS: sizes.get("tachyons"),
        },
      },
    });
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
