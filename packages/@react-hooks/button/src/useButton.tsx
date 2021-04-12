import { ARIARole } from "@react-types/shared"
import { MouseEvent as ReactMouseEvent, useState } from "react"

export interface UseButtonProps {
  "aria-pressed"?: boolean
  disabled?: boolean
  onClick?: (ev: ReactMouseEvent<HTMLElement, MouseEvent>) => void
  role?: ARIARole
}

export interface GetRootPropsReturn extends UseButtonProps {}

export interface UseButtonReturn {
  getRootProps: () => GetRootPropsReturn
}

export function useButton({
  "aria-pressed": ariaPressed = false,
  disabled = false,
  onClick,
  role = "button",
}: UseButtonProps): UseButtonReturn {
  const [_ariaPressed, setAriaPressed] = useState(ariaPressed)

  const _onClick = (ev: ReactMouseEvent<HTMLElement, MouseEvent>): void => {
    setAriaPressed(true)
    onClick?.(ev)
  }

  const getRootProps = (): GetRootPropsReturn => {
    return {
      "aria-pressed": _ariaPressed,
      disabled,
      onClick: _onClick,
      role,
    }
  }

  return {
    getRootProps,
  }
}
