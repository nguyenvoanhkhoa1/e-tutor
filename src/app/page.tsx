"use client"

import Image from "next/image"
import Link from "next/link"
import {
  Bell,
  BugDroid,
  Camera,
  CaretDown,
  ChartBarHorizontal,
  Cpu,
  CreditCard,
  FirstAidKit,
  Handshake,
  Headphones,
  Heart,
  MagnifyingGlass,
  MegaphoneSimple,
  Package,
  PenNib,
  Receipt,
  ShoppingCartSimple,
} from "@phosphor-icons/react"

import Button from "@/components/ui/Button"
import Typography from "@/components/ui/Typography"
import { CategoryBadgeType } from "@/components/CategoryBadge"
import CategoryCard, { CategoryCardProps } from "@/components/CategoryCard"
import CourseCard, { CourseCardProps } from "@/components/CourseCard"
import FeatureCourseCard, {
  FeatureCourseCardProps,
} from "@/components/FeatureCourseCard"
import SimpleButton from "@/components/SimpleButton"

export default function Home() {
  const TOP_BAR_LINKS = [
    {
      label: "Home",
      href: "#",
      isActive: true,
    },
    {
      label: "Courses",
      href: "#",
      isActive: false,
    },
    {
      label: "About",
      href: "#",
      isActive: false,
    },
    {
      label: "Contact",
      href: "#",
      isActive: false,
    },
    {
      label: "Become an Instructor",
      href: "#",
      isActive: false,
    },
  ]

  const TOP_CATEGORIES: CategoryCardProps[] = [
    {
      icon: Cpu,
      title: "Label",
      description: "63,476 Courses",
      variant: "secondary",
    },
    {
      icon: Handshake,
      title: "Business",
      description: "52,822 Courses",
      variant: "success",
    },
    {
      icon: CreditCard,
      title: "Finance & Accounting",
      description: "33,841 Courses",
      variant: "warning",
    },
    {
      icon: ChartBarHorizontal,
      title: "IT & Software",
      description: "22,649 Courses",
      variant: "error",
    },
    {
      icon: BugDroid,
      title: "Personal Development",
      description: "20,126 Courses",
      variant: "primary",
    },
    {
      icon: Receipt,
      title: "Office Productivity",
      description: "13,932 Courses",
      variant: "tertiary",
    },
    {
      icon: MegaphoneSimple,
      title: "Marketing",
      description: "12,068 Courses",
      variant: "secondary",
    },
    {
      icon: Camera,
      title: "Photography & Video",
      description: "6,196 Courses",
      variant: "tertiary",
    },
    {
      icon: Package,
      title: "Lifestyle",
      description: "2,736 Courses",
      variant: "warning",
    },
    {
      icon: PenNib,
      title: "Design",
      description: "2,600 Courses",
      variant: "error",
    },
    {
      icon: FirstAidKit,
      title: "Health & Fitness",
      description: "1,678 Courses",
      variant: "success",
    },
    {
      icon: Headphones,
      title: "Music",
      description: "959 Courses",
      variant: "warning",
    },
  ]

  const BEST_SELLING_COURSES: CourseCardProps[] = [
    {
      thumbnail: "/assets/homepage/course-image-1.png",
      title: "Machine Learning A-Z™: Hands-On Python & R In Data Science",
      categoryBadge: CategoryBadgeType.Design,
    },
    {
      thumbnail: "/assets/homepage/course-image-2.png",
      title: "The Complete 2021 Web Development Bootcamp",
      categoryBadge: CategoryBadgeType.Developments,
    },
    {
      thumbnail: "/assets/homepage/course-image-3.png",
      title: "Learn Python Programming Masterclass",
      categoryBadge: CategoryBadgeType.Business,
    },
    {
      thumbnail: "/assets/homepage/course-image-4.png",
      title: "The Complete Digital Marketing Course - 12 Courses in 1",
      categoryBadge: CategoryBadgeType.Marketing,
    },
    {
      thumbnail: "/assets/homepage/course-image-5.png",
      title: "Reiki Level I, II and Master/Teacher Program",
      categoryBadge: CategoryBadgeType["IT & Software"],
    },
    {
      thumbnail: "/assets/homepage/course-image-6.png",
      title: "The Complete Foundation Stock Trading Course",
      categoryBadge: CategoryBadgeType.Music,
    },
    {
      thumbnail: "/assets/homepage/course-image-7.png",
      title: "Beginner to Pro in Excel: Financial Modeling and Valuation",
      categoryBadge: CategoryBadgeType.Marketing,
    },
    {
      thumbnail: "/assets/homepage/course-image-8.png",
      title: "The Python Mega Course: Build 10 Real World Applications",
      categoryBadge: CategoryBadgeType["Health & Fitness"],
    },
    {
      thumbnail: "/assets/homepage/course-image-9.png",
      title: "Copywriting - Become a Freelance Copywriter, your ow...",
      categoryBadge: CategoryBadgeType.Design,
    },
    {
      thumbnail: "/assets/homepage/course-image-10.png",
      title: "Google Analytics Certification - Learn How To Pass The Exam",
      categoryBadge: CategoryBadgeType.Lifestyle,
    },
  ]

  const FEATURE_COURSES: FeatureCourseCardProps[] = [
    {
      thumbnail: "/assets/homepage/course-image-4.png",
      title: "Investing In Stocks The Complete Course! (17+ Hours)",
      categoryBadge: CategoryBadgeType["Health & Fitness"],
    },
    {
      thumbnail: "/assets/homepage/course-image-5.png",
      title: "Google Analytics Certification | Prepare for Certification",
      categoryBadge: CategoryBadgeType["Personal Development"],
    },
    {
      thumbnail: "/assets/homepage/course-image-9.png",
      title: "Adobe XD for Web Design: Essential Principles",
      categoryBadge: CategoryBadgeType.Productivity,
    },
    {
      thumbnail: "/assets/homepage/course-image-7.png",
      title: "Python Mega Course: Learn Python in 60 Days, Build 20 Apps",
      categoryBadge: CategoryBadgeType.Music,
    },
  ]

  return (
    <>
      <div
        id="#top-bar"
        className="flex items-center justify-between bg-grayScale-900 px-8"
      >
        <nav className="flex gap-2">
          {TOP_BAR_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`body-md-500 p-4 ${
                link.isActive
                  ? "text-white"
                  : "text-grayScale-500 hover:text-grayScale-300"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex gap-6">
          <div className="body-md-400 flex items-center gap-1.5 text-grayScale-400">
            USD
            <CaretDown size={12} className="fill-grayScale-400" />
          </div>
          <div className="body-md-400 flex items-center gap-1.5 text-grayScale-400">
            English
            <CaretDown size={12} className="fill-grayScale-400" />
          </div>
        </div>
      </div>
      <header className="flex items-center justify-between px-8 py-6">
        <div className="flex items-center">
          <Link href={"/"} className="h-fit">
            <Image src={"/assets/logo.svg"} alt={""} width={153} height={40} />
          </Link>
          <div className="body-lg-400 ms-[50px] flex w-[200px] items-center justify-between border border-grayScale-100 px-4.5 py-3 text-grayScale-700">
            Browse
            <CaretDown size={16} className="fill-grayScale-700" />
          </div>
          <div className="relative ml-4 bg-red-300">
            <MagnifyingGlass
              size={24}
              className="absolute left-4.5 top-1/2 -translate-y-1/2"
            />
            <input
              type="text"
              className="body-lg-400 flex w-96 items-center justify-between border border-grayScale-100 px-4.5 py-3 ps-14 text-grayScale-700 placeholder:text-grayScale-500 focus-within:outline-none"
              placeholder="What do you want learn..."
            />
          </div>
        </div>
        <div className="flex items-center">
          <Bell size={24} />
          <Heart size={24} className="ml-6" />
          <ShoppingCartSimple size={24} className="ml-6" />
          <Button variant="secondary" theme="primary" className="ml-6">
            Create Account
          </Button>
          <Button className="ml-3">Sign In</Button>
        </div>
      </header>
      <main>
        <div className="relative bg-[#F0F2F5]">
          <section className="section-container">
            <div className="flex w-1/2 flex-col items-start gap-10 py-24">
              <Typography variant="display-02" tag="h1">
                Learn with expert anytime anywhere
              </Typography>
              <Typography variant="body-3xl-400" tag="p">
                Our mision is to help people to find the best course online and
                learn with expert anytime, anywhere.
              </Typography>
              <Button size="lg">Create Account</Button>
            </div>
            <Image
              src={"/assets/homepage/hero-image.png"}
              alt={""}
              width={900}
              height={544}
              className="absolute right-0 top-0 h-full w-auto"
            />
          </section>
        </div>
        <div>
          <section className="section-container py-20">
            <Typography variant="heading-02" tag="h2" className="text-center">
              Browse top category
            </Typography>
            <div className="mt-10 grid grid-cols-4 gap-6">
              {TOP_CATEGORIES.map((category) => (
                <CategoryCard key={category.title} {...category} />
              ))}
            </div>
            <div className="mt-10 flex items-center justify-center gap-3">
              <Typography>We have more category & subcategory.</Typography>
              <SimpleButton text="Browse All" variant="primary" />
            </div>
          </section>
        </div>
        <div className="bg-grayScale-50">
          <section className="section-container py-20">
            <Typography variant="heading-02" tag="h2" className="text-center">
              Best selling courses
            </Typography>
            <div className="mt-10 grid grid-cols-5 gap-6">
              {BEST_SELLING_COURSES.map((course) => (
                <CourseCard key={course.title} {...course} />
              ))}
            </div>
          </section>
        </div>
        <div>
          <section className="section-container py-20">
            <div className="flex items-center justify-between">
              <Typography variant="heading-02" tag="h2">
                Our feature courses
              </Typography>
              <Typography variant="body-md-400" className="w-96">
                Our mision is to help people to find the best course online and
                learn with expert anytime, anywhere.
              </Typography>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-6">
              {FEATURE_COURSES.map((course) => (
                <FeatureCourseCard key={course.title} {...course} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <footer></footer>
    </>
  )
}
