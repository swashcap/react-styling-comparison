import { Page } from "../../../dist/index.inline.cjs.js";
import { makeStreamHandler, makeSyncHandler } from "../utilities.mjs";

export const stream = makeStreamHandler(Page, {
  stylesheets: "<style>*,*:after,*:before{box-sizing:border-box}body{margin:0}</style>"
});

export const sync = makeSyncHandler(Page, {
  stylesheets: "<style>*,*:after,*:before{box-sizing:border-box}body{margin:0}</style>"
});
