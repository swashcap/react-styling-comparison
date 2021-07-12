import type { FC, HTMLAttributes } from "react";

import type { PageProps } from "../PageTypes";
import { Button } from "../../Button/Button.inline";
import {
  borderRadius2,
  colorDarkGray,
  colorLightestBlue,
  fontSize1,
  fontSize3,
  lineHeightCopy,
  lineHeightTitle,
  spaceLarge,
  spaceMedium,
  spaceSmall,
} from "../../utilities/constants";

export const PageLead: FC<
  HTMLAttributes<HTMLElement> & { lead: PageProps["lead"] }
> = ({
  lead: { actionOnClick, actionText, description, title },
  style,
  ...rest
}) => (
  <div
    style={{
      background: colorLightestBlue,
      borderRadius: borderRadius2,
      color: colorDarkGray,
      marginBottom: spaceLarge,
      padding: spaceLarge,
      ...style,
    }}
    {...rest}
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
      {title}
    </h1>
    <p
      style={{
        fontSize: fontSize3,
        lineHeight: lineHeightCopy,
        marginBottom: spaceMedium,
        marginTop: 0,
      }}
    >
      {description}
    </p>
    <Button onClick={actionOnClick} size="large" variant="primary">
      {actionText}
    </Button>
  </div>
);
