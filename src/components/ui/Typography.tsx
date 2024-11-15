import React from "react"
import { tv } from "tailwind-variants"

const typography = tv({
  base: "text-grayScale-900",
  variants: {
    variant: {
      "display-01":
        "text-[80px] font-semibold leading-[80px] tracking-[-1.6px]",
      "display-02":
        "text-[65px] font-semibold leading-[67px] tracking-[-1.22px] 2xl:text-[72px] 2xl:leading-[74px] 2xl:tracking-[-1.44px]",
      "display-03":
        "text-[64px] font-semibold leading-[68px] tracking-[-1.28px]",

      "heading-01": "text-[48px] font-semibold leading-[52px] tracking-[-2%]",
      "heading-02": "text-[40px] font-semibold leading-[48px] tracking-[-1%]",
      "heading-03": "text-[32px] font-semibold leading-[40px] tracking-[-1%]",
      "heading-04": "text-[24px] font-semibold leading-[32px] tracking-[-1%]",

      "body-3xl-400": "text-[24px] font-normal leading-[32px]",
      "body-2xl-400": "text-[20px] font-normal leading-[32px]",
      "body-2xl-500": "text-[20px] font-medium leading-[26px]",
      "body-2xl-600": "text-[20px] font-semibold leading-[26px]",

      "body-xl-400": "text-[18px] font-normal leading-[24px]",
      "body-xl-500": "text-[18px] font-medium leading-[24px]",
      "body-xl-600": "text-[18px] font-semibold leading-[24px]",

      "body-lg-400": "text-[16px] font-normal leading-[24px]",
      "body-lg-500": "text-[16px] font-medium leading-[22px]",
      "body-lg-600": "text-[16px] font-semibold leading-[22px]",

      "body-md-400": "text-[14px] font-normal leading-[22px]",
      "body-md-500": "text-[14px] font-medium leading-[20px]",
      "body-md-600": "text-[14px] font-semibold leading-[20px]",

      "body-sm-400": "text-[12px] font-normal leading-[16px]",
      "body-sm-500": "text-[12px] font-medium leading-[16px]",
      "body-sm-600": "text-[12px] font-semibold leading-[16px]",

      "body-xs-400": "text-[10px] font-normal leading-[10px]",
      "body-xs-500": "text-[10px] font-medium leading-[10px]",
      "body-xs-600": "text-[10px] font-semibold leading-[10px]",

      "label-lg": "text-[14px] font-medium leading-[14px]",
      "label-md": "text-[12px] font-medium leading-[12px]",
      "label-sm": "text-[10px] font-medium leading-[12px]",
    },
  },
})
const Typography = ({
  tag: Tag = "div",
  variant = "body-md-400",
  className = "",
  children,
  ...props
}: TypographyProps) => {
  return (
    <Tag className={typography({ variant, className })} {...props}>
      {children}
    </Tag>
  )
}

export default Typography

export interface TypographyProps {
  tag?: keyof JSX.IntrinsicElements
  variant?: keyof typeof typography.variants.variant
  className?: string
  children?: React.ReactNode
}
