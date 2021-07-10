import { CacheProvider } from "@emotion/react";
import { hydrate } from "react-dom";
import createCache from "@emotion/cache";

import { EmotionProvider } from "./components/utilities/EmotionProvider";
import { Page } from "./components/Page/Page.emotion";

const cache = createCache({ key: "e" });

hydrate(
  <CacheProvider value={cache}>
    <EmotionProvider>
      <Page {...window["__PAGE_DATA__"]} />
    </EmotionProvider>
  </CacheProvider>,
  document.getElementById("app")
);
