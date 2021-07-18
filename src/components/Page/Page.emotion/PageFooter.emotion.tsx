import type { FC, HTMLAttributes } from "react";

import type { PageProps } from "../PageTypes";
import type { Theme } from "../../utilities/theme";
import { Box } from "../../Box/Box.emotion";
import { Button } from "../../Button/Button.emotion";
import { PageRow, PageRowItem } from "./PageRow.emotion";

export const PageFooter: FC<
  HTMLAttributes<HTMLElement> & { footer: PageProps["footer"] }
> = ({
  footer: { actionOnClick, actionText, finePrint1, finePrint2, menus },
  ...rest
}) => (
  <Box
    css={(theme: Theme) => ({
      borderTop: `1px solid ${theme.color.silver}`,
    })}
    mt={4}
    pb={4}
    pt={3}
    textColor="midGray"
    {...rest}
  >
    <PageRow mb={4}>
      {menus.map(({ title, links }, index) => (
        <PageRowItem
          css={(theme: Theme) => ({
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
            css={(theme: Theme) => ({
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
            css={(theme: Theme) => ({
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
          </Box>
        </PageRowItem>
      ))}
    </PageRow>
    <aside>
      <Box
        as="p"
        css={(theme: Theme) => ({
          fontSize: theme.fontSize[6],
          lineHeight: theme.lineHeight.copy,
        })}
        mt={0}
        mb={2}
      >
        {finePrint1}
      </Box>
      <Button onClick={actionOnClick} size="small" variant="tertiary">
        {actionText}
      </Button>
      <Box
        as="small"
        css={(theme: Theme) => ({
          borderTop: `1px solid ${theme.color.moonGray}`,
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
