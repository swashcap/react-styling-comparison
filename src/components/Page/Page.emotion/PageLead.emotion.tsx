import type { FC, HTMLAttributes } from "react";

import type { PageProps } from "../PageTypes";
import { Button } from "../../Button/Button.emotion";
import { Theme } from "../../utilities/theme";
import { Box } from "../../Box/Box.emotion";

export const PageLead: FC<
  HTMLAttributes<HTMLElement> & { lead: PageProps["lead"] }
> = ({ lead: { actionOnClick, actionText, description, title }, ...rest }) => (
  <Box bg="lightestBlue" br={2} mb={4} pa={4} textColor="darkGray" {...rest}>
    <Box
      as="h1"
      css={(theme: Theme) => ({
        fontSize: theme.fontSize[1],
        fontWeight: theme.fontWeight[800],
        lineHeight: theme.lineHeight.title,
      })}
      mb={2}
      mt={0}
    >
      {title}
    </Box>
    <Box
      as="p"
      css={(theme: Theme) => ({
        fontSize: theme.fontSize[3],
        lineHeight: theme.lineHeight.copy,
      })}
      mb={3}
      mt={0}
    >
      {description}
    </Box>
    <Button onClick={actionOnClick} size="large" variant="primary">
      {actionText}
    </Button>
  </Box>
);
