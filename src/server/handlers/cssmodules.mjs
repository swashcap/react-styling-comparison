import { Page } from "../../../dist/index.cssmodules.cjs.js";
import { makeStreamHandler, makeSyncHandler } from "../utilities.mjs";

export const stream = makeStreamHandler(Page, {
  stylesheets: `<style>*,*:after,*:before{box-sizing:border-box}body{margin:0}</style>
<link href="/public/index.cssmodules.min.css" rel="stylesheet">`,
});

export const sync = makeSyncHandler(Page, {
  stylesheets: `<style>*,*:after,*:before{box-sizing:border-box}body{margin:0}</style>
<link href="/public/index.cssmodules.min.css" rel="stylesheet">`,
});
