import React from "react"
import { ArrowRight } from "@phosphor-icons/react"
import { tv } from "tailwind-variants"

import Typography from "../ui/Typography"

const simpleButtonStyles = tv({
  base: "flex items-center gap-2 py-1",
  variants: {
    variant: {
      primary: "text-primary-500",
      secondary: "text-secondary-500",
      tertiary: "text-grayScale-900",
      success: "text-success-500",
      warning: "text-warning-500",
      error: "text-error-500",
    },
  },
})

const iconColors = {
  primary: "#FF6636",
  secondary: "#564FFD",
  tertiary: "#1D2026",
  success: "#23BD33",
  warning: "#FD8E1F",
  error: "#E34444",
}

const SimpleButton = ({ text, variant = "primary" }: SimpleButtonProps) => {
  const iconColor = iconColors[variant]
  return (
    <button className={simpleButtonStyles({ variant })}>
      <Typography variant="body-md-500">{text}</Typography>
      <ArrowRight size={24} color={iconColor} />
    </button>
  )
}

export default SimpleButton

export interface SimpleButtonProps {
  text?: string
  variant:
    | "primary"
    | "secondary"
    | "tertiary"
    | "success"
    | "warning"
    | "error"
}
