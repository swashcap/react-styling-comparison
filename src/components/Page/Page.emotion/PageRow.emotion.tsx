import { Box } from "../../Box/Box.emotion";
import { BoxProps } from "../../Box/BoxTypes";
import { Theme } from "../../utilities/theme";

export const PageRow = (props: Omit<BoxProps<"div">, "as">) => (
  <Box
    css={(theme: Theme) => ({
      display: "flex",
      flexWrap: "wrap",
      marginLeft: `calc(-1 * ${theme.space[2]})`,
      marginRight: `calc(-1 * ${theme.space[2]})`,
    })}
    {...props}
  />
);

export const PageRowItem = (props: Omit<BoxProps<"div">, "as">) => (
  <Box ph={2} {...props} />
);
