import { Page } from "../../../dist/index.tachyons.cjs.js";
import { makeStreamHandler, makeSyncHandler } from "../utilities.mjs";

export const stream = makeStreamHandler(Page, {
  stylesheets: `<link href="/public/tachyons.min.css" rel="stylesheet">`,
});

export const sync = makeSyncHandler(Page, {
  stylesheets: `<link href="/public/tachyons.min.css" rel="stylesheet">`,
});
