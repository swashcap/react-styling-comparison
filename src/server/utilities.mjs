import MultiStream from "multistream";
import { Readable } from "stream";
import { createElement } from "react";
import { renderToString, renderToNodeStream } from "react-dom/server.js";

export const makeStreamHandler = (Component, options) => (props) =>
  new MultiStream([
    Readable.from(templateStart(options)),
    renderToNodeStream(createElement(Component, props)),
    Readable.from(templateEnd()),
  ]);

export const makeSyncHandler = (Component, options) => (props) =>
  `${templateStart(options)}
${renderToString(createElement(Component, props))}
${templateEnd()}`;

export const templateStart = (options = {}) => `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>react-styling-comparison</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="An experiment testing React + styling methods' impact on bundle size.">
    ${options.stylesheets}
  </head>
  <body${options.bodyAttributes ? ` ${options.bodyAttributes}` : ""}>
    <div id="app">`;

export const templateEnd = () => `
    <div>
  </body>
</html>`;
