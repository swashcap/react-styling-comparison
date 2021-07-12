import type { FC, HTMLAttributes } from "react";
import { useStyletron } from "styletron-react";

import type { PageProps } from "../PageTypes";
import { Button } from "../../Button/Button.styletron";
import { useTheme } from "../../utilities/theme";
import { clsx } from "../../utilities/clsx";

export const PageLead: FC<
  HTMLAttributes<HTMLElement> & { lead: PageProps["lead"] }
> = ({
  className,
  lead: { actionOnClick, actionText, description, title },
  ...rest
}) => {
  const [css] = useStyletron();
  const theme = useTheme();

  return (
    <div
      className={clsx(
        css({
          background: theme.color.lightestBlue,
          borderRadius: theme.borderRadius[2],
          color: theme.color.darkGray,
          marginBottom: theme.space[4],
          padding: theme.space[4],
        }),
        className
      )}
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
    </div>
  );
};
