import { Client } from "styletron-engine-atomic";
import { hydrate } from "react-dom";

import { Page } from "./components/Page/Page.styletron";
import { StyletronProvider } from "./components/utilities/StyletronProvider";

const client = new Client({
  hydrate: document.querySelectorAll<HTMLStyleElement>(
    "style[class='_styletron_hydrate_']"
  ),
});

hydrate(
  <StyletronProvider value={client}>
    <Page {...window["__PAGE_DATA__"]} />
  </StyletronProvider>,
  document.getElementById("app")
);
