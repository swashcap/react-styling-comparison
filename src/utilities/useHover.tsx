import type { MutableRefObject } from "react";
import { useEffect, useState } from "react";

export const useHover = (ref: MutableRefObject<HTMLElement>): boolean => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const { current: element } = ref;

    if (!element) {
      return;
    }

    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);

    element.addEventListener("mouseenter", onMouseEnter);
    element.addEventListener("mouseleave", onMouseLeave);

    return () => {
      element.removeEventListener("mouseenter", onMouseEnter);
      element.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [ref.current]);

  return isHovered;
};
