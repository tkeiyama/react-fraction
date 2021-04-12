import { render, screen, userEvent } from "@react-fraction/private"

import { Button } from "../src"

describe("Button", () => {
  it("has children", () => {
    render(<Button>foo</Button>)
    const button = screen.getByRole("button")

    expect(button).toBeTruthy()
    expect(button).toHaveTextContent("foo")
  })

  it("fires onClick", () => {
    const onClick: jest.Mock = jest.fn()
    render(<Button onClick={onClick}>foo</Button>)
    const button = screen.getByRole("button")

    userEvent.click(button)

    expect(onClick).toBeCalled()
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it("looks the a tag", () => {
    render(<Button as="a">foo</Button>)
    const button = screen.getByRole("button")

    expect(button).toBeTruthy()
    expect(button.tagName).toBe("A")
  })

  it("looks disabled", () => {
    render(<Button disabled>foo</Button>)
    const button = screen.getByRole("button")
    expect(button).toBeTruthy()
  })

  it("looks normal", () => {
    const { rerender } = render(<Button status="normal">foo</Button>)
    let button = screen.getByRole("button")
    expect(button).toBeTruthy()

    rerender(
      <Button status="normal" variant="outlined">
        foo
      </Button>,
    )
    button = screen.getByRole("button")
    expect(button).toBeTruthy()
  })

  it("looks success", () => {
    const { rerender } = render(<Button status="success">foo</Button>)
    let button = screen.getByRole("button")
    expect(button).toBeTruthy()

    rerender(
      <Button status="success" variant="outlined">
        foo
      </Button>,
    )
    button = screen.getByRole("button")
    expect(button).toBeTruthy()
  })

  it("looks error", () => {
    const { rerender } = render(<Button status="error">foo</Button>)
    let button = screen.getByRole("button")
    expect(button).toBeTruthy()

    rerender(
      <Button status="error" variant="outlined">
        foo
      </Button>,
    )
    button = screen.getByRole("button")
    expect(button).toBeTruthy()
  })
})
