import type { AnchorHTMLAttributes, FC, HTMLAttributes } from "react";
import { useRef } from "react";

import type { PageProps } from "../PageTypes";
import { Button } from "../../Button/Button.inline";
import { useBreakpoints } from "../../utilities/useBreakpoints";
import { useFocus } from "../../utilities/useFocus";
import { useHover } from "../../utilities/useHover";
import {
  colorBlue,
  colorSilver,
  colorMidGray,
  spaceLarge,
  spaceMedium,
  spaceSmall,
  fontSize5,
  spaceExtraSmall,
  colorGray,
  colorMoonGray,
  fontSize7,
  fontSize6,
  lineHeightCopy,
} from "../../utilities/constants";

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

export const PageFooter: FC<
  HTMLAttributes<HTMLDivElement> & { footer: PageProps["footer"] }
> = ({ footer, style, ...rest }) => {
  const { md, lg } = useBreakpoints();

  return (
    <div
      style={{
        borderTop: `1px solid ${colorSilver}`,
        color: colorMidGray,
        marginTop: spaceLarge,
        paddingBottom: spaceLarge,
        paddingTop: spaceMedium,
        ...style,
      }}
      {...rest}
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
        <Button onClick={footer.actionOnClick} size="small" variant="tertiary">
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
  );
};
