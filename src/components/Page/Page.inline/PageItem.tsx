import type { AnchorHTMLAttributes, FC } from "react";
import { useRef } from "react";

import type { PageItemProps } from "../PageTypes";
import { Button } from "../../Button/Button.inline";
import { useFocus } from "../../utilities/useFocus";
import { useHover } from "../../utilities/useHover";
import {
  colorGreen,
  colorMidGray,
  colorOrange,
  fontSize4,
  fontSize5,
  fontSize6,
  lineHeightCopy,
  spaceExtraSmall,
  spaceSmall,
} from "../../utilities/constants";

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

export const PageItem: FC<PageItemProps> = ({
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
