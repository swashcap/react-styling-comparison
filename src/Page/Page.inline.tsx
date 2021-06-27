import { Button } from "../Button/Button.inline";
import { PageAdvertisementProps, PageProps, PageItemProps } from "./PageTypes";
import { Sidebar } from "../Sidebar/Sidebar.inline";
import {
  colorDarkGray,
  colorGreen,
  colorLightestBlue,
  colorMidGray,
  colorMoonGray,
  colorNearWhite,
  colorOrange,
  colorSilver,
  spaceExtraSmall,
  spaceSmall,
  spaceMedium,
  spaceLarge,
  colorGray,
} from "../utilities/constants";
import React from "react";

const PageAdvertisement: React.FC<PageAdvertisementProps> = ({
  actionText,
  description,
  imageAlt,
  imageSrc,
  style,
  title,
  ...rest
}) => (
  <aside
    style={{
      background: colorNearWhite,
      borderRadius: ".25rem",
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
          width: "66.66%",
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
          width: "33.33%",
        }}
      >
        <h1
          style={{
            fontSize: "1.25rem",
            lineHeight: "1.25",
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

const PageItem: React.FC<PageItemProps> = ({
  description,
  fulfillment,
  imageAlt,
  imageSrc,
  price,
  title,
  ...rest
}) => (
  <article {...rest}>
    <a href="#" style={{ display: "block", marginBottom: spaceSmall }}>
      <img
        alt={imageAlt}
        src={imageSrc}
        style={{ display: "block", width: "100%" }}
      />
    </a>
    <div style={{ marginBottom: spaceExtraSmall }}>
      <h2
        style={{
          display: "inline",
          fontSize: "1rem",
          lineHeight: 1.5,
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
          fontSize: ".875rem",
        }}
      >
        {description}
      </p>
    </div>
    <span
      style={{
        color: colorOrange,
        display: "block",
        fontSize: "1.25rem",
        marginBottom: spaceSmall,
      }}
    >
      {price}
    </span>
    <div style={{ marginBottom: spaceSmall }}>
      <Button size="medium">Lorem ipsum</Button>
    </div>
    {fulfillment && (
      <span style={{ color: colorMidGray, fontSize: ".875rem" }}>
        Get it by <span style={{ color: colorGreen }}>{fulfillment}</span>
      </span>
    )}
  </article>
);

export const Page: React.FC<PageProps> = ({
  advertisements,
  footer,
  items,
  lead,
  sidebarProps: { style: sidebarPropsStyle, ...sidebarProps },
  style,
  ...rest
}) => {
  const itemsStart = items.slice(0, 12);
  const itemsMiddle = items.slice(12, 24);
  const itemsEnd = items.slice(24);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        height: "100vh",
        overflowY: "hidden",
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
          width: "25%",
        }}
      >
        <Sidebar
          style={{
            overflowY: "scroll",
            height: "100vh",
            ...sidebarPropsStyle,
          }}
          {...sidebarProps}
        />
      </header>
      <main
        style={{
          fontFamily: "sans-serif",
          height: "100vh",
          overflowY: "scroll",
          padding: spaceLarge,
          width: "75%",
        }}
        id="main"
      >
        {/* BEGIN Lead */}

        <div
          style={{
            background: colorLightestBlue,
            borderRadius: ".25rem",
            color: colorDarkGray,
            marginBottom: spaceLarge,
            padding: spaceLarge,
          }}
        >
          <h1
            style={{
              fontWeight: 800,
              lineHeight: "1.25",
              marginBottom: spaceSmall,
              marginTop: 0,
            }}
          >
            {lead.title}
          </h1>
          <p
            style={{
              fontSize: "1.5rem",
              lineHeight: "1.5",
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
                marginBottom: spaceLarge,
                paddingLeft: spaceSmall,
                paddingRight: spaceSmall,
                width: "25%",
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
                marginBottom: spaceLarge,
                paddingLeft: spaceSmall,
                paddingRight: spaceSmall,
                width: "25%",
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
                marginBottom: spaceLarge,
                paddingLeft: spaceSmall,
                paddingRight: spaceSmall,
                width: "25%",
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
                  width: "33.33%",
                }}
              >
                <h3
                  style={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                    lineHeight: "1.5",
                    marginBottom: spaceExtraSmall,
                    marginTop: 0,
                  }}
                >
                  {title}
                </h3>
                <ul
                  style={{
                    fontSize: ".875rem",
                    lineHeight: "1.5",
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                  }}
                >
                  {links.map(({ name, url }) => (
                    <li key={url}>
                      <a
                        href={url}
                        style={{
                          color: "inherit",
                          textDecoration: "underline",
                        }}
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
              style={{
                fontSize: ".875rem",
                lineHeight: "1.5",
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
                fontSize: ".75rem",
                lineHeight: "1.5",
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
