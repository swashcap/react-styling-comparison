// https://www.styletron.org/getting-started#with-react
import type { FC, ReactNode } from "react";
import { Provider, DebugEngine } from "styletron-react";
import { Client } from "styletron-engine-atomic";

import { ThemeProvider, theme } from "./theme";

const IS_PROD_ENV = process.env.NODE_ENV === "production";

const debug = IS_PROD_ENV ? undefined : new DebugEngine();

const client = new Client(
  IS_PROD_ENV
    ? undefined
    : {
        prefix: "styletron_",
      }
);

export const StyletronProvider: FC<{ children?: ReactNode }> = ({
  children,
}) => (
  <Provider debug={debug} debugAfterHydration value={client}>
    <ThemeProvider value={theme}>{children}</ThemeProvider>
  </Provider>
);
