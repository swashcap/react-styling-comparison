import { Story } from "@storybook/react";

import { Page as PageCSSModules } from "./Page.cssmodules";
import { Page as PageEmotion } from "./Page.emotion";
import { Page as PageInline } from "./Page.inline";
import { Page as PageStyletron } from "./Page.styletron";
import { Page as PageTachyons } from "./Page.tachyons";
import { PageProps } from "./PageTypes";
import args from "./args.json";

export default {
  args,
  title: "Page",
};

export const CSSModules: Story<PageProps> = (args) => (
  <PageCSSModules {...args} />
);

CSSModules.storyName = "CSS Modules";

export const Emotion: Story<PageProps> = (args) => <PageEmotion {...args} />;

export const InlineStyles: Story<PageProps> = (args) => (
  <PageInline {...args} />
);

export const Styletron: Story<PageProps> = (args) => (
  <PageStyletron {...args} />
);

export const Tachyons: Story<PageProps> = (args) => <PageTachyons {...args} />;
