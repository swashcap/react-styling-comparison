const render = require("../servers/cssmodules");
const { stream } = require("../../utils");

(async () => {
  await stream(render, "cssmodules");
})();
