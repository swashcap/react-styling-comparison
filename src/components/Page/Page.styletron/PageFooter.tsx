import type { FC, HTMLAttributes } from "react";
import { useStyletron } from "styletron-react";

import type { PageProps } from "../PageTypes";
import { Button } from "../../Button/Button.styletron";
import { PageRow, PageRowItem } from "./PageRow";
import { clsx } from "../../utilities/clsx";
import { useTheme } from "../../utilities/theme";
import { Box } from "../../Box/Box.styletron";

export const PageFooter: FC<
  HTMLAttributes<HTMLElement> & { footer: PageProps["footer"] }
> = ({
  className,
  footer: { actionOnClick, actionText, finePrint1, finePrint2, menus },
  ...rest
}) => {
  const [css] = useStyletron();
  const theme = useTheme();
  const { color, space } = theme;

  return (
    <Box
      className={clsx(
        css({
          borderTop: `1px solid ${color.silver}`,
        }),
        className
      )}
      mt={4}
      pb={4}
      pt={2}
      textColor="midGray"
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
            <Box
              as="h3"
              className={css({
                fontSize: theme.fontSize[5],
                fontWeight: theme.fontWeight[700],
                lineHeight: theme.lineHeight.copy,
              })}
              mb={1}
              mt={0}
            >
              {title}
            </Box>
            <Box
              as="ul"
              className={css({
                fontSize: theme.fontSize[6],
                lineHeight: theme.lineHeight.copy,
                listStyle: "none",
              })}
              ma={0}
              pa={0}
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
            </Box>
          </PageRowItem>
        ))}
      </PageRow>
      <aside>
        <Box
          as="p"
          className={css({
            fontSize: theme.fontSize[6],
            lineHeight: theme.lineHeight.copy,
          })}
          mb={2}
          mt={0}
        >
          {finePrint1}
        </Box>
        <Button onClick={actionOnClick} size="small" variant="tertiary">
          {actionText}
        </Button>
        <Box
          as="small"
          className={css({
            borderTop: `1px solid ${color.moonGray}`,
            color: color.gray,
            display: "block",
            fontSize: theme.fontSize[7],
            lineHeight: theme.lineHeight.copy,
          })}
          mt={3}
          pt={2}
          textColor="gray"
        >
          {finePrint2}
        </Box>
      </aside>
    </Box>
  );
};
