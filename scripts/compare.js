const cp = require("child_process");
const path = require("path");
const util = require("util");

const getFileSize = async (filename) => {
  const { stdout, stderr } = await util.promisify(cp.exec)(
    `gzip -c9 ${path.resolve(filename)} | wc -c`
  );

  if (stderr) {
    throw new Error(stderr);
  }

  return parseInt(stdout.trim(), 10);
};

Promise.all(
  [
    "./dist/Button.cssmodules.js",
    "./dist/Button.cssmodules.min.css",
    "./dist/Button.tachyons.js",
    "./dist/Sidebar.cssmodules.js",
    "./dist/Sidebar.cssmodules.min.css",
    "./dist/Sidebar.tachyons.js",
    "./dist/index.cssmodules.js",
    "./dist/index.cssmodules.min.css",
    "./dist/index.tachyons.js",
    "./dist/tachyons.min.css",
  ].map(getFileSize)
)
  .then((sizes) => {
    console.table({
      Button: {
        "CSS Modules": {
          JS: sizes[0],
          CSS: sizes[1],
        },
        Tachyons: {
          JS: sizes[2],
          CSS: sizes[9],
        },
      },
      Sidebar: {
        "CSS Modules": {
          JS: sizes[3],
          CSS: sizes[4],
        },
        Tachyons: {
          JS: sizes[5],
          CSS: sizes[9],
        },
      },
      Both: {
        "CSS Modules": {
          JS: sizes[6],
          CSS: sizes[7],
        },
        Tachyons: {
          JS: sizes[8],
          CSS: sizes[9],
        },
      },
    });
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
