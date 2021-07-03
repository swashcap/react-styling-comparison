import "../src/tachyons/tachyons.scss";
import { StyletronProvider } from "../src/utilities/StyletronProvider";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

/**
 * Add StyletronProvider to all stories.
 *
 * @see {@link https://storybook.js.org/docs/riot/writing-stories/decorators#context-for-mocking}
 */
export const decorators = [
  (Story) => (
    <StyletronProvider>
      <Story />
    </StyletronProvider>
  ),
];
