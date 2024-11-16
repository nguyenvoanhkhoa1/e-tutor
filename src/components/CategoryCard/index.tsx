import React from "react"
import { Icon } from "@phosphor-icons/react"
import { tv } from "tailwind-variants"

import Typography from "../ui/Typography"

const categoryCardStyles = tv({
  slots: {
    base: "group flex cursor-pointer flex-col items-center gap-5 p-5 transition-colors duration-300 ease-in-out hover:bg-white hover:drop-shadow-lg lg:flex-row",
    iconWrapper: "p-4 transition-colors duration-300 ease-in-out",
    icon: "transition-colors duration-300 ease-in-out",

    title: "font-semibold",
    description: "text-sm text-grayScale-600",
  },
  variants: {
    variant: {
      primary: {
        base: "bg-white",
        iconWrapper: "bg-primary-500",
        icon: "fill-white group-hover:fill-primary-500",
      },
      secondary: {
        base: "bg-secondary-100",
        iconWrapper: "bg-white group-hover:bg-secondary-500",
        icon: "fill-secondary-500 group-hover:fill-white",
      },
      tertiary: {
        base: "bg-grayScale-50",
        iconWrapper: "bg-white group-hover:bg-grayScale-500",
        icon: "fill-grayScale-500 group-hover:fill-white",
      },
      success: {
        base: "bg-success-100",
        iconWrapper: "bg-white group-hover:bg-success-500",
        icon: "fill-success-500 group-hover:fill-white",
      },
      warning: {
        base: "bg-warning-100",
        iconWrapper: "bg-white group-hover:bg-warning-500",
        icon: "fill-warning-500 group-hover:fill-white",
      },
      error: {
        base: "bg-error-100",
        iconWrapper: "bg-white group-hover:bg-error-500",
        icon: "fill-error-500 group-hover:fill-white",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
})

const CategoryCard = ({
  icon: CardIcon,
  title,
  description,
  variant,
}: CategoryCardProps) => {
  const {
    base,
    iconWrapper,
    icon,
    title: titleStyle,
    description: descriptionStyle,
  } = categoryCardStyles({ variant })

  return (
    <div className={base()}>
      <div className={iconWrapper()}>
        <CardIcon size={32} className={icon()} />
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
