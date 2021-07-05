import type { AnchorHTMLAttributes, FC } from "react";
import { useRef } from "react";

import { Button } from "../Button/Button.inline";
import type {
  PageAdvertisementProps,
  PageProps,
  PageItemProps,
} from "./PageTypes";
import { Sidebar } from "../Sidebar/Sidebar.inline";
import {
  borderRadius1,
  borderRadius2,
  colorBlack,
  colorBlue,
  colorDarkGray,
  colorGray,
  colorGreen,
  colorLightestBlue,
  colorMidGray,
  colorMoonGray,
  colorNearWhite,
  colorOrange,
  colorSilver,
  colorWhite,
  colorYellow,
  fontSansSerif,
  fontSize1,
  fontSize3,
  fontSize4,
  fontSize5,
  fontSize6,
  fontSize7,
  lineHeightCopy,
  lineHeightSolid,
  lineHeightTitle,
  spaceExtraSmall,
  spaceLarge,
  spaceMedium,
  spaceSmall,
} from "../utilities/constants";
import { useBreakpoints } from "../utilities/useBreakpoints";
import { useFocus } from "../utilities/useFocus";
import { useHover } from "../utilities/useHover";

const PageAdvertisement: FC<PageAdvertisementProps> = ({
  actionText,
  description,
  imageAlt,
  imageSrc,
  style,
  title,
  ...rest
}) => {
  const { md, lg } = useBreakpoints();

  return (
    <aside
      style={{
        background: colorNearWhite,
        borderRadius: borderRadius2,
        padding: spaceMedium,
        ...style,
      }}
      {...rest}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginLeft: "-.5rem",
          marginRight: "-.5rem",
        }}
      >
        <div
          style={{
            paddingLeft: spaceSmall,
            paddingRight: spaceSmall,
            width: md || lg ? "66.66%" : "100%",
          }}
        >
          <img
            alt={imageAlt}
            src={imageSrc}
            style={{ display: "block", width: "100%" }}
          />
        </div>
        <div
          style={{
            paddingLeft: spaceSmall,
            paddingRight: spaceSmall,
            width: md || lg ? "33.33%" : "100%",
          }}
        >
          <h1
            style={{
              fontSize: fontSize4,
              lineHeight: lineHeightTitle,
              marginBottom: spaceSmall,
              marginTop: 0,
            }}
          >
            {title}
          </h1>
          <p
            style={{
              marginBottom: spaceMedium,
              marginTop: spaceSmall,
            }}
          >
            {description}
          </p>
          <Button size="medium" variant="primary">
            {actionText}
          </Button>
        </div>
      </div>
    </aside>
  );
};

const PageItemLink: FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  style,
  ...rest
}) => {
  const ref = useRef<HTMLAnchorElement>();
  const isFocused = useFocus(ref);
  const isHovered = useHover(ref);

  return (
    <a
      ref={ref}
      style={{
        display: "block",
        opacity: isFocused || isHovered ? ".8" : "1",
        transition: "opacity 0.15s ease-in",
        ...style,
      }}
      {...rest}
    />
  );
};

const PageItem: FC<PageItemProps> = ({
  description,
  fulfillment,
  imageAlt,
  imageSrc,
  price,
  title,
  ...rest
}) => (
  <article {...rest}>
    <PageItemLink href="#" style={{ marginBottom: spaceSmall }}>
      <img
        alt={imageAlt}
        src={imageSrc}
        style={{ display: "block", width: "100%" }}
      />
    </PageItemLink>
    <div style={{ marginBottom: spaceExtraSmall }}>
      <h2
        style={{
          display: "inline",
          fontSize: fontSize5,
          lineHeight: lineHeightCopy,
          margin: 0,
          paddingRight: spaceExtraSmall,
        }}
      >
        {title}
      </h2>
      <p
        style={{
          display: "inline",
          margin: 0,
          color: colorMidGray,
          fontSize: fontSize6,
        }}
      >
        {description}
      </p>
    </div>
    <span
      style={{
        color: colorOrange,
        display: "block",
        fontSize: fontSize4,
        marginBottom: spaceSmall,
      }}
    >
      {price}
    </span>
    <div style={{ marginBottom: spaceSmall }}>
      <Button size="medium">Lorem ipsum</Button>
    </div>
    {fulfillment && (
      <span style={{ color: colorMidGray, fontSize: fontSize6 }}>
        Get it by <span style={{ color: colorGreen }}>{fulfillment}</span>
      </span>
    )}
  </article>
);

const PageFooterLink: FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  style,
  ...rest
}) => {
  const ref = useRef<HTMLAnchorElement>();
  const isFocused = useFocus(ref);
  const isHovered = useHover(ref);

  return (
    <a
      ref={ref}
      style={{
        color: isFocused || isHovered ? colorBlue : "inherit",
        textDecoration: "underline",
        ...style,
      }}
      {...rest}
    />
  );
};

export const Page: FC<PageProps> = ({
  advertisements,
  footer,
  header,
  items,
  lead,
  sidebarProps: { style: sidebarPropsStyle, ...sidebarProps },
  style,
  ...rest
}) => {
  const { md, lg } = useBreakpoints();
  const itemsStart = items.slice(0, 12);
  const itemsMiddle = items.slice(12, 24);
  const itemsEnd = items.slice(24);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        height: lg ? "100vh" : "auto",
        overflowY: lg ? "hidden" : "auto",
        ...style,
      }}
      {...rest}
    >
      <a
        href="#main"
        style={{
          clip: "rect(1px, 1px, 1px, 1px)",
          position: "fixed",
        }}
      >
        Skip to main content
      </a>
      <header
        style={{
          width: lg ? "25%" : "100%",
        }}
      >
        <Sidebar
          style={{
            overflowY: lg ? "scroll" : "auto",
            height: lg ? "100vh" : "auto",
            ...sidebarPropsStyle,
          }}
          {...sidebarProps}
        />
      </header>
      <main
        style={{
          fontFamily: fontSansSerif,
          height: lg ? "100vh" : "auto",
          overflowY: lg ? "scroll" : "auto",
          padding: spaceLarge,
          width: lg ? "75%" : "100%",
        }}
        id="main"
      >
        {/* BEGIN Header */}

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginLeft: "-.5rem",
            marginRight: "-.5rem",
            marginBottom: spaceLarge,
          }}
        >
          <div
            style={{
              marginBottom: md || lg ? 0 : spaceMedium,
              paddingLeft: spaceSmall,
              paddingRight: spaceSmall,
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
                  <div
                    style={{ display: "inline-block", position: "relative" }}
                  >
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
          </div>
          <form
            action="/search"
            role="search"
            style={{
              display: "flex",
              paddingLeft: spaceSmall,
              paddingRight: spaceSmall,
              width: lg || md ? "33.33%" : "100%",
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
        </div>

        {/* END Header */}

        {/* BEGIN Lead */}

        <div
          style={{
            background: colorLightestBlue,
            borderRadius: borderRadius2,
            color: colorDarkGray,
            marginBottom: spaceLarge,
            padding: spaceLarge,
          }}
        >
          <h1
            style={{
              fontSize: fontSize1,
              fontWeight: 800,
              lineHeight: lineHeightTitle,
              marginBottom: spaceSmall,
              marginTop: 0,
            }}
          >
            {lead.title}
          </h1>
          <p
            style={{
              fontSize: fontSize3,
              lineHeight: lineHeightCopy,
              marginBottom: spaceMedium,
              marginTop: 0,
            }}
          >
            {lead.description}
          </p>
          <Button onClick={lead.actionOnClick} size="large" variant="primary">
            {lead.actionText}
          </Button>
        </div>

        {/* END Lead */}

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginBottom: spaceLarge,
            marginLeft: "-.5rem",
            marginRight: "-.5rem",
          }}
        >
          {itemsStart.map((item, index) => (
            <div
              key={index}
              style={{
                marginBottom: md || lg ? spaceLarge : spaceMedium,
                paddingLeft: spaceSmall,
                paddingRight: spaceSmall,
                width: lg ? "25%" : md ? "33.33%" : "100%",
              }}
            >
              <PageItem {...item} />
            </div>
          ))}
        </div>

        {advertisements[0] && (
          <PageAdvertisement
            style={{
              marginBottom: spaceLarge,
            }}
            {...advertisements[0]}
          />
        )}

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginBottom: spaceLarge,
            marginLeft: "-.5rem",
            marginRight: "-.5rem",
          }}
        >
          {itemsMiddle.map((item, index) => (
            <div
              key={index}
              style={{
                marginBottom: md || lg ? spaceLarge : spaceMedium,
                paddingLeft: spaceSmall,
                paddingRight: spaceSmall,
                width: lg ? "25%" : md ? "33.33%" : "100%",
              }}
            >
              <PageItem {...item} />
            </div>
          ))}
        </div>

        {advertisements[1] && (
          <PageAdvertisement
            style={{
              marginBottom: spaceLarge,
            }}
            {...advertisements[1]}
          />
        )}

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginBottom: spaceLarge,
            marginLeft: "-.5rem",
            marginRight: "-.5rem",
          }}
        >
          {itemsEnd.map((item, index) => (
            <div
              key={index}
              style={{
                marginBottom: md || lg ? spaceLarge : spaceMedium,
                paddingLeft: spaceSmall,
                paddingRight: spaceSmall,
                width: lg ? "25%" : md ? "33.33%" : "100%",
              }}
            >
              <PageItem {...item} />
            </div>
          ))}
        </div>

        {/* BEGIN Footer */}

        <div
          style={{
            borderTop: `1px solid ${colorSilver}`,
            color: colorMidGray,
            marginTop: spaceLarge,
            paddingBottom: spaceLarge,
            paddingTop: spaceMedium,
          }}
        >
          <div
            style={{
              display: "flex",
              marginBottom: spaceLarge,
              marginLeft: "-.5rem",
              marginRight: "-.5rem",
            }}
          >
            {footer.menus.map(({ title, links }, index) => (
              <div
                key={index}
                style={{
                  paddingLeft: spaceSmall,
                  paddingRight: spaceSmall,
                  width: md || lg ? "33.33%" : "100%",
                }}
              >
                <h3
                  style={{
                    fontWeight: "bold",
                    fontSize: fontSize5,
                    lineHeight: lineHeightCopy,
                    marginBottom: spaceExtraSmall,
                    marginTop: 0,
                  }}
                >
                  {title}
                </h3>
                <ul
                  style={{
                    fontSize: fontSize6,
                    lineHeight: lineHeightCopy,
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                  }}
                >
                  {links.map(({ name, url }) => (
                    <li key={url}>
                      <PageFooterLink href={url}>{name}</PageFooterLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <aside>
            <p
              style={{
                fontSize: fontSize6,
                lineHeight: lineHeightCopy,
                marginBottom: spaceSmall,
                marginTop: 0,
              }}
            >
              {footer.finePrint1}
            </p>
            <Button
              onClick={footer.actionOnClick}
              size="small"
              variant="tertiary"
            >
              {footer.actionText}
            </Button>
            <small
              style={{
                borderTop: `1px solid ${colorMoonGray}`,
                color: colorGray,
                display: "block",
                fontSize: fontSize7,
                lineHeight: lineHeightCopy,
                marginTop: spaceMedium,
                paddingTop: spaceSmall,
              }}
            >
              {footer.finePrint2}
            </small>
          </aside>
        </div>

        {/* END Footer */}
      </main>
    </div>
  );
};
