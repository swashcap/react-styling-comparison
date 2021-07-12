import type { FC, HTMLAttributes } from "react";
import { useStyletron } from "styletron-react";

import { clsx } from "../../utilities/clsx";
import { useTheme } from "../../utilities/theme";

export const PageRow: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...rest
}) => {
  const [css] = useStyletron();
  const { space } = useTheme();

  return (
    <div
      className={clsx(
        css({
          display: "flex",
          flexWrap: "wrap",
          marginLeft: `calc(-1 * ${space[2]})`,
          marginRight: `calc(-1 * ${space[2]})`,
        }),
        className
      )}
      {...rest}
    />
  );
};

export const PageRowItem: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...rest
}) => {
  const [css] = useStyletron();
  const { space } = useTheme();

  return (
    <div
      className={clsx(
        css({
          paddingLeft: space[2],
          paddingRight: space[2],
        }),
        className
      )}
      {...rest}
    />
  );
};
