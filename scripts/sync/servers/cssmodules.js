const { createElement } = require("react");
const { renderToString } = require("react-dom/server");

const { Page } = require("../../../dist/index.cssmodules.cjs");
const { templateEnd, templateStart } = require("../../utils");

module.exports = (props) => `${templateStart(
  `<link href="index.cssmodules.min.css" rel="stylesheet">`
)}
${renderToString(createElement(Page, props))}
${templateEnd()}`;
