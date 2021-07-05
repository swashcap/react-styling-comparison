const streamToPromise = require("stream-to-promise");
const { Readable } = require("stream");
const { Server } = require("styletron-engine-atomic");
const { createElement } = require("react");
const { renderToNodeStream } = require("react-dom/server");

const {
  Page,
  StyletronProvider,
} = require("../../../dist/index.styletron.cjs");
const { templateEnd, templateStart } = require("../../utils");

module.exports = async (props) => {
  const engine = new Server();

  /**
   * No official support for streaming, so just write it out.
   *
   * @see {@link https://github.com/styletron/styletron/issues/334}
   */
  const content = await streamToPromise(
    renderToNodeStream(
      createElement(StyletronProvider, {
        children: createElement(Page, props),
        value: engine,
      })
    )
  );

  return Readable.from(`${templateStart(engine.getStylesheetsHtml())}
${content}
${templateEnd()}`);
};
