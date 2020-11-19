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

const files = new Map([
  ["button:js", "./dist/Button.cssmodules.js"],
  ["button:css", "./dist/Button.cssmodules.min.css"],
  ["button:inline", "./dist/Button.inline.js"],
  ["button:tachyons", "./dist/Button.tachyons.js"],
  ["sidebar:js", "./dist/Sidebar.cssmodules.js"],
  ["sidebar:css", "./dist/Sidebar.cssmodules.min.css"],
  ["sidebar:inline", "./dist/Sidebar.inline.js"],
  ["sidebar:tachyons", "./dist/Sidebar.tachyons.js"],
  ["both:js", "./dist/index.cssmodules.js"],
  ["both:css", "./dist/index.cssmodules.min.css"],
  ["both:inline", "./dist/index.inline.js"],
  ["both:tachyons", "./dist/index.tachyons.js"],
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
        Tachyons: {
          JS: sizes.get("button:tachyons"),
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
        Tachyons: {
          JS: sizes.get("sidebar:tachyons"),
          CSS: sizes.get("tachyons"),
        },
      },
      Both: {
        "CSS Modules": {
          JS: sizes.get("both:js"),
          CSS: sizes.get("both:css"),
        },
        "Inline Styles": {
          JS: sizes.get("both:inline"),
          CSS: 0,
        },
        Tachyons: {
          JS: sizes.get("both:tachyons"),
          CSS: sizes.get("tachyons"),
        },
      },
    });
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
