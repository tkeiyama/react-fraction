require("../styles/global.css");
import { StoryGlobalWrapper } from "./StoryGlobalWrapper";

export const parameters = {
  actions: {
    argTypesRegex: "^on[A-Z].*",
  },
  layout: "fullscreen",
};

export const decorators = [
  (Story) => (
    <StoryGlobalWrapper>
      <Story />
    </StoryGlobalWrapper>
  ),
];
