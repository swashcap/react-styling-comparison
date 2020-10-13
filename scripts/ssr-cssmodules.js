const { loop, stream } = require("./utils");
const { Sidebar } = require("../dist/index.cssmodules.cjs");

(async () => {
  loop(Sidebar, "cssmodules");
  await stream(Sidebar, "cssmodules");
})();
