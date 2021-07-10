import type { FC, ReactNode } from "react";
import { ThemeProvider } from "@emotion/react";

import { theme } from "./theme";

export const EmotionProvider: FC<{ children?: ReactNode }> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
