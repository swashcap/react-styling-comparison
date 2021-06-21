const { loop, stream } = require("./utils");
const { Page } = require("../dist/index.cssmodules.cjs");

(async () => {
  loop(Page, "cssmodules");
  await stream(Page, "cssmodules");
})();
