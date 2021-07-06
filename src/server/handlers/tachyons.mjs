import { Page } from "../../../dist/Page.tachyons.cjs.js";
import { makeStreamHandler, makeSyncHandler } from "../utilities.mjs";

export const stream = makeStreamHandler(
  Page,
  {
    stylesheets: `<link href="/public/tachyons.min.css" rel="stylesheet">`,
  },
  {
    scripts: `<script async src="/public/app.tachyons.js"></script>`,
  }
);

export const sync = makeSyncHandler(
  Page,
  {
    stylesheets: `<link href="/public/tachyons.min.css" rel="stylesheet">`,
  },
  {
    scripts: `<script async src="/public/app.tachyons.js"></script>`,
  }
);
