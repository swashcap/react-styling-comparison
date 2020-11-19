const { loop, stream } = require("./utils");
const { Sidebar } = require("../dist/index.inline.cjs");

(async () => {
  loop(Sidebar, "inline");
  await stream(Sidebar, "inline");
})();
