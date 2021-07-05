import { useEffect, useState } from "react";

import { breakpointNs, breakpointMd, breakpointLg } from "./constants";

const mediaQueryListMap =
  typeof matchMedia !== "undefined"
    ? {
        ns: matchMedia(breakpointNs),
        md: matchMedia(breakpointMd),
        lg: matchMedia(breakpointLg),
      }
    : {
        ns: { matches: false },
        md: { matches: false },
        lg: { matches: true },
      };

export interface Breakpoints {
  ns: boolean;
  md: boolean;
  lg: boolean;
}

export const useBreakpoints = (): Breakpoints => {
  const [ns, setNs] = useState(mediaQueryListMap.ns.matches);
  const [md, setMd] = useState(mediaQueryListMap.md.matches);
  const [lg, setLg] = useState(mediaQueryListMap.lg.matches);

  useEffect(() => {
    const listenersMap = Object.entries({
      ns({ matches }: MediaQueryListEvent) {
        setNs(matches);
      },
      md({ matches }: MediaQueryListEvent) {
        setMd(matches);
      },
      lg({ matches }: MediaQueryListEvent) {
        setLg(matches);
      },
    });

    listenersMap.forEach(([name, listener]) => {
      mediaQueryListMap[name].addEventListener("change", listener);
    });

    return () =>
      listenersMap.forEach(([name, listener]) => {
        mediaQueryListMap[name].removeEventListener("change", listener);
      });
  }, []);

  return { ns, md, lg };
};
