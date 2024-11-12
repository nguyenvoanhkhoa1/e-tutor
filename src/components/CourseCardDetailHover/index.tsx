import React from "react"
import Image from "next/image"
import {
  ChartBar,
  Check,
  Clock,
  ShoppingCartSimple,
  Star,
  User,
} from "@phosphor-icons/react"
import * as HoverCard from "@radix-ui/react-hover-card"

import "./styles.css"

import CategoryBadge, { CategoryBadgeType } from "../CategoryBadge"
import Button from "../ui/Button"
import Typography from "../ui/Typography"

const CourseCardDetailHover = ({
  thumbnail,
  title,
  categoryBadge,
}: CourseCardDetailHoverProps) => {
  return (
    <HoverCard.Root openDelay={200} closeDelay={200}>
      <HoverCard.Trigger asChild>
        <div>
          <Image
            src={thumbnail}
            alt={title}
            width={400}
            height={300}
            className="h-auto w-full"
          />
          <div className="border border-grayScale-100 bg-white">
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
                <Typography
                  variant="body-md-500"
                  className="text-grayScale-700"
                >
                  5.0
                </Typography>
              </div>
              <div className="flex items-center gap-1">
                <Typography
                  variant="body-md-500"
                  className="text-grayScale-700"
                >
                  265.7K
                </Typography>{" "}
                <Typography
                  variant="body-md-400"
                  className="text-grayScale-500"
                >
                  students
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content
          sideOffset={-50}
          side="right"
          className="HoverCardContent w-[424px]"
        >
          <div className="h-fit bg-white shadow-lg">
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
              <Typography variant="body-md-500" className="mt-2 line-clamp-1">
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
                  <Typography
                    variant="body-md-400"
                    className="text-grayScale-700"
                  >
                    Kevin Gilbert
                  </Typography>
                </div>
                <div className="flex items-center gap-1">
                  <Star weight="fill" size={16} className="fill-warning-500" />
                  <Typography
                    variant="body-md-500"
                    className="text-grayScale-700"
                  >
                    5.0
                  </Typography>
                  <Typography
                    variant="body-md-400"
                    className="text-grayScale-500"
                  >
                    (357,914)
                  </Typography>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between border-b border-grayScale-100 px-5 py-4">
              <div className="flex items-center gap-0.5">
                <User size={20} className="mr-1 fill-secondary-500" />
                <Typography
                  variant="body-md-500"
                  className="text-grayScale-700"
                >
                  265.7K
                </Typography>
                <Typography
                  variant="body-md-400"
                  className="text-grayScale-500"
                >
                  students
                </Typography>
              </div>
              <div className="flex items-center gap-1.5">
                <ChartBar size={20} className="fill-error-500" />
                <Typography
                  variant="body-md-400"
                  className="text-grayScale-700"
                >
                  Beginner
                </Typography>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={20} className="fill-success-500" />
                <Typography
                  variant="body-md-400"
                  className="text-grayScale-700"
                >
                  6 hour
                </Typography>
              </div>
            </div>
            <div className="flex flex-col gap-2 border-b border-grayScale-100 p-5">
              <Typography variant="label-md" className="text-grayScale-700">
                What you&apos;ll learn
              </Typography>
              <Typography variant="body-md-400" className="text-grayScale-500">
                <div className="list-disc pl-5">
                  <div className="flex gap-2">
                    <Check size={24} className="shrink-0 fill-success-500" />
                    <Typography
                      variant="body-md-400"
                      className="text-grayScale-600"
                    >
                      Learn to use Python professionally, learning both Python 2
                      and Python 3!
                    </Typography>
                  </div>
                  <div className="flex gap-2">
                    <Check size={24} className="shrink-0 fill-success-500" />
                    <Typography
                      variant="body-md-400"
                      className="text-grayScale-600"
                    >
                      Create games with Python, like Tic Tac Toe and Blackjack!
                    </Typography>
                  </div>
                  <div className="flex gap-2">
                    <Check size={24} className="shrink-0 fill-success-500" />
                    <Typography
                      variant="body-md-400"
                      className="text-grayScale-600"
                    >
                      Create games with Python, like Tic Tac Toe and Blackjack!
                    </Typography>
                  </div>
                </div>
              </Typography>
            </div>
            <div className="p-6 pb-10">
              <Button fullWidth leftIcon={ShoppingCartSimple}>
                Add to Cart
              </Button>
              <Button fullWidth variant="secondary" className="mt-3">
                Course Detail
              </Button>
            </div>
          </div>
          <HoverCard.Arrow className="fill-white shadow-lg" />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  )
}

export default CourseCardDetailHover

export interface CourseCardDetailHoverProps {
  thumbnail: string
  title: string
  categoryBadge: CategoryBadgeType
}
