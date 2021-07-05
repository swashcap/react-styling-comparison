import type { FC, ReactNode } from "react";
import { createContext } from "react";
import { createStyled } from "styletron-react";
import type { StyletronComponent, StyleObject } from "styletron-react";
import { driver, getInitialStyle } from "styletron-standard";

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
    ns: `@media${breakpointNs}`,
    md: `@media${breakpointMd}`,
    lg: `@media${breakpointLg}`,
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

export interface ThemeProps {
  $theme: Theme;
}

export const ThemeContext = createContext<Theme>(theme);

export const ThemeProvider: FC<{ children?: ReactNode; value?: Theme }> = ({
  children,
  value,
}) => <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;

/* eslint-disable @typescript-eslint/no-explicit-any,@typescript-eslint/ban-types */
export interface StyledFn {
  <
    C extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
    P extends object
  >(
    component: C,
    style: (props: P & ThemeProps) => StyleObject
  ): StyletronComponent<
    Pick<
      React.ComponentProps<C>,
      Exclude<keyof React.ComponentProps<C>, { className: string }>
    > &
      P
  >;
  <C extends keyof JSX.IntrinsicElements | React.ComponentType<any>>(
    component: C,
    style: StyleObject
  ): StyletronComponent<
    Pick<
      React.ComponentProps<C>,
      Exclude<keyof React.ComponentProps<C>, { className: string }>
    >
  >;
}

export const styled = createStyled({
  driver,
  getInitialStyle,
  wrapper(StyledComponent) {
    return (props: any) => (
      <ThemeContext.Consumer>
        {(theme) => <StyledComponent {...props} $theme={theme} />}
      </ThemeContext.Consumer>
    );
  },
}) as StyledFn;
/* eslint-enabledisable @typescript-eslint/no-explicit-any,@typescript-eslint/ban-types */
