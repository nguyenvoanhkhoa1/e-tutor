import React from "react"
import { tv } from "tailwind-variants"

import Typography from "../ui/Typography"

const badgeStyles = tv({
  base: "px-1.5 py-1",
  variants: {
    variant: {
      primary: "bg-primary-100 text-primary-700",
      secondary: "bg-secondary-100 text-secondary-700",
      tertiary: "bg-grayScale-50 text-grayScale-900",
      success: "bg-success-100 text-success-700",
      warning: "bg-warning-100 text-warning-800",
      error: "bg-error-100 text-error-700",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
})
const Badge = ({ text, variant, className }: BadgeProps) => {
  return (
    <div className={badgeStyles({ variant, className })}>
      <Typography variant="label-small">{text}</Typography>
    </div>
  )
}

export default Badge

export interface BadgeProps {
  text: string
  variant:
    | "primary"
    | "secondary"
    | "tertiary"
    | "success"
    | "warning"
    | "error"
  className?: string
}
