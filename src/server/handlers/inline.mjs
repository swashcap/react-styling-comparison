import { Page } from "../../../dist/Page.inline.cjs.js";
import { makeStreamHandler, makeSyncHandler } from "../utilities.mjs";

export const stream = makeStreamHandler(
  Page,
  {
    stylesheets:
      "<style>*,*:after,*:before{box-sizing:border-box}body{margin:0}</style>",
  },
  {
    scripts: `<script async src="/public/app.inline.js"></script>`,
  }
);

export const sync = makeSyncHandler(
  Page,
  {
    stylesheets:
      "<style>*,*:after,*:before{box-sizing:border-box}body{margin:0}</style>",
  },
  {
    scripts: `<script async src="/public/app.inline.js"></script>`,
  }
);
