import type { FC, HTMLAttributes } from "react";
import { useStyletron } from "styletron-react";

import type { PageProps } from "../PageTypes";
import { Box, BoxProps } from "../../utilities/Box";
import { Button } from "../../Button/Button.styletron";
import { useTheme } from "../../utilities/theme";
import { clsx } from "../../utilities/clsx";

export const PageLead: FC<
  HTMLAttributes<HTMLElement> & { lead: PageProps["lead"] } & Omit<
      BoxProps,
      "title"
    >
> = ({
  className,
  lead: { actionOnClick, actionText, description, title },
  ...rest
}) => {
  const [css] = useStyletron();
  const theme = useTheme();

  return (
    <Box
      className={clsx(
        css({
          background: theme.color.lightestBlue,
          borderRadius: theme.borderRadius[2],
          color: theme.color.darkGray,
        }),
        className
      )}
      mb={4}
      pb={4}
      pl={4}
      pr={4}
      pt={4}
      {...rest}
    >
      <h1
        className={css({
          fontSize: theme.fontSize[1],
          fontWeight: theme.fontWeight[800],
          lineHeight: theme.lineHeight.title,
          marginBottom: theme.space[2],
          marginTop: 0,
        })}
      >
        {title}
      </h1>
      <p
        className={css({
          fontSize: theme.fontSize[3],
          lineHeight: theme.lineHeight.copy,
          marginBottom: theme.space[3],
          marginTop: 0,
        })}
      >
        {description}
      </p>
      <Button onClick={actionOnClick} size="large" variant="primary">
        {actionText}
      </Button>
    </Box>
  );
};
