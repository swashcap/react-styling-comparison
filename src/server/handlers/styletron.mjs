import streamToPromise from "stream-to-promise";
import { Readable } from "stream";
import { Server } from "styletron-engine-atomic";
import { createElement } from "react";
import { renderToNodeStream, renderToString } from "react-dom/server.js";

import { Page, StyletronProvider } from "../../../dist/index.styletron.cjs.js";
import { templateEnd, templateStart } from "../utilities.mjs";

export const stream = async (props) => {
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

  return Readable.from(`${templateStart({
    stylesheets: `<style>*,*:after,*:before{box-sizing:border-box}body{margin:0}</style>
${engine.getStylesheetsHtml()}`,
  })}
${content}
${templateEnd({
  pageData: props,
  scripts: `<script async src="/public/app.styletron.js"></script>`,
})}`);
};

export const sync = (props) => {
  const engine = new Server();

  const content = renderToString(
    createElement(StyletronProvider, {
      children: createElement(Page, props),
      value: engine,
    })
  );

  return `${templateStart({
    stylesheets: `<style>*,*:after,*:before{box-sizing:border-box}body{margin:0}</style>
${engine.getStylesheetsHtml()}`,
  })}
	${content}
  ${templateEnd({
    pageData: props,
    scripts: `<script async src="/public/app.styletron.js"></script>`,
  })}`;
};
