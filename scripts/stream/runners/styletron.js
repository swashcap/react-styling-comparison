const render = require("../servers/styletron");
const { stream } = require("../../utils");

(async () => {
  await stream(render, "styletron");
})();
