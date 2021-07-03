// https://www.styletron.org/getting-started#with-react
import type { FC, ReactNode } from "react";
import { Provider, DebugEngine } from "styletron-react";
import { Client } from "styletron-engine-atomic";

import { ThemeProvider, theme } from "./theme";

const debug =
  process.env.NODE_ENV === "production" ? undefined : new DebugEngine();

const client = new Client();

export const StyletronProvider: FC<{ children?: ReactNode }> = ({
  children,
}) => (
  <Provider debug={debug} debugAfterHydration value={client}>
    <ThemeProvider value={theme}>{children}</ThemeProvider>
  </Provider>
);
