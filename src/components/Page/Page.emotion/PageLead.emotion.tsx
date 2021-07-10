import type { FC, HTMLAttributes } from "react";

import type { PageProps } from "../PageTypes";
import { Button } from "../../Button/Button.emotion";
import { Theme } from "../../utilities/theme";

export const PageLead: FC<
  HTMLAttributes<HTMLElement> & { lead: PageProps["lead"] }
> = ({ lead: { actionOnClick, actionText, description, title }, ...rest }) => (
  <div
    css={(theme: Theme) => ({
      background: theme.color.lightestBlue,
      borderRadius: theme.borderRadius[2],
      color: theme.color.darkGray,
      marginBottom: theme.space[4],
      padding: theme.space[4],
    })}
    {...rest}
  >
    <h1
      css={(theme: Theme) => ({
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
      css={(theme: Theme) => ({
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
