import type { FC } from "react";

import { Box, BoxProps } from "../../utilities/Box";
import { styled } from "../../utilities/theme";

export const PageRow = styled(Box, ({ $theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  marginLeft: `calc(-1 * ${$theme.space[2]})`,
  marginRight: `calc(-1 * ${$theme.space[2]})`,
}));

export const PageRowItem: FC<BoxProps> = (props) => (
  <Box pl={2} pr={2} {...props} />
);
