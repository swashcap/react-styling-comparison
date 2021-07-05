import type { FC, HTMLAttributes } from "react";
import { useStyletron } from "styletron-react";

import type { PageProps } from "../PageTypes";
import { Sidebar } from "../../Sidebar/Sidebar.styletron";
import { clsx } from "../../utilities/clsx";
import { useTheme } from "../../utilities/theme";

export const PageSidebar: FC<
  HTMLAttributes<HTMLElement> & { sidebarProps: PageProps["sidebarProps"] }
> = ({
  className,
  sidebarProps: { className: sidebarClassName, ...sidebarRest },
  ...rest
}) => {
  const [css] = useStyletron();
  const { breakpoint } = useTheme();

  return (
    <header
      className={clsx(
        css({
          width: "100%",

          [breakpoint.lg]: {
            width: "25%",
          },
        }),
        className
      )}
      {...rest}
    >
      <Sidebar
        className={clsx(
          css({
            [breakpoint.lg]: {
              overflowY: "scroll",
              height: "100vh",
            },
          }),
          sidebarClassName
        )}
        {...sidebarRest}
      />
    </header>
  );
};
