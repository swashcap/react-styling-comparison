import MultiStream from "multistream";
import emotionCache from "@emotion/cache";
import emotionServer from "@emotion/server/create-instance/dist/emotion-server-create-instance.cjs.js";
import { CacheProvider } from "@emotion/react";
import { Readable } from "stream";
import { createElement } from "react";
import { renderStylesToNodeStream } from "@emotion/server";
import { renderToNodeStream, renderToString } from "react-dom/server.js";

import { EmotionProvider, Page } from "../../../dist/index.emotion.cjs.js";
import { templateEnd, templateStart } from "../utilities.mjs";

export const stream = async (props) =>
  new MultiStream([
    Readable.from(
      templateStart({
        stylesheets:
          "<style>*,*:after,*:before{box-sizing:border-box}body{margin:0}</style>",
      })
    ),
    renderToNodeStream(
      createElement(EmotionProvider, null, createElement(Page, props))
    ).pipe(renderStylesToNodeStream()),
    Readable.from(
      templateEnd({
        pageData: props,
        scripts: `<script async src="/public/app.emotion.js"></script>`,
      })
    ),
  ]);

export const sync = (props) => {
  const cache = emotionCache.default({ key: "e" });
  const { extractCriticalToChunks, constructStyleTagsFromChunks } =
    emotionServer.default(cache);

  const element = createElement(
    CacheProvider,
    { value: cache },
    createElement(EmotionProvider, null, createElement(Page, props))
  );

  const { html, styles } = extractCriticalToChunks(renderToString(element));

  return `${templateStart({
    stylesheets: `<style>*,*:after,*:before{box-sizing:border-box}body{margin:0}</style>
${constructStyleTagsFromChunks({ html, styles })}`,
  })}
    ${html}
    ${templateEnd({
      pageData: props,
      scripts: `<script async src="/public/app.emotion.js"></script>`,
    })}`;
};
