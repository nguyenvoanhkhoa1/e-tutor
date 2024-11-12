"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Bell,
  BugDroid,
  Camera,
  CaretDown,
  ChartBarHorizontal,
  Cpu,
  CreditCard,
  FirstAidKit,
  GraduationCap,
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
import CourseCardDetailHover from "@/components/CourseCardDetailHover"
import FeatureCourseCard, {
  FeatureCourseCardProps,
} from "@/components/FeatureCourseCard"
import InstructorCard, {
  InstructorCardProps,
} from "@/components/InstructorCard"
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

  const RECENTLY_ADDED_COURSES: CourseCardProps[] = [
    {
      thumbnail: "/assets/homepage/course-image-11.png",
      title: "The Python Mega Course: Build 10 Real World Applications",
      categoryBadge: CategoryBadgeType["Health & Fitness"],
    },
    {
      thumbnail: "/assets/homepage/course-image-5.png",
      title: "TFacebook Ads & Facebook Marketing MASTERY 2021",
      categoryBadge: CategoryBadgeType["IT & Software"],
    },
    {
      thumbnail: "/assets/homepage/course-image-12.png",
      title: "L2021 Complete Python Bootcamp From Zero to Hero in Python",
      categoryBadge: CategoryBadgeType.Developments,
    },
    {
      thumbnail: "/assets/homepage/course-image-13.png",
      title: "How to get Diamond in soloQ | League of Legends | Season 11",
      categoryBadge: CategoryBadgeType.Marketing,
    },
  ]

  const TOP_INSTRUCTORS: InstructorCardProps[] = [
    {
      avatar: "/assets/homepage/instructor-1.png",
      name: "Devon Lane",
      title: "Senior Developer",
      rating: "4.6",
      student: "854",
    },
    {
      avatar: "/assets/homepage/instructor-2.png",
      name: "Darrell Steward",
      title: "Digital Product Designer",
      rating: "4.9",
      student: "451,444",
    },
    {
      avatar: "/assets/homepage/instructor-3.png",
      name: "Jane Cooper",
      title: "UI/UX Designer",
      rating: "4.8",
      student: "435,671",
    },
    {
      avatar: "/assets/homepage/instructor-4.png",
      name: "Albert Flores",
      title: "Adobe Instructor",
      rating: "4.7",
      student: "511,123",
    },
    {
      avatar: "/assets/homepage/instructor-5.png",
      name: "Kathryn Murphy",
      title: "Lead Developer",
      rating: "4.2",
      student: "2,711",
    },
  ]

  const COMPANY_LOGOS = [
    {
      name: "netflix",
      width: 100,
      height: 27,
    },
    {
      name: "youtube",
      width: 100,
      height: 22,
    },
    {
      name: "google",
      width: 100,
      height: 33,
    },
    {
      name: "lenovo",
      width: 100,
      height: 21,
    },
    {
      name: "slack",
      width: 100,
      height: 25,
    },
    {
      name: "verizon",
      width: 100,
      height: 22,
    },
    {
      name: "lexmark",
      width: 100,
      height: 20,
    },
    {
      name: "microsoft",
      width: 100,
      height: 21,
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
        <div>
          <section className="section-container py-20">
            <Typography variant="heading-02" tag="h2" className="text-center">
              Recently added courses
            </Typography>
            <div className="mt-10 grid grid-cols-4 gap-6">
              {RECENTLY_ADDED_COURSES.map((course) => (
                <CourseCardDetailHover key={course.title} {...course} />
              ))}
            </div>
            <Button
              className="mx-auto mt-10"
              variant="secondary"
              rightIcon={ArrowRight}
            >
              Browse All Courses
            </Button>
          </section>
        </div>
        <div className="bg-grayScale-50">
          <section className="section-container grid grid-cols-2 gap-6 py-20">
            <div className="relative overflow-hidden bg-gradient-to-r from-primary-600 to-primary-500 p-10">
              <Typography variant="heading-03" tag="h3" className="text-white">
                Become an instructor
              </Typography>
              <Typography
                variant="body-md-400"
                className="mt-3 max-w-80 text-white"
              >
                Instructors from around the world teach millions of students on
                Udemy. We provide the tools and skills to teach what you love.
              </Typography>
              <Button
                variant="secondary"
                rightIcon={ArrowRight}
                className="mt-6"
              >
                Start teaching
              </Button>
              <Image
                src="/assets/homepage/instructor-bg.png"
                alt=""
                width={347}
                height={524}
                className="absolute right-[5%] top-0 h-auto w-56"
              />
            </div>
            <div className="bg-white p-10">
              <Typography variant="heading-03">
                Your teaching & earning steps
              </Typography>
              <div className="mt-6 grid grid-cols-2 gap-5">
                <div className="flex items-center gap-4">
                  <div className="flex size-[52px] items-center justify-center rounded-full bg-secondary-100 text-2xl font-semibold text-secondary-500">
                    1
                  </div>
                  <Typography variant="body-lg-400">
                    Apply to become instructor
                  </Typography>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex size-[52px] items-center justify-center rounded-full bg-primary-100 text-2xl font-semibold text-primary-500">
                    2
                  </div>
                  <Typography variant="body-lg-400">
                    Build & edit your profile
                  </Typography>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex size-[52px] items-center justify-center rounded-full bg-error-100 text-2xl font-semibold text-error-500">
                    3
                  </div>
                  <Typography variant="body-lg-400">
                    Create your new course
                  </Typography>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex size-[52px] items-center justify-center rounded-full bg-success-100 text-2xl font-semibold text-success-500">
                    4
                  </div>
                  <Typography variant="body-lg-400">
                    Start teaching & earning
                  </Typography>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div>
          <section className="section-container py-20">
            <Typography variant="heading-02" tag="h2" className="text-center">
              Top instructor of the month
            </Typography>
            <div className="mt-10 grid grid-cols-5 gap-6">
              {TOP_INSTRUCTORS.map((category) => (
                <InstructorCard key={category.title} {...category} />
              ))}
            </div>
            <div className="mt-10 flex items-center justify-center gap-3">
              <Typography>
                Thousands of students waiting for a instructor. Start teaching &
                earning now!.
              </Typography>
              <SimpleButton text="Become Instructor" variant="primary" />
            </div>
          </section>
        </div>
        <div>
          <section className="section-container grid grid-cols-6 gap-6 py-20">
            <div className="col-span-2 row-span-2 flex w-96 shrink-0 flex-col justify-center gap-6">
              <Typography variant="heading-03">
                6.3k trusted companies
              </Typography>
              <Typography variant="body-md-400" className="max-w-80">
                Nullam egestas tellus at enim ornare tristique. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra.
              </Typography>
            </div>
            {COMPANY_LOGOS.map((logo) => (
              <div
                key={logo.name}
                className="flex h-24 w-full items-center justify-center bg-white drop-shadow-md"
              >
                <Image
                  src={`/assets/homepage/${logo.name}.svg`}
                  alt={""}
                  width={logo.width}
                  height={logo.height}
                ></Image>
              </div>
            ))}
          </section>
        </div>
      </main>
      <footer>
        <div className="border-b border-grayScale-800/50 bg-grayScale-900">
          <section className="section-container grid grid-cols-6 gap-6 py-24">
            <div className="col-span-3">
              <Typography variant="heading-02" className="text-white">
                Start learning with 67.1k students around the world.
              </Typography>
              <div className="mt-8 flex gap-4">
                <Button>Join the Family</Button>
                <Button variant="primary" theme="gray" className="bg-white/5">
                  Browse all courses
                </Button>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-3">
              <Typography variant="heading-02" className="text-white">
                6.3k
              </Typography>
              <Typography variant="body-lg-500" className="text-grayScale-300">
                Online courses
              </Typography>
            </div>
            <div className="flex flex-col justify-center gap-3">
              <Typography variant="heading-02" className="text-white">
                26k
              </Typography>
              <Typography variant="body-lg-500" className="text-grayScale-300">
                Certified Instructor
              </Typography>
            </div>
            <div className="flex flex-col justify-center gap-3">
              <Typography variant="heading-02" className="text-white">
                99.9%
              </Typography>
              <Typography variant="body-lg-500" className="text-grayScale-300">
                Sucess Rate
              </Typography>
            </div>
          </section>
        </div>
        <div className="border-b border-grayScale-800/50 bg-grayScale-900">
          <section className="section-container grid grid-cols-6 gap-6 py-20">
            <div className="col-span-2">
              <Link href={"/"} className="flex items-center gap-2.5">
                <GraduationCap size={46} className="fill-primary-500" />
                <div className="text-[36.8px] font-semibold leading-[45.6px] tracking-[-0.8px] text-white">
                  E-tutor
                </div>
              </Link>
              <Typography
                variant="body-md-400"
                className="mt-5 text-grayScale-500"
              >
                Aliquam rhoncus ligula est, non pulvinar elit convallis nec.
                Donec mattis odio at.
              </Typography>
            </div>
          </section>
        </div>
      </footer>
    </>
  )
}
