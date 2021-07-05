const { createElement } = require("react");
const { renderToString } = require("react-dom/server");
const { Server } = require("styletron-engine-atomic");

const {
  Page,
  StyletronProvider,
} = require("../../../dist/index.styletron.cjs");
const { templateEnd, templateStart } = require("../../utils");

module.exports = (props) => {
  const engine = new Server();

  const content = renderToString(
    createElement(StyletronProvider, {
      children: createElement(Page, props),
      value: engine,
    })
  );

  return `${templateStart(engine.getStylesheetsHtml())}
	${content}
	${templateEnd()}`;
};
