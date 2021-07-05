import type { FC } from "react";
import { useStyletron } from "styletron-react";

import { Box, BoxProps } from "../../utilities/Box";
import { clsx } from "../../utilities/clsx";
import { useTheme } from "../../utilities/theme";

export const PageRow: FC<BoxProps> = ({ className, ...rest }) => {
  const [css] = useStyletron();
  const { space } = useTheme();

  return (
    <Box
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

export const PageRowItem: FC<BoxProps> = (props) => (
  <Box pl={2} pr={2} {...props} />
);
