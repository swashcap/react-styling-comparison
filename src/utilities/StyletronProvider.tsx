// https://www.styletron.org/getting-started#with-react
import type { FC, ReactNode } from "react";
import type { StandardEngine } from "styletron-react";
import { Provider, DebugEngine } from "styletron-react";

import { ThemeProvider, theme } from "./theme";

const debug =
  process.env.NODE_ENV === "production" ? undefined : new DebugEngine();

export const StyletronProvider: FC<{
  children?: ReactNode;
  value: StandardEngine;
}> = ({ children, value }) => (
  <Provider debug={debug} debugAfterHydration value={value}>
    <ThemeProvider value={theme}>{children}</ThemeProvider>
  </Provider>
);
