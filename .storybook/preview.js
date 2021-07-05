import "../src/tachyons/tachyons.scss";
import { StyletronProvider } from "../src/utilities/StyletronProvider";
import { Client } from "styletron-engine-atomic"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

const client = new Client({
  prefix: "styletron_",
});

/**
 * Add StyletronProvider to all stories.
 *
 * @see {@link https://storybook.js.org/docs/riot/writing-stories/decorators#context-for-mocking}
 */
export const decorators = [
  (Story) => (
    <StyletronProvider value={client}>
      <Story />
    </StyletronProvider>
  ),
];
