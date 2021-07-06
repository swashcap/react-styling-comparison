import { Page } from "../../../dist/Page.cssmodules.cjs.js";
import { makeStreamHandler, makeSyncHandler } from "../utilities.mjs";

export const stream = makeStreamHandler(
  Page,
  {
    stylesheets: `<style>*,*:after,*:before{box-sizing:border-box}body{margin:0}</style>
<link href="/public/app.cssmodules.min.css" rel="stylesheet">`,
  },
  {
    scripts: `<script async src="/public/app.cssmodules.js"></script>`,
  }
);

export const sync = makeSyncHandler(
  Page,
  {
    stylesheets: `<style>*,*:after,*:before{box-sizing:border-box}body{margin:0}</style>
<link href="/public/app.cssmodules.min.css" rel="stylesheet">`,
  },
  {
    scripts: `<script async src="/public/app.cssmodules.js"></script>`,
  }
);
