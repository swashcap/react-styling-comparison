import type { FC, HTMLAttributes } from "react";
import type { StyleObject } from "styletron-standard";

import { mapKeys, mapValues } from "./map";
import { styled, Theme } from "./theme";

export type BoxSpace = 1 | 2 | 3 | 4;

export interface BaseBoxMarginPaddingProps {
  $ma?: BoxSpace;
  $mb?: BoxSpace;
  $ml?: BoxSpace;
  $mr?: BoxSpace;
  $mt?: BoxSpace;
  $pa?: BoxSpace;
  $pb?: BoxSpace;
  $pl?: BoxSpace;
  $pr?: BoxSpace;
  $pt?: BoxSpace;
}

export interface BaseBoxProps
  extends HTMLAttributes<HTMLElement>,
    BaseBoxMarginPaddingProps {
  $md?: BaseBoxMarginPaddingProps;
  $lg?: BaseBoxMarginPaddingProps;
}

const getStyle = (
  props: BaseBoxMarginPaddingProps,
  space: Theme["space"]
): StyleObject =>
  mapValues(
    mapKeys(props, (key) => {
      const mappedKey = key[0] === "$" ? key.substr(1) : key;
      return mappedKey in boxSpacingProps
        ? boxSpacingProps[mappedKey]
        : undefined;
    }),
    (value) => space[value as any]
  );

export const BaseBox = styled<"div", BaseBoxProps>(
  "div",
  ({ $md, $lg, $theme: { breakpoint, space }, ...rest }) => {
    const style: StyleObject = getStyle(rest, space);

    if ($md) {
      style[breakpoint.md] = getStyle($md, space);
    }

    if ($lg) {
      style[breakpoint.lg] = getStyle($lg, space);
    }

    return style;
  }
);

const boxSpacingProps = {
  ma: "margin",
  mb: "marginBottom",
  ml: "marginLeft",
  mr: "marginRight",
  mt: "marginTop",
  pa: "padding",
  pb: "paddingBottom",
  pl: "paddingLeft",
  pr: "paddingRight",
  pt: "paddingTop",
} as const;

const boxPropsToMap = [
  ...Object.keys(boxSpacingProps),
  "as",
  "lg",
  "md",
] as const;

const mapBoxPropsToBaseBoxProps = (props: BoxProps): BaseBoxProps =>
  mapKeys(props, (key) => (boxPropsToMap.indexOf(key) > -1 ? `$${key}` : key));

export interface BoxMarginPaddingProps {
  ma?: BoxSpace;
  mb?: BoxSpace;
  ml?: BoxSpace;
  mr?: BoxSpace;
  mt?: BoxSpace;
  pa?: BoxSpace;
  pb?: BoxSpace;
  pl?: BoxSpace;
  pr?: BoxSpace;
  pt?: BoxSpace;
}

export interface BoxProps
  extends HTMLAttributes<HTMLDivElement>,
    BoxMarginPaddingProps {
  as?: keyof JSX.IntrinsicElements;
  md?: BoxMarginPaddingProps;
  lg?: BoxMarginPaddingProps;
}

export const Box: FC<BoxProps> = (props) => (
  <BaseBox {...mapBoxPropsToBaseBoxProps(props)} />
);
