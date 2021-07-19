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
                <Box
                  as="span"
                  className={css({
                    fontSize: theme.fontSize[5],
                    fontWeight: theme.fontWeight[700],
                    lineHeight: theme.lineHeight.title,
                  })}
                  textColor={
                    (status === "success" && "green") ||
                    (status === "info" && "blue") ||
                    undefined
                  }
                >
                  {value}
                </Box>
                {typeof count !== "undefined" && (
                  <Box
                    as="span"
                    bg="yellow"
                    className={css({
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
                className={css({
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
          <Box
            aria-label="Search"
            as="input"
            bg="nearWhite"
            className={css({
              border: `1px solid ${theme.color.silver}`,
              borderRadius: `${theme.borderRadius[2]} 0 0 ${theme.borderRadius[2]}`,
              color: theme.color.black,
              flex: "1 1 auto",
              fontFamily: theme.fontFamily.sansSerif,
              fontSize: theme.fontSize[5],
              lineHeight: theme.lineHeight.solid,
            })}
            name="q"
            pa={2}
            placeholder="Lorem ipsum…"
          />
          <Box
            as="button"
            bg="gray"
            className={css({
              border: "1px solid transparent",
              borderRadius: `0 ${theme.borderRadius[2]} ${theme.borderRadius[2]} 0`,
              cursor: "pointer",
              flex: "none",
              fontFamily: theme.fontFamily.sansSerif,
              fontSize: theme.fontSize[5],
              lineHeight: theme.lineHeight.solid,
            })}
            pa={2}
            textColor="white"
            type="submit"
          >
            Search
          </Box>
        </form>
      </PageRowItem>
    </PageRow>
  );
};
