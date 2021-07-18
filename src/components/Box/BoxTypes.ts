import type { Theme } from "../utilities/theme";

export type BoxBorderRadius = keyof Theme["borderRadius"];

export type BoxColor = keyof Theme["color"];

export type BoxSpace = 0 | 1 | 2 | 3 | 4;

export interface BoxMarginPadding {
  /**
   * All directions margin.
   */
  ma?: BoxSpace;
  /**
   * Bottom margin.
   */
  mb?: BoxSpace;
  /**
   * Left margin.
   */
  ml?: BoxSpace;
  /**
   * Horizontal margin.
   */
  mh?: BoxSpace;
  /**
   * Right margin.
   */
  mr?: BoxSpace;
  /**
   * Top margin.
   */
  mt?: BoxSpace;
  /**
   * Vertical margin.
   */
  mv?: BoxSpace;
  /**
   * All directions padding.
   */
  pa?: BoxSpace;
  /**
   * Bottom padding.
   */
  pb?: BoxSpace;
  /**
   * Left padding.
   */
  pl?: BoxSpace;
  /**
   * Horizontal padding.
   */
  ph?: BoxSpace;
  /**
   * Right padding.
   */
  pr?: BoxSpace;
  /**
   * Top padding.
   */
  pt?: BoxSpace;
  /**
   * Vertical padding.
   */
  pv?: BoxSpace;
}

export type BoxProps<T extends keyof JSX.IntrinsicElements> =
  JSX.IntrinsicElements[T] &
    BoxMarginPadding & {
      /**
       * The box's element.
       */
      as?: T;
      /**
       * The box's background color.
       */
      bg?: BoxColor;
      /**
       * The box's border radius.
       */
      br?: BoxBorderRadius;
      /**
       * Margin and padding at the medium breakpoint.
       */
      md?: BoxMarginPadding;
      /**
       * Margin and padding at the large breakpoint.
       */
      lg?: BoxMarginPadding;
      /**
       * The box's text color.
       */
      textColor?: BoxColor;
    };
