const render = require("../servers/inline");
const { stream } = require("../../utils");

(async () => {
  await stream(render, "inline");
})();
