import type { FC, HTMLAttributes } from "react";

import type { PageProps } from "../PageTypes";
import { Button } from "../../Button/Button.emotion";
import { Theme } from "../../utilities/theme";

export const PageFooter: FC<
  HTMLAttributes<HTMLElement> & { footer: PageProps["footer"] }
> = ({
  footer: { actionOnClick, actionText, finePrint1, finePrint2, menus },
  ...rest
}) => (
  <div
    css={(theme: Theme) => ({
      borderTop: `1px solid ${theme.color.silver}`,
      color: theme.color.midGray,
      marginTop: theme.space[4],
      paddingBottom: theme.space[4],
      paddingTop: theme.space[3],
    })}
    {...rest}
  >
    <div
      css={(theme: Theme) => ({
        display: "flex",
        flexWrap: "wrap",
        marginBottom: theme.space[4],
        marginLeft: `calc(-1 * ${theme.space[2]})`,
        marginRight: `calc(-1 * ${theme.space[2]})`,
      })}
    >
      {menus.map(({ title, links }, index) => (
        <div
          css={(theme: Theme) => ({
            paddingLeft: theme.space[2],
            paddingRight: theme.space[2],
            width: "100%",

            [theme.breakpoint.md]: {
              width: "33.33%",
            },
            [theme.breakpoint.lg]: {
              width: "33.33%",
            },
          })}
          key={index}
        >
          <h3
            css={(theme: Theme) => ({
              fontSize: theme.fontSize[5],
              fontWeight: theme.fontWeight[700],
              lineHeight: theme.lineHeight.copy,
              marginBottom: theme.space[1],
              marginTop: 0,
            })}
          >
            {title}
          </h3>
          <ul
            css={(theme: Theme) => ({
              fontSize: theme.fontSize[6],
              lineHeight: theme.lineHeight.copy,
              listStyle: "none",
              margin: 0,
              padding: 0,
            })}
          >
            {links.map(({ name, url }) => (
              <li key={url}>
                <a
                  css={(theme: Theme) => ({
                    color: "inherit",
                    textDecoration: "underline",

                    "&:focus, &:hover": {
                      color: theme.color.blue,
                    },
                  })}
                  href={url}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <aside>
      <p
        css={(theme: Theme) => ({
          fontSize: theme.fontSize[6],
          lineHeight: theme.lineHeight.copy,
          marginBottom: theme.space[2],
          marginTop: 0,
        })}
      >
        {finePrint1}
      </p>
      <Button onClick={actionOnClick} size="small" variant="tertiary">
        {actionText}
      </Button>
      <small
        css={(theme: Theme) => ({
          borderTop: `1px solid ${theme.color.moonGray}`,
          color: theme.color.gray,
          display: "block",
          fontSize: theme.fontSize[7],
          lineHeight: theme.lineHeight.copy,
          marginTop: theme.space[3],
          paddingTop: theme.space[2],
        })}
      >
        {finePrint2}
      </small>
    </aside>
  </div>
);
