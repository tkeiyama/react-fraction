import { classNames } from "@react-fraction/utils"
import { ButtonProps } from "@react-types/button"
import { createElement, memo, ReactElement } from "react"

export const Button = memo(
  ({
    as = "button",
    children,
    disabled = false,
    onClick,
    status = "normal",
    variant = "contained",
    ...props
  }: ButtonProps): ReactElement => {
    return createElement(
      as,
      {
        ...props,
        className: classNames(
          "border-2 border-transparent text-black dark:text-white py-1 px-4 rounded-full cursor-pointer",
          "hover:filter hover:brightness-110",
          "disabled:opacity-40 disabled:cursor-default disabled:filter-none disabled:brightness-100",
          {
            // status
            "bg-brand": status === "normal" && variant === "contained",
            "border-brand":
              status === "normal" &&
              (variant === "contained" || variant === "outlined"),
            "bg-status-green": status === "success" && variant === "contained",
            "border-status-green":
              status === "success" &&
              (variant === "contained" || variant === "outlined"),
            "bg-status-red": status === "error" && variant === "contained",
            "border-status-red":
              status === "error" &&
              (variant === "contained" || variant === "outlined"),
            // variant
            "text-white": variant === "contained",
            "hover:bg-glass": !disabled && variant === "text",
          },
        ),
        disabled,
        onClick,
        role: "button",
        type: "button",
      },
      children,
    )
  },
)
