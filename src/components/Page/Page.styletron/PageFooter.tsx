import type { FC, HTMLAttributes } from "react";
import { useStyletron } from "styletron-react";

import type { PageProps } from "../PageTypes";
import { Box } from "../../utilities/Box";
import { Button } from "../../Button/Button.styletron";
import { PageRow, PageRowItem } from "./PageRow";
import { useTheme } from "../../utilities/theme";

export const PageFooter: FC<
  HTMLAttributes<HTMLElement> & { footer: PageProps["footer"] }
> = ({
  footer: { actionOnClick, actionText, finePrint1, finePrint2, menus },
  ...rest
}) => {
  const [css] = useStyletron();
  const theme = useTheme();
  const { color, space } = theme;

  return (
    <Box
      className={css({
        borderTop: `1px solid ${color.silver}`,
        color: color.midGray,
      })}
      mt={4}
      pb={4}
      pt={3}
      {...rest}
    >
      <PageRow mb={4}>
        {menus.map(({ title, links }, index) => (
          <PageRowItem
            className={css({
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
              className={css({
                fontSize: theme.fontSize[5],
                fontWeight: theme.fontWeight[700],
                lineHeight: theme.lineHeight.copy,
                marginBottom: space[1],
                marginTop: 0,
              })}
            >
              {title}
            </h3>
            <ul
              className={css({
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
                    className={css({
                      color: "inherit",
                      textDecoration: "underline",

                      ":focus": {
                        color: color.blue,
                      },
                      ":hover": {
                        color: color.blue,
                      },
                    })}
                    href={url}
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </PageRowItem>
        ))}
      </PageRow>
      <aside>
        <p
          className={css({
            fontSize: theme.fontSize[6],
            lineHeight: theme.lineHeight.copy,
            marginBottom: space[2],
            marginTop: 0,
          })}
        >
          {finePrint1}
        </p>
        <Button onClick={actionOnClick} size="small" variant="tertiary">
          {actionText}
        </Button>
        <small
          className={css({
            borderTop: `1px solid ${color.moonGray}`,
            color: color.gray,
            display: "block",
            fontSize: theme.fontSize[7],
            lineHeight: theme.lineHeight.copy,
            marginTop: space[3],
            paddingTop: space[2],
          })}
        >
          {finePrint2}
        </small>
      </aside>
    </Box>
  );
};
