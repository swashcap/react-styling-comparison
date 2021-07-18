import type { FC, HTMLAttributes } from "react";
import { useStyletron } from "styletron-react";

import type { PageProps } from "../PageTypes";
import { Box } from "../../Box/Box.styletron";
import { PageRow, PageRowItem } from "./PageRow";
import { useTheme } from "../../utilities/theme";

export const PageHeader: FC<
  HTMLAttributes<HTMLElement> & { header: PageProps["header"] }
> = ({ header, ...rest }) => {
  const [css] = useStyletron();
  const theme = useTheme();

  return (
    <PageRow mb={4} {...rest}>
      <PageRowItem
        className={css({
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
          className={css({
            borderBottom: `1px solid ${theme.color.silver}`,
            display: "flex",
          })}
          pb={1}
        >
          {header.map(({ count, label, status, value }, index) => (
            <Box pr={index < header.length - 1 ? 4 : undefined} key={index}>
              <div
                className={css({
                  display: "inline-block",
                  position: "relative",
                })}
              >
                <span
                  className={css({
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
                  <span
                    className={css({
                      background: theme.color.yellow,
                      borderRadius: "100%",
                      display: "inline-block",
                      fontSize: theme.fontSize[7],
                      lineHeight: theme.lineHeight.solid,
                      padding: theme.space[1],
                      position: "absolute",
                      right: "-1rem",
                      top: "-1rem",
                    })}
                  >
                    {count}
                  </span>
                )}
              </div>
              <span
                className={css({
                  color: theme.color.gray,
                  display: "block",
                  fontSize: theme.fontSize[7],
                  lineHeight: theme.lineHeight.solid,
                })}
              >
                {label}
              </span>
            </Box>
          ))}
        </Box>
      </PageRowItem>
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
      >
        <form
          action="/search"
          className={css({ display: "flex" })}
          role="search"
        >
          <input
            aria-label="Search"
            className={css({
              background: theme.color.nearWhite,
              border: `1px solid ${theme.color.silver}`,
              borderRadius: `${theme.borderRadius[2]} 0 0 ${theme.borderRadius[2]}`,
              color: theme.color.black,
              flex: "1 1 auto",
              fontFamily: theme.fontFamily.sansSerif,
              fontSize: theme.fontSize[5],
              lineHeight: theme.lineHeight.solid,
              padding: theme.space[2],
            })}
            name="q"
            placeholder="Lorem ipsum…"
          />
          <button
            className={css({
              background: theme.color.gray,
              border: "1px solid transparent",
              borderRadius: `0 ${theme.borderRadius[2]} ${theme.borderRadius[2]} 0`,
              color: theme.color.white,
              cursor: "pointer",
              flex: "none",
              fontFamily: theme.fontFamily.sansSerif,
              fontSize: theme.fontSize[5],
              lineHeight: theme.lineHeight.solid,
              padding: theme.space[2],
            })}
            type="submit"
          >
            Search
          </button>
        </form>
      </PageRowItem>
    </PageRow>
  );
};
