import React from "react"
import Image from "next/image"
import { Star } from "@phosphor-icons/react"

import CategoryBadge, { CategoryBadgeType } from "../CategoryBadge"
import Typography from "../ui/Typography"

const CourseCard = ({ thumbnail, title, categoryBadge }: CourseCardProps) => {
  return (
    <div>
      <Image
        src={thumbnail}
        alt={title}
        width={400}
        height={300}
        className="h-auto w-full"
      />
      <div className="bg-white">
        <div className="flex flex-col gap-2.5 border-b border-grayScale-100 p-3.5">
          <div className="flex items-center justify-between">
            <CategoryBadge category={categoryBadge} />
            <Typography variant="body-lg-600" className="text-primary-500">
              $57
            </Typography>
          </div>
          <Typography variant="body-md-500" className="line-clamp-2">
            {title}
          </Typography>
        </div>
        <div className="flex items-center justify-between p-3.5">
          <div className="flex items-center gap-1">
            <Star weight="fill" size={16} className="fill-warning-500" />
            <Typography variant="body-md-500" className="text-gray-700">
              5.0
            </Typography>
          </div>
          <div className="flex items-center gap-1">
            <Typography variant="body-md-500" className="text-gray-700">
              265.7K
            </Typography>{" "}
            <Typography variant="body-md-400" className="text-gray-500">
              students
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseCard

export interface CourseCardProps {
  thumbnail: string
  title: string
  categoryBadge: CategoryBadgeType
}