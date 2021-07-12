import type { FC, HTMLAttributes } from "react";

import type { PageProps } from "../PageTypes";
import { PageRow, PageRowItem } from "./PageRow";
import {
  borderRadius1,
  colorBlack,
  colorBlue,
  colorGray,
  colorGreen,
  colorNearWhite,
  colorSilver,
  colorWhite,
  colorYellow,
  fontSansSerif,
  fontSize5,
  fontSize7,
  lineHeightSolid,
  lineHeightTitle,
  spaceExtraSmall,
  spaceLarge,
  spaceMedium,
  spaceSmall,
} from "../../utilities/constants";
import { useBreakpoints } from "../../utilities/useBreakpoints";

export const PageHeader: FC<
  HTMLAttributes<HTMLElement> & { header: PageProps["header"] }
> = ({ header, style, ...rest }) => {
  const { md, lg } = useBreakpoints();

  return (
    <PageRow
      style={{
        marginBottom: spaceLarge,
        ...style,
      }}
      {...rest}
    >
      <PageRowItem
        style={{
          marginBottom: md || lg ? 0 : spaceMedium,
          width: md || lg ? "66.66%" : "100%",
        }}
      >
        <div
          style={{
            borderBottom: `1px solid ${colorSilver}`,
            display: "flex",
            paddingBottom: spaceExtraSmall,
          }}
        >
          {header.map(({ count, label, status, value }, index) => (
            <div
              style={
                index < header.length - 1
                  ? { paddingRight: spaceLarge }
                  : undefined
              }
              key={index}
            >
              <div style={{ display: "inline-block", position: "relative" }}>
                <span
                  style={{
                    color:
                      (status === "success" && colorGreen) ||
                      (status === "info" && colorBlue),
                    fontWeight: "bold",
                    fontSize: fontSize5,
                    lineHeight: lineHeightTitle,
                  }}
                >
                  {value}
                </span>

                {typeof count !== "undefined" && (
                  <span
                    style={{
                      background: colorYellow,
                      borderRadius: "100%",
                      display: "inline-block",
                      fontSize: fontSize7,
                      lineHeight: lineHeightSolid,
                      padding: spaceExtraSmall,
                      position: "absolute",
                      right: "-1rem",
                      top: "-1rem",
                    }}
                  >
                    {count}
                  </span>
                )}
              </div>
              <span
                style={{
                  color: colorGray,
                  display: "block",
                  fontSize: fontSize7,
                  lineHeight: lineHeightSolid,
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </PageRowItem>
      <PageRowItem
        style={{
          width: lg || md ? "33.33%" : "100%",
        }}
      >
        <form
          action="/search"
          role="search"
          style={{
            display: "flex",
          }}
        >
          <input
            aria-label="Search"
            name="q"
            placeholder="Lorem ipsum…"
            style={{
              background: colorNearWhite,
              border: `1px solid ${colorSilver}`,
              borderRadius: `${borderRadius1} 0 0 ${borderRadius1}`,
              color: colorBlack,
              flex: "1 1 auto",
              fontFamily: fontSansSerif,
              fontSize: fontSize5,
              lineHeight: lineHeightSolid,
              padding: spaceSmall,
            }}
          />
          <button
            style={{
              background: colorGray,
              border: "1px solid transparent",
              borderRadius: `0 ${borderRadius1} ${borderRadius1} 0`,
              color: colorWhite,
              cursor: "pointer",
              flex: "none",
              fontFamily: fontSansSerif,
              fontSize: fontSize5,
              lineHeight: lineHeightSolid,
              padding: spaceSmall,
            }}
            type="submit"
          >
            Search
          </button>
        </form>
      </PageRowItem>
    </PageRow>
  );
};
