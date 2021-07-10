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
  ["app:css", "./dist/app.cssmodules.min.css"],
  ["app:emotion", "./dist/app.emotion.js"],
  ["app:inline", "./dist/app.inline.js"],
  ["app:js", "./dist/app.cssmodules.js"],
  ["app:styletron", "./dist/app.styletron.js"],
  ["app:tachyons", "./dist/app.tachyons.js"],
  ["button:css", "./dist/Button.cssmodules.min.css"],
  ["button:emotion", "./dist/Button.emotion.js"],
  ["button:inline", "./dist/Button.inline.js"],
  ["button:js", "./dist/Button.cssmodules.js"],
  ["button:styletron", "./dist/Button.styletron.js"],
  ["button:tachyons", "./dist/Button.tachyons.js"],
  ["page:css", "./dist/Page.cssmodules.min.css"],
  ["page:emotion", "./dist/Page.emotion.js"],
  ["page:inline", "./dist/Page.inline.js"],
  ["page:js", "./dist/Page.cssmodules.js"],
  ["page:styletron", "./dist/Page.styletron.js"],
  ["page:tachyons", "./dist/Page.tachyons.js"],
  ["sidebar:css", "./dist/Sidebar.cssmodules.min.css"],
  ["sidebar:emotion", "./dist/Sidebar.emotion.js"],
  ["sidebar:inline", "./dist/Sidebar.inline.js"],
  ["sidebar:js", "./dist/Sidebar.cssmodules.js"],
  ["sidebar:styletron", "./dist/Sidebar.styletron.js"],
  ["sidebar:tachyons", "./dist/Sidebar.tachyons.js"],
  ["tachyons", "./dist/tachyons.min.css"],
]);

Promise.all(Array.from(files.values()).map(getFileSize))
  .then((fileSizes) => {
    const keys = Array.from(files.keys());
    const sizes = new Map(fileSizes.map((size, index) => [keys[index], size]));

    console.log(
      "|     | Button JS | Button CSS | Sidebar JS | Sidebar CSS | Page JS | Page CSS | App (Page + React) |"
    );
    console.log(
      "| --- | --------: | ---------: | ---------: | ----------: | ------: | -------: | -----------------: |"
    );
    console.log(
      `| ${[
        "CSS Modules",
        sizes.get("button:js"),
        sizes.get("button:css"),
        sizes.get("sidebar:js"),
        sizes.get("sidebar:css"),
        sizes.get("page:js"),
        sizes.get("page:css"),
        sizes.get("app:js"),
      ].join(" | ")} |`
    );
    console.log(
      `| ${[
        "Emotion",
        sizes.get("button:emotion"),
        0,
        sizes.get("sidebar:emotion"),
        0,
        sizes.get("page:emotion"),
        0,
        sizes.get("app:emotion"),
      ].join(" | ")} |`
    );
    console.log(
      `| ${[
        "Inline Styles",
        sizes.get("button:inline"),
        0,
        sizes.get("sidebar:inline"),
        0,
        sizes.get("page:inline"),
        0,
        sizes.get("app:inline"),
      ].join(" | ")} |`
    );
    console.log(
      `| ${[
        "Styletron",
        sizes.get("button:styletron"),
        0,
        sizes.get("sidebar:styletron"),
        0,
        sizes.get("page:styletron"),
        0,
        sizes.get("app:styletron"),
      ].join(" | ")} |`
    );
    console.log(
      `| ${[
        "Tachyons",
        sizes.get("button:tachyons"),
        sizes.get("tachyons"),
        sizes.get("sidebar:tachyons"),
        sizes.get("tachyons"),
        sizes.get("page:tachyons"),
        sizes.get("tachyons"),
        sizes.get("app:tachyons"),
      ].join(" | ")} |`
    );
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
