import type { FC, HTMLAttributes } from "react";

import type { PageProps } from "../PageTypes";
import { Sidebar } from "../../Sidebar/Sidebar.inline";
import { useBreakpoints } from "../../utilities/useBreakpoints";

export const PageSidebar: FC<
  HTMLAttributes<HTMLElement> & { sidebarProps: PageProps["sidebarProps"] }
> = ({
  sidebarProps: { style: sidebarStyle, ...sidebarRest },
  style,
  ...rest
}) => {
  const { lg } = useBreakpoints();

  return (
    <header
      style={{
        width: lg ? "25%" : "100%",
        ...style,
      }}
      {...rest}
    >
      <Sidebar
        style={{
          overflowY: lg ? "scroll" : undefined,
          height: lg ? "100vh" : undefined,
          ...sidebarStyle,
        }}
        {...sidebarRest}
      />
    </header>
  );
};
