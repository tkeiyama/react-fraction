import { render, screen } from "@testing-library/react"

import { StoryWrapper } from "../src"

describe("Storybook", () => {
  beforeEach(() => {
    render(
      <StoryWrapper type="controls">
        <div>foo</div>
        <div>bar</div>
        <div>baz</div>
      </StoryWrapper>,
    )
  })

  it("has children", () => {
    const story = screen.getByRole("presentation")
    const firstChild = story.firstChild
    const lastChild = story.lastChild

    expect(story).toBeTruthy()
    expect(firstChild).toBeTruthy()
    expect(lastChild).toBeTruthy()
  })
})
