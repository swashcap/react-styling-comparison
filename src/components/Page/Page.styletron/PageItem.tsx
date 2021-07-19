import type { FC } from "react";
import { useStyletron } from "styletron-react";

import type { PageItemProps } from "../PageTypes";
import { Box } from "../../Box/Box.styletron";
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
      <Box
        as="a"
        className={css({
          display: "block",
          transition: "opacity .15s ease-in",

          ":focus": {
            opacity: ".8",
          },
          ":hover": {
            opacity: ".8",
          },
        })}
        href="#"
        mb={2}
      >
        <img
          alt={imageAlt}
          className={css({ display: "block", width: "100%" })}
          loading="lazy"
          src={imageSrc}
        />
      </Box>
      <Box mb={1}>
        <Box
          as="h2"
          className={css({
            display: "inline",
            fontSize: fontSize[5],
            lineHeight: theme.lineHeight.copy,
          })}
          ma={0}
          pr={1}
        >
          {title}
        </Box>
        <Box
          as="p"
          className={css({
            display: "inline",
            fontSize: fontSize[6],
          })}
          ma={0}
          textColor="midGray"
        >
          {description}
        </Box>
      </Box>
      <Box
        as="span"
        className={css({
          display: "block",
          fontSize: fontSize[4],
        })}
        mb={2}
        textColor="orange"
      >
        {price}
      </Box>
      <Box mb={2}>
        <Button size="medium">Lorem ipsum</Button>
      </Box>
      {fulfillment && (
        <Box
          as="span"
          className={css({
            fontSize: fontSize[6],
          })}
          textColor="midGray"
        >
          Get it by{" "}
          <Box as="span" textColor="green">
            {fulfillment}
          </Box>
        </Box>
      )}
    </article>
  );
};
