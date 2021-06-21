const { loop, stream } = require("./utils");
const { Page } = require("../dist/index.tachyons.cjs");

(async () => {
  loop(Page, "tachyons");
  await stream(Page, "tachyons");
})();
