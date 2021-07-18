import type { FC, HTMLAttributes } from "react";

import type { PageProps } from "../PageTypes";
import type { Theme } from "../../utilities/theme";
import { Box } from "../../Box/Box.emotion";
import { PageRow, PageRowItem } from "./PageRow.emotion";

export const PageHeader: FC<
  HTMLAttributes<HTMLElement> & { header: PageProps["header"] }
> = ({ header, ...rest }) => (
  <PageRow mb={4} {...rest}>
    <PageRowItem
      css={(theme: Theme) => ({
        width: "100%",

        [theme.breakpoint.md]: {
          width: "66.66%",
        },
        [theme.breakpoint.lg]: {
          width: "66.66%",
        },
      })}
    >
      <Box
        css={(theme: Theme) => ({
          borderBottom: `1px solid ${theme.color.silver}`,
          display: "flex",
        })}
        pb={1}
      >
        {header.map(({ count, label, status, value }, index) => (
          <Box pr={index < header.length - 1 ? 4 : undefined} key={index}>
            <div
              css={{
                display: "inline-block",
                position: "relative",
              }}
            >
              <span
                css={(theme: Theme) => ({
                  color:
                    (status === "success" && theme.color.green) ||
                    (status === "info" && theme.color.blue) ||
                    undefined,
                  fontSize: theme.fontSize[5],
                  fontWeight: theme.fontWeight[700],
                  lineHeight: theme.lineHeight.title,
                })}
              >
                {value}
              </span>
              {typeof count !== "undefined" && (
                <Box
                  as="span"
                  bg="yellow"
                  css={(theme: Theme) => ({
                    borderRadius: "100%",
                    display: "inline-block",
                    fontSize: theme.fontSize[7],
                    lineHeight: theme.lineHeight.solid,
                    position: "absolute",
                    right: "-1rem",
                    top: "-1rem",
                  })}
                  pa={1}
                >
                  {count}
                </Box>
              )}
            </div>
            <Box
              as="span"
              css={(theme: Theme) => ({
                display: "block",
                fontSize: theme.fontSize[7],
                lineHeight: theme.lineHeight.solid,
              })}
              textColor="gray"
            >
              {label}
            </Box>
          </Box>
        ))}
      </Box>
    </PageRowItem>
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
    >
      <form
        action="/search"
        css={{
          display: "flex",
        }}
        role="search"
      >
        <Box
          as="input"
          bg="nearWhite"
          aria-label="Search"
          css={(theme: Theme) => ({
            appearance: "none",
            border: `1px solid ${theme.color.silver}`,
            borderRadius: `${theme.borderRadius[2]} 0 0 ${theme.borderRadius[2]}`,
            flex: "1 1 auto",
            fontFamily: theme.fontFamily.sansSerif,
            fontSize: theme.fontSize[5],
            lineHeight: theme.lineHeight.solid,
            minWidth: 0,
          })}
          name="q"
          pa={2}
          placeholder="Lorem ipsum…"
          textColor="black"
        />
        <Box
          as="button"
          bg="gray"
          css={(theme: Theme) => ({
            border: "1px solid transparent",
            borderRadius: `0 ${theme.borderRadius[2]} ${theme.borderRadius[2]} 0`,
            cursor: "pointer",
            flex: "none",
            fontFamily: theme.fontFamily.sansSerif,
            fontSize: theme.fontSize[5],
            lineHeight: theme.lineHeight.solid,
          })}
          pa={2}
          type="submit"
          textColor="white"
        >
          Search
        </Box>
      </form>
    </PageRowItem>
  </PageRow>
);
