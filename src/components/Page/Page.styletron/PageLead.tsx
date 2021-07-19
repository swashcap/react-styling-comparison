import type { FC, HTMLAttributes } from "react";
import { useStyletron } from "styletron-react";

import type { PageProps } from "../PageTypes";
import { Box } from "../../Box/Box.styletron";
import { Button } from "../../Button/Button.styletron";
import { useTheme } from "../../utilities/theme";

export const PageLead: FC<
  HTMLAttributes<HTMLElement> & { lead: PageProps["lead"] }
> = ({ lead: { actionOnClick, actionText, description, title }, ...rest }) => {
  const [css] = useStyletron();
  const theme = useTheme();

  return (
    <Box bg="lightestBlue" br={2} mb={4} pa={4} textColor="darkGray" {...rest}>
      <Box
        as="h1"
        className={css({
          fontSize: theme.fontSize[1],
          fontWeight: theme.fontWeight[800],
          lineHeight: theme.lineHeight.title,
        })}
        mb={2}
        mt={2}
      >
        {title}
      </Box>
      <Box
        as="p"
        className={css({
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
};
