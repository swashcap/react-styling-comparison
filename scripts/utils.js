const streamToPromise = require("stream-to-promise");
const { performance } = require("perf_hooks");

const props = require("../src/Page/args.json");

module.exports.loop = (render, prefix) => {
  const start = performance.now();

  for (let i = 0; i < 10000; i += 1) {
    console.error(render(props));
  }

  console.log(
    `[${prefix}] renderToString, loop x10000: ${performance.now() - start} ms`
  );
};

module.exports.templateStart = (stylesheets = "") => `<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>react-styling-comparison</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ${stylesheets}
  </head>
  <body>
    <div id="app">`;

module.exports.templateEnd = () => `
    <div>
  </body>
</html>`;

module.exports.stream = async (render, prefix) => {
  const start = performance.now();

  for (let i = 0; i < 1000; i += 1) {
    const rendered = await Promise.all(
      Array.from(new Array(10)).map(async () => {
        const value = render(props);

        return streamToPromise(value instanceof Promise ? await value : value);
      })
    );

    console.error(rendered.join(""));
  }

  console.log(
    `[${prefix}] renderToNodeStream, 10 parallel x1000: ${
      performance.now() - start
    } ms`
  );
};
