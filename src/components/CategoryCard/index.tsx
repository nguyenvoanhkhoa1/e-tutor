import React from "react"
import { Icon } from "@phosphor-icons/react"
import { tv } from "tailwind-variants"

import Typography from "../ui/Typography"

const categoryCardStyles = tv({
  slots: {
    base: "flex items-center gap-5 p-5",
    iconWrapper: "p-4",

    title: "font-semibold",
    description: "text-sm text-gray-600",
  },
  variants: {
    variant: {
      primary: {
        base: "bg-white",
        iconWrapper: "bg-primary-500",
      },
      secondary: {
        base: "bg-secondary-100",
        iconWrapper: "bg-white",
      },
      tertiary: {
        base: "bg-grayScale-50",
        iconWrapper: "bg-white",
      },
      success: {
        base: "bg-success-100",
        iconWrapper: "bg-white",
      },
      warning: {
        base: "bg-warning-100",
        iconWrapper: "bg-white",
      },
      error: {
        base: "bg-error-100",
        iconWrapper: "bg-white",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
})

const iconColors = {
  primary: "white",
  secondary: "#564FFD",
  tertiary: "#1D2026",
  success: "#23BD33",
  warning: "#FD8E1F",
  error: "#E34444",
}

const CategoryCard = ({
  icon: CardIcon,
  title,
  description,
  variant,
}: CategoryCardProps) => {
  const {
    base,
    iconWrapper,
    title: titleStyle,
    description: descriptionStyle,
  } = categoryCardStyles({ variant })

  const iconColor = iconColors[variant]

  return (
    <div className={base()}>
      <div className={iconWrapper()}>
        <CardIcon size={32} color={iconColor} />
      </div>
      <div>
        <Typography variant="body-lg-500" className={titleStyle()}>
          {title}
        </Typography>
        <Typography variant="body-md-400" className={descriptionStyle()}>
          {description}
        </Typography>
      </div>
    </div>
  )
}

export default CategoryCard

export interface CategoryCardProps {
  icon: Icon
  title: string
  description: string
  variant:
    | "primary"
    | "secondary"
    | "tertiary"
    | "success"
    | "warning"
    | "error"
}
