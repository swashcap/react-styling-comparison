const { createElement } = require("react");
const { renderToString } = require("react-dom/server");

const { Page } = require("../../../dist/index.inline.cjs");
const { templateEnd, templateStart } = require("../../utils");

module.exports = (props) => `${templateStart()}
${renderToString(createElement(Page, props))}
${templateEnd()}`;
