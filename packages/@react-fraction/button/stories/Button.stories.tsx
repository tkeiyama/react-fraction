import { StoryWrapper } from "@react-fraction/private"
import { useButton } from "@react-hooks/button"
import { ComponentProps } from "react"

import { Meta, Story } from "../../../../types/storybook"
import { Button } from "../src"

export default {
  title: "@react-fraction",
  component: Button,
} as Meta

export const Stories: Story<ComponentProps<typeof Button>> = (props) => {
  const { getRootProps } = useButton({})

  return (
    <>
      <StoryWrapper type="controls">
        <Button {...props} />
      </StoryWrapper>
      <StoryWrapper type="hooks">
        <Button {...getRootProps()}>Hooks</Button>
      </StoryWrapper>
      <StoryWrapper type="demos">
        <Button>Normal</Button>
        <Button disabled>Disabled</Button>
        <Button status="success">Success</Button>
        <Button status="error">Error</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="text">Text</Button>
      </StoryWrapper>
    </>
  )
}

Stories.args = {
  children: "Button",
}
Stories.storyName = "Button"
