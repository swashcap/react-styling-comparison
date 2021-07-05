const MultiStream = require("multistream");
const { Readable } = require("stream");
const { createElement } = require("react");
const { renderToNodeStream } = require("react-dom/server");

const { Page } = require("../../../dist/index.inline.cjs");
const { templateEnd, templateStart } = require("../../utils");

module.exports = (props) =>
  new MultiStream([
    Readable.from(templateStart()),
    renderToNodeStream(createElement(Page, props)),
    Readable.from(templateEnd()),
  ]);
