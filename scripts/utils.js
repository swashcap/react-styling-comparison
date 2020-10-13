const React = require("react");
const streamToPromise = require("stream-to-promise");
const { performance } = require("perf_hooks");
const { renderToNodeStream, renderToString } = require("react-dom/server");

const props = require("../src/Sidebar/args.json");

module.exports.loop = (Sidebar, prefix) => {
  const start = performance.now();

  for (let i = 0; i < 10000; i += 1) {
    console.error(renderToString(React.createElement(Sidebar, props)));
  }

  console.log(
    `[${prefix}] renderToString, loop x10000: ${performance.now() - start} ms`
  );
};

module.exports.stream = async (Sidebar, prefix) => {
  const start = performance.now();

  for (let i = 0; i < 1000; i += 1) {
    const rendered = await Promise.all(
      Array.from(new Array(10)).map(() =>
        streamToPromise(renderToNodeStream(React.createElement(Sidebar, props)))
      )
    );

    console.error(rendered.join(""));
  }

  console.log(
    `[${prefix}] renderToNodeStream, 10 parallel x1000: ${
      performance.now() - start
    } ms`
  );
};
