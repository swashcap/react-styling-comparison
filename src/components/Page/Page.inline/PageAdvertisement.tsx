import type { FC, HTMLAttributes } from "react";

import type { PageAdvertisementProps } from "../PageTypes";
import { Button } from "../../Button/Button.inline";
import { useBreakpoints } from "../../utilities/useBreakpoints";
import {
  borderRadius2,
  colorNearWhite,
  fontSize4,
  lineHeightTitle,
  spaceMedium,
  spaceSmall,
} from "../../utilities/constants";

export const PageAdvertisement: FC<
  PageAdvertisementProps & Omit<HTMLAttributes<HTMLElement>, "title">
> = ({
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
            loading="lazy"
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
