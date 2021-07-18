import type { CSSProperties } from "react";

import type { BoxProps } from "./BoxTypes";
import type { Theme } from "../utilities/theme";
import { useTheme } from "../utilities/theme";

export const directions: any = {
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
};
directions.mh = [directions.ml, directions.mr];
directions.mv = [directions.mb, directions.mt];
directions.ph = [directions.pl, directions.pr];
directions.pv = [directions.pb, directions.pt];

export const setStyles = (
  styles: CSSProperties,
  key: string,
  value: number,
  space: Theme["space"]
): void => {
  const styleValue = space[value] || value;
  const styleProp = directions[key];

  if (Array.isArray(styleProp)) {
    for (let i = 0; i < styleProp.length; i += 1) {
      styles[styleProp[i]] = styleValue;
    }
  } else if (styleProp) {
    styles[styleProp] = styleValue;
  }
};

export const useFilteredPropsAndStyle = (props: Omit<BoxProps<any>, "as">) => {
  const { borderRadius, breakpoint, color, space } = useTheme();

  const filteredProps: any = {};
  const styles: any = {};

  for (const key in props) {
    // eslint-disable-next-line no-prototype-builtins
    if (props.hasOwnProperty(key)) {
      const value = props[key];

      if (key === "md" || key === "lg") {
        const mediaQueryStyles: CSSProperties = {};

        for (const mediaQueryKey in value) {
          // eslint-disable-next-line no-prototype-builtins
          if (value.hasOwnProperty(mediaQueryKey)) {
            if (mediaQueryKey in directions) {
              setStyles(
                mediaQueryStyles,
                mediaQueryKey,
                value[mediaQueryKey],
                space
              );
            }
          }
        }

        styles[breakpoint[key]] = mediaQueryStyles;
      } else if (key in directions) {
        setStyles(styles, key, value, space);
      } else if (key === "bg") {
        styles.background = color[value];
      } else if (key === "br") {
        styles.borderRadius = borderRadius[value];
      } else {
        filteredProps[key] = value;
      }
    }
  }

  return {
    props: filteredProps,
    styles,
  };
};
