const { loop, stream } = require("./utils");
const { Page } = require("../dist/index.inline.cjs");

(async () => {
  loop(Page, "inline");
  await stream(Page, "inline");
})();
