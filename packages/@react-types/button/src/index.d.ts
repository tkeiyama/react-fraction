import { MouseEvent as ReactMouseEvent, ReactNode } from "react"

export interface ButtonProps {
  "aria-pressed"?: boolean
  /**
   * The HTML element of the Button.
   *
   * @default "button"
   */
  as?: "a" | "button"
  /**
   * The content of the Button.
   */
  children: ReactNode
  /**
   * Whether the Button is disabled.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * Handler that is called when the Button is clicked.
   */
  onClick?: (ev: ReactMouseEvent<HTMLElement, MouseEvent>) => void
  /**
   * The status of the Button.
   *
   * @default "normal"
   */
  status?: "normal" | "success" | "error"
  /**
   * The varient style of the Button.
   *
   * @default "contained"
   */
  variant?: "contained" | "outlined" | "text"
}
