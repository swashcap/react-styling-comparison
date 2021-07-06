import MultiStream from "multistream";
import { Readable } from "stream";
import { createElement } from "react";
import { renderToString, renderToNodeStream } from "react-dom/server.js";

export const makeStreamHandler =
  (Component, startOptions, endOptions) => (props) =>
    new MultiStream([
      Readable.from(templateStart(startOptions)),
      renderToNodeStream(createElement(Component, props)),
      Readable.from(
        templateEnd({
          ...endOptions,
          pageData: props,
        })
      ),
    ]);

export const makeSyncHandler =
  (Component, startOptions, endOptions) => (props) =>
    `${templateStart(startOptions)}
${renderToString(createElement(Component, props))}
${templateEnd({
  ...endOptions,
  pageData: props,
})}`;

export const templateStart = (options = {}) => `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>react-styling-comparison</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="An experiment testing React + styling methods' impact on bundle size.">
    ${options.stylesheets || ""}
  </head>
  <body${options.bodyAttributes ? ` ${options.bodyAttributes}` : ""}>
    <div id="app">`;

export const templateEnd = (options = {}) => `
    </div>
    ${
      options.pageData
        ? `<script>__PAGE_DATA__=${JSON.stringify(options.pageData)}</script>`
        : ""
    }
    ${options.scripts || ""}
  </body>
</html>`;
