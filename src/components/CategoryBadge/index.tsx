import React from "react"

import Badge, { BadgeProps } from "../Badge"

// Mapping each category to a variant
export enum CategoryBadgeType {
  Design = "Design",
  Developments = "Developments",
  Business = "Business",
  Marketing = "Marketing",
  "IT & Software" = "IT & Software",
  Music = "Music",
  "Health & Fitness" = "Health & Fitness",
  Lifestyle = "Lifestyle",
  "Personal Development" = "Personal Development",
  Productivity = "Productivity",
}

const categoryVariantMap: Record<CategoryBadgeType, BadgeProps["variant"]> = {
  [CategoryBadgeType.Design]: "primary",
  [CategoryBadgeType.Developments]: "secondary",
  [CategoryBadgeType.Business]: "success",
  [CategoryBadgeType.Marketing]: "secondary",
  [CategoryBadgeType["IT & Software"]]: "error",
  [CategoryBadgeType.Music]: "warning",
  [CategoryBadgeType["Health & Fitness"]]: "success",
  [CategoryBadgeType.Lifestyle]: "warning",
  [CategoryBadgeType["Personal Development"]]: "primary",
  [CategoryBadgeType.Productivity]: "tertiary",
}

// Component that uses the mapping
const CategoryBadge = ({ category }: { category: CategoryBadgeType }) => {
  const variant = categoryVariantMap[category]
  return <Badge text={category} variant={variant} />
}

export default CategoryBadge
