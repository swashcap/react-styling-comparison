const { createElement } = require("react");
const { renderToString } = require("react-dom/server");

const { Page } = require("../../../dist/index.tachyons.cjs");
const { templateEnd, templateStart } = require("../../utils");

module.exports = (props) => `${templateStart(
  `<link href="tachyons.min.js" rel="stylesheet">`
)}
${renderToString(createElement(Page, props))}
${templateEnd()}`;
