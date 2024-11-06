import React from "react"
import { Icon } from "@phosphor-icons/react"
import { tv } from "tailwind-variants"

const Button = ({
  size = "md",
  variant = "primary",
  theme = "primary",
  className = "",
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  onClick,
  children,
  ...props
}: ButtonProps) => {
  const button = tv({
    base: "flex items-center px-6 transition-all duration-300 ease-in-out hover:shadow-lg",
    variants: {
      size: {
        lg: "text-[18px] font-semibold leading-[56px] tracking-[-1%]",
        md: "text-[16px] font-semibold leading-[48px] tracking-[-0.8%]",
        sm: "text-[14px] font-semibold leading-[40px] tracking-[-0.4%]",
      },
      "variant-theme": {
        "primary-primary":
          "bg-primary-500 text-white hover:bg-primary-600 disabled:bg-primary-200",
        "primary-secondary":
          "bg-secondary-500 text-white hover:bg-secondary-600 disabled:bg-secondary-200",
        "primary-gray":
          "bg-grayScale-900 text-white hover:bg-grayScale-800 disabled:bg-grayScale-900",

        "secondary-primary":
          "bg-primary-100 text-primary-500 hover:bg-primary-200 hover:text-primary-600 disabled:text-primary-300",
        "secondary-secondary":
          "bg-secondary-100 text-secondary-500 hover:bg-secondary-200 hover:text-secondary-600 disabled:text-secondary-300",
        "secondary-gray":
          "bg-grayScale-50 text-grayScale-900 hover:bg-grayScale-100 hover:text-grayScale-800 disabled:text-grayScale-300",

        "tertiary-primary":
          "bg-white text-primary-500 hover:bg-primary-100 hover:text-primary-600 disabled:text-primary-300",
        "tertiary-secondary":
          "bg-white text-secondary-500 hover:bg-secondary-100 hover:text-secondary-600 disabled:text-secondary-300",
        "tertiary-gray":
          "hover:bg-primary-50 bg-white text-grayScale-900 hover:text-grayScale-900 disabled:text-grayScale-300",
      },
    },
    compoundVariants: [],
    defaultVariants: {
      size: "md",
      color: "primary",
    },
  })

  return (
    <button
      onClick={onClick}
      className={button({
        size,
        "variant-theme": `${variant}-${theme}`,
        className,
      })}
      {...props}
    >
      {LeftIcon && <LeftIcon className="mr-3" />}
      {children}
      {RightIcon && <RightIcon className="ml-3" />}
    </button>
  )
}

export default Button

export interface ButtonProps {
  size?: "sm" | "md" | "lg"
  variant?: "primary" | "secondary" | "tertiary"
  theme?: "primary" | "secondary" | "gray"
  className?: string
  leftIcon?: Icon
  rightIcon?: Icon
  onClick?: () => void
  children?: React.ReactNode

  [key: string]: any
}
