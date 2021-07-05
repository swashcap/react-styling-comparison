import type { FC, ReactNode } from "react";
import { createContext, useContext } from "react";

import {
  borderRadius1,
  borderRadius2,
  breakpointLg,
  breakpointMd,
  breakpointNs,
  colorBlack,
  colorBlue,
  colorDarkBlue,
  colorDarkGray,
  colorDarkGreen,
  colorGray,
  colorGreen,
  colorLightGray,
  colorLightestBlue,
  colorMidGray,
  colorMoonGray,
  colorNavy,
  colorNearWhite,
  colorOrange,
  colorSilver,
  colorWhite,
  colorYellow,
  fontSansSerif,
  fontSize1,
  fontSize2,
  fontSize3,
  fontSize4,
  fontSize5,
  fontSize6,
  fontSize7,
  lineHeightCopy,
  lineHeightTitle,
  lineHeightSolid,
  spaceExtraSmall,
  spaceLarge,
  spaceMedium,
  spaceSmall,
} from "./constants";

export const theme = {
  borderRadius: {
    1: borderRadius1,
    2: borderRadius2,
  },
  breakpoint: {
    ns: `@media ${breakpointNs}`,
    md: `@media ${breakpointMd}`,
    lg: `@media ${breakpointLg}`,
  },
  color: {
    black: colorBlack,
    blue: colorBlue,
    darkBlue: colorDarkBlue,
    darkGray: colorDarkGray,
    darkGreen: colorDarkGreen,
    gray: colorGray,
    green: colorGreen,
    lightGray: colorLightGray,
    lightestBlue: colorLightestBlue,
    midGray: colorMidGray,
    moonGray: colorMoonGray,
    navy: colorNavy,
    nearWhite: colorNearWhite,
    orange: colorOrange,
    silver: colorSilver,
    white: colorWhite,
    yellow: colorYellow,
  },
  fontFamily: {
    sansSerif: fontSansSerif,
  },
  fontSize: {
    1: fontSize1,
    2: fontSize2,
    3: fontSize3,
    4: fontSize4,
    5: fontSize5,
    6: fontSize6,
    7: fontSize7,
  },
  fontWeight: {
    400: 400,
    500: 500,
    600: 600,
    700: 700,
    800: 800,
  },
  lineHeight: {
    copy: lineHeightCopy,
    solid: lineHeightSolid,
    title: lineHeightTitle,
  },
  space: {
    1: spaceExtraSmall,
    2: spaceSmall,
    3: spaceMedium,
    4: spaceLarge,
  },
};

export type Theme = typeof theme;

export const ThemeContext = createContext<Theme>(theme);

export const ThemeProvider: FC<{ children?: ReactNode; value?: Theme }> = ({
  children,
  value,
}) => <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;

export const useTheme = () => useContext(ThemeContext);
