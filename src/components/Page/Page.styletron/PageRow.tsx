import { useStyletron } from "styletron-react";

import { Box } from "../../Box/Box.styletron";
import { BoxProps } from "../../Box/BoxTypes";
import { clsx } from "../../utilities/clsx";
import { useTheme } from "../../utilities/theme";

export const PageRow = ({
  className,
  ...rest
}: Omit<BoxProps<"div">, "as">) => {
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

export const PageRowItem = (props: Omit<BoxProps<"div">, "as">) => (
  <Box ph={2} {...props} />
);
