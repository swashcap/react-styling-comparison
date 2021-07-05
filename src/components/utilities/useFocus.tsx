import type { MutableRefObject } from "react";
import { useEffect, useState } from "react";

export const useFocus = (ref: MutableRefObject<HTMLElement>): boolean => {
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const { current: element } = ref;

    if (!element) {
      return;
    }

    const onBlur = () => setIsFocused(false);
    const onFocus = () => setIsFocused(true);

    element.addEventListener("blur", onBlur);
    element.addEventListener("focus", onFocus);

    return () => {
      element.removeEventListener("blur", onBlur);
      element.removeEventListener("focus", onFocus);
    };
  }, [ref.current]);

  return isFocused;
};
