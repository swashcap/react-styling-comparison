import "../src/tachyons/tachyons.scss";
import { EmotionProvider } from "../src/components/utilities/EmotionProvider";
import { StyletronProvider } from "../src/components/utilities/StyletronProvider";
import { Client } from "styletron-engine-atomic";

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
      <EmotionProvider>
        <Story />
      </EmotionProvider>
    </StyletronProvider>
  ),
];
