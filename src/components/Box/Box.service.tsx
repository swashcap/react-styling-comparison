import type { CSSProperties } from "react";

import type { BoxMarginPadding } from "./BoxTypes";
import type { Theme } from "../utilities/theme";

export const isSpaceValue = (value: any): value is number =>
  typeof value === "number" && !Number.isNaN(value);

export const getMarginPaddingStyles = (
  { ma, mb, mh, ml, mr, mt, mv, pa, pb, ph, pl, pr, pt, pv }: BoxMarginPadding,
  space: Theme["space"]
): CSSProperties => {
  const styles: CSSProperties = {};

  if (isSpaceValue(ma)) {
    styles.margin = space[ma] || ma;
  }
  if (isSpaceValue(mh)) {
    styles.marginLeft = styles.marginRight = space[mh] || mh;
  }
  if (isSpaceValue(mv)) {
    styles.marginBottom = styles.marginTop = space[mv] || mv;
  }
  if (isSpaceValue(mb)) {
    styles.marginBottom = space[mb] || mb;
  }
  if (isSpaceValue(ml)) {
    styles.marginLeft = space[ml] || ml;
  }
  if (isSpaceValue(mr)) {
    styles.marginRight = space[mr] || mr;
  }
  if (isSpaceValue(mt)) {
    styles.marginTop = space[mt] || mt;
  }
  if (isSpaceValue(pa)) {
    styles.padding = space[pa] || pa;
  }
  if (isSpaceValue(ph)) {
    styles.paddingLeft = styles.paddingRight = space[ph] || ph;
  }
  if (isSpaceValue(pv)) {
    styles.paddingBottom = styles.paddingTop = space[pv] || pv;
  }
  if (isSpaceValue(pb)) {
    styles.paddingBottom = space[pb] || pb;
  }
  if (isSpaceValue(pl)) {
    styles.paddingLeft = space[pl] || pl;
  }
  if (isSpaceValue(pr)) {
    styles.paddingRight = space[pr] || pr;
  }
  if (isSpaceValue(pt)) {
    styles.paddingTop = space[pt] || pt;
  }

  return styles;
};
