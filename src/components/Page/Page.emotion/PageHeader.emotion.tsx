import type { FC, HTMLAttributes } from "react";
import { Theme } from "../../utilities/theme";

import type { PageProps } from "../PageTypes";

export const PageHeader: FC<
  HTMLAttributes<HTMLElement> & { header: PageProps["header"] }
> = ({ header, ...rest }) => (
  <div
    css={(theme: Theme) => ({
      display: "flex",
      flexWrap: "wrap",
      marginBottom: theme.space[4],
      marginLeft: `calc(-1 * ${theme.space[2]})`,
      marginRight: `calc(-1 * ${theme.space[2]})`,
    })}
    {...rest}
  >
    <div
      css={(theme: Theme) => ({
        paddingLeft: theme.space[2],
        paddingRight: theme.space[2],
        width: "100%",

        [theme.breakpoint.md]: {
          width: "66.66%",
        },
        [theme.breakpoint.lg]: {
          width: "66.66%",
        },
      })}
    >
      <div
        css={(theme: Theme) => ({
          borderBottom: `1px solid ${theme.color.silver}`,
          display: "flex",
          paddingBottom: theme.space[1],
        })}
      >
        {header.map(({ count, label, status, value }, index) => (
          <div
            css={(theme: Theme) => ({
              paddingRight:
                index < header.length - 1 ? theme.space[4] : undefined,
            })}
            key={index}
          >
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
                <span
                  css={(theme: Theme) => ({
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
              css={(theme: Theme) => ({
                color: theme.color.gray,
                display: "block",
                fontSize: theme.fontSize[7],
                lineHeight: theme.lineHeight.solid,
              })}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
    <form
      action="/search"
      css={(theme: Theme) => ({
        display: "flex",
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
      role="search"
    >
      <input
        aria-label="Search"
        css={(theme: Theme) => ({
          appearance: "none",
          background: theme.color.nearWhite,
          border: `1px solid ${theme.color.silver}`,
          borderRadius: `${theme.borderRadius[2]} 0 0 ${theme.borderRadius[2]}`,
          color: theme.color.black,
          flex: "1 1 auto",
          fontFamily: theme.fontFamily.sansSerif,
          fontSize: theme.fontSize[5],
          lineHeight: theme.lineHeight.solid,
          minWidth: 0,
          padding: theme.space[2],
        })}
        name="q"
        placeholder="Lorem ipsum…"
      />
      <button
        css={(theme: Theme) => ({
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
  </div>
);
