const render = require("../servers/tachyons");
const { stream } = require("../../utils");

(async () => {
  await stream(render, "tachyons");
})();
