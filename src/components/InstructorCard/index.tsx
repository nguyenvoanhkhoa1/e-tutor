import React from "react"
import Image from "next/image"
import { Star } from "@phosphor-icons/react"

import Typography from "../ui/Typography"

const InstructorCard = ({
  avatar,
  name,
  title,
  rating,
  student,
}: InstructorCardProps) => {
  return (
    <div>
      <Image
        src={avatar}
        alt={title}
        width={400}
        height={300}
        className="h-auto w-full"
      />
      <div className="border border-t-0 border-grayScale-100 bg-white">
        <div className="flex flex-col gap-1 border-b border-grayScale-100 px-4 py-3 text-center">
          <Typography variant="body-lg-500">{name}</Typography>
          <Typography variant="body-md-400" className="text-grayScale-500">
            {title}
          </Typography>
        </div>
        <div className="flex items-center justify-between p-3.5">
          <div className="flex items-center gap-1">
            <Star weight="fill" size={16} className="fill-warning-500" />
            <Typography variant="body-md-500" className="text-grayScale-700">
              {rating}
            </Typography>
          </div>
          <div className="flex items-center gap-1">
            <Typography variant="body-md-500" className="text-grayScale-700">
              {student}
            </Typography>{" "}
            <Typography variant="body-md-400" className="text-grayScale-500">
              students
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstructorCard

export interface InstructorCardProps {
  avatar: string
  name: string
  title: string
  rating: string
  student: string
}