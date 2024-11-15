import React from "react"
import Image from "next/image"
import { ChartBar, Clock, Star, User } from "@phosphor-icons/react"

import CategoryBadge, { CategoryBadgeType } from "../CategoryBadge"
import Typography from "../ui/Typography"

const FeatureCourseCard = ({
  thumbnail,
  title,
  categoryBadge,
}: FeatureCourseCardProps) => {
  return (
    <div className="group flex cursor-pointer border border-grayScale-100 transition-all duration-300 ease-in-out hover:drop-shadow-md">
      <div className="h-auto w-[220px] shrink-0 overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          width={400}
          height={300}
          className="h-full w-auto object-cover transition-all duration-300 ease-in-out group-hover:scale-110"
        />
      </div>
      <div className="h-fit w-full bg-white">
        <div className="flex flex-col border-b border-grayScale-100 px-6 py-4">
          <div className="flex items-center justify-between">
            <CategoryBadge category={categoryBadge} />
            <div className="flex items-center gap-1">
              <Typography variant="body-lg-400">$14.00</Typography>
              <Typography
                variant="body-md-400"
                className="text-grayScale-400 line-through"
              >
                $26.00
              </Typography>
            </div>
          </div>
          <Typography
            variant="body-md-500"
            className="mt-2 line-clamp-1 transition-colors duration-300 ease-in-out group-hover:text-primary-500"
          >
            {title}
          </Typography>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src={"/assets/homepage/author-1.png"}
                alt={""}
                width={50}
                height={50}
                className="size-7 rounded-full"
              />
              <Typography variant="body-md-400" className="text-grayScale-700">
                Kevin Gilbert
              </Typography>
            </div>
            <div className="flex items-center gap-1">
              <Star weight="fill" size={16} className="fill-warning-500" />
              <Typography variant="body-md-500" className="text-grayScale-700">
                5.0
              </Typography>
              <Typography variant="body-md-400" className="text-grayScale-500">
                (357,914)
              </Typography>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between px-5 py-4">
          <div className="flex items-center gap-0.5">
            <User size={20} className="mr-1 fill-secondary-500" />
            <Typography variant="body-md-500" className="text-grayScale-700">
              265.7K
            </Typography>
            <Typography variant="body-md-400" className="text-grayScale-500">
              students
            </Typography>
          </div>
          <div className="flex items-center gap-1.5">
            <ChartBar size={20} className="fill-error-500" />
            <Typography variant="body-md-400" className="text-grayScale-700">
              Beginner
            </Typography>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={20} className="fill-success-500" />
            <Typography variant="body-md-400" className="text-grayScale-700">
              6 hour
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureCourseCard

export interface FeatureCourseCardProps {
  thumbnail: string
  title: string
  categoryBadge: CategoryBadgeType
}
