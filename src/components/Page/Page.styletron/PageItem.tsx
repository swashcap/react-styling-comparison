import type { FC } from "react";
import { useStyletron } from "styletron-react";

import type { PageItemProps } from "../PageTypes";
import { Box } from "../../utilities/Box";
import { Button } from "../../Button/Button.styletron";
import { useTheme } from "../../utilities/theme";

export const PageItem: FC<PageItemProps> = ({
  description,
  fulfillment,
  imageAlt,
  imageSrc,
  price,
  title,
  ...rest
}) => {
  const [css] = useStyletron();
  const theme = useTheme();
  const { color, fontSize, space } = theme;

  return (
    <article {...rest}>
      <a
        className={css({
          display: "block",
          marginBottom: space[2],
          transition: "opacity .15s ease-in",

          ":focus": {
            opacity: ".8",
          },
          ":hover": {
            opacity: ".8",
          },
        })}
        href="#"
      >
        <img
          alt={imageAlt}
          className={css({ display: "block", width: "100%" })}
          loading="lazy"
          src={imageSrc}
        />
      </a>
      <Box mb={1}>
        <h2
          className={css({
            display: "inline",
            fontSize: fontSize[5],
            lineHeight: theme.lineHeight.copy,
            margin: 0,
            paddingRight: space[1],
          })}
        >
          {title}
        </h2>
        <p
          className={css({
            color: color.midGray,
            display: "inline",
            fontSize: fontSize[6],
            margin: 0,
          })}
        >
          {description}
        </p>
      </Box>
      <span
        className={css({
          color: color.orange,
          display: "block",
          fontSize: fontSize[4],
          marginBottom: space[2],
        })}
      >
        {price}
      </span>
      <Box mb={2}>
        <Button size="medium">Lorem ipsum</Button>
      </Box>
      {fulfillment && (
        <span
          className={css({
            color: color.midGray,
            fontSize: fontSize[6],
          })}
        >
          Get it by{" "}
          <span className={css({ color: theme.color.green })}>
            {fulfillment}
          </span>
        </span>
      )}
    </article>
  );
};
