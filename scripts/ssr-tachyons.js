const { loop, stream } = require("./utils");
const { Sidebar } = require("../dist/index.tachyons.cjs");

(async () => {
  loop(Sidebar, "tachyons");
  await stream(Sidebar, "tachyons");
})();
