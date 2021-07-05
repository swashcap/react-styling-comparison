const MultiStream = require("multistream");
const { Readable } = require("stream");
const { createElement } = require("react");
const { renderToNodeStream } = require("react-dom/server");

const { Page } = require("../../../dist/index.cssmodules.cjs");
const { templateEnd, templateStart } = require("../../utils");

module.exports = (props) =>
  new MultiStream([
    Readable.from(
      templateStart(`<link href="index.cssmodules.min.css" rel="stylesheet">`)
    ),
    renderToNodeStream(createElement(Page, props)),
    Readable.from(templateEnd()),
  ]);
