"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import AppleIcon from "@/assets/icons/AppleIcon"
import FacebookIcon from "@/assets/icons/FacebookIcon"
import GooglePlayIcon from "@/assets/icons/GooglePlayIcon"
import InstagramIcon from "@/assets/icons/InstagramIcon"
import LinkedinIcon from "@/assets/icons/LinkedinIcon"
import TwitterIcon from "@/assets/icons/TwitterIcon"
import YoutubeIcon from "@/assets/icons/YoutubeIcon"
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
  List,
  MagnifyingGlass,
  MegaphoneSimple,
  Package,
  PenNib,
  Receipt,
  ShoppingCartSimple,
  X,
} from "@phosphor-icons/react"
import CountUp from "react-countup"
import { useMedia } from "react-use"

import useScrollStatus from "@/hooks/useScrollStatus"
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
      variant: "success",
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

  const FOOTER_LINKS = [
    {
      title: "Top 4 Category",
      links: [
        { label: "Development", href: "#" },
        { label: "Finance & Accounting", href: "#" },
        { label: "Design", href: "#" },
        { label: "Business", href: "#" },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { label: "About", href: "#" },
        { label: "Become Instructor", href: "#" },
        { label: "Contact", href: "#" },
        { label: "Career", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "#" },
        { label: "FAQs", href: "#" },
        { label: "Terms & Condition", href: "#" },
        { label: "Privacy Policy", href: "#" },
      ],
    },
  ]

  const { isAtTop, isAtBottom, scrollDirection } = useScrollStatus()
  const is2Xl = useMedia("(min-width: 1536px)", false)
  const isLg = useMedia("(min-width: 1024px)", true)
  const [openMobileMenu, setOpenMobileMenu] = useState(false)

  return (
    <>
      {/* <div
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
      </div> */}
      <header
        className={`sticky top-0 z-10 flex items-center justify-between bg-white px-8 drop-shadow-lg transition-all duration-300 ease-in-out ${isAtTop ? "py-8" : "py-4"}`}
      >
        <div className="flex items-center">
          <Link href={"/"} className="h-fit">
            <Image src={"/assets/logo.svg"} alt={""} width={153} height={40} />
          </Link>
          {/* <div className="body-lg-400 ms-[50px] flex w-[200px] items-center justify-between border border-grayScale-100 px-4.5 py-3 text-grayScale-700">
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
          </div> */}
        </div>
        <nav className="hidden gap-2 lg:flex">
          {TOP_BAR_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className={`px-4 py-3`}>
              <Typography
                variant="body-lg-500"
                className={`transition-colors duration-300 ease-in-out ${
                  link.isActive ? "text-primary-500" : "hover:text-primary-500"
                }`}
              >
                {link.label}
              </Typography>
            </Link>
          ))}
        </nav>
        <div className="hidden items-center lg:flex">
          <Bell size={24} className="cursor-pointer" />
          <Heart size={24} className="ml-6 cursor-pointer" />
          <ShoppingCartSimple size={24} className="ml-6 cursor-pointer" />
          <Button variant="secondary" theme="primary" className="ml-6">
            Create Account
          </Button>
          <Button className="ml-3">Sign In</Button>
        </div>
        <button
          className="flex size-12 items-center justify-center rounded-md transition-all duration-300 ease-in-out hover:shadow-lg lg:hidden"
          onClick={() => setOpenMobileMenu(true)}
        >
          <List size={24} />
        </button>
        <div
          className={`fixed left-0 top-0 block h-screen w-screen bg-black/90 transition-all duration-300 ease-in-out lg:hidden ${openMobileMenu ? "left-0" : "left-full"}`}
        >
          <div className={`px-8 ${isAtTop ? "py-8" : "py-4"}`}>
            <button
              className="top-4 float-end flex size-12 items-center justify-center transition-all duration-300 ease-in-out hover:shadow-lg"
              onClick={() => setOpenMobileMenu(false)}
            >
              <X color="white" size={24} />
            </button>
            <div className="float-none mt-12 flex flex-col gap-2">
              {TOP_BAR_LINKS.map((item, index) => (
                <Link
                  href={item.href}
                  key={index}
                  className="block py-4 text-center text-primary-500 transition-all duration-200 ease-in-out active:bg-primary-500 active:text-white"
                  onClick={() =>
                    setTimeout(() => {
                      setOpenMobileMenu(false)
                    }, 500)
                  }
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col items-center gap-6">
                <Bell size={32} className="cursor-pointer fill-white" />
                <Heart size={32} className="cursor-pointer fill-white" />
                <ShoppingCartSimple
                  size={32}
                  className="cursor-pointer fill-white"
                />
                <Button variant="secondary" theme="primary">
                  Create Account
                </Button>
                <Button>Sign In</Button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="relative overflow-hidden bg-[#F0F2F5]">
          <section className="section-container">
            <div className="flex w-full flex-col items-start gap-8 py-20 lg:w-[55%] 2xl:gap-10 2xl:py-24">
              <Typography variant="display-02" tag="h1">
                Learn with expert anytime anywhere
              </Typography>
              <Typography
                variant="body-3xl-400"
                tag="p"
                className="max-w-[650px]"
              >
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
              className="left-[55%] top-0 block h-full w-auto lg:absolute 2xl:left-1/2"
            />
          </section>
        </div>
        <div>
          <section className="section-container py-20">
            <Typography variant="heading-02" tag="h2" className="text-center">
              Browse top category
            </Typography>
            <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-3 xl:grid-cols-4">
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
            <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4 2xl:grid-cols-5">
              {BEST_SELLING_COURSES.slice(0, is2Xl ? 10 : 8).map((course) => (
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
            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
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
            <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
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
          <section className="section-container grid grid-cols-1 gap-6 py-20 lg:grid-cols-2">
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
            <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-5">
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
          <section className="section-container grid grid-cols-2 gap-6 py-20 lg:grid-cols-6">
            <div className="col-span-2 row-span-2 flex shrink-0 flex-col items-center justify-center gap-6 lg:w-96 lg:items-start">
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
                className="flex h-24 w-full cursor-pointer items-center justify-center bg-white drop-shadow-sm transition-all duration-300 ease-in-out hover:drop-shadow-lg"
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
          <section className="section-container flex grid-cols-6 flex-col items-center gap-6 py-24 lg:grid">
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
                <CountUp
                  start={0}
                  end={6.3}
                  duration={2.75}
                  decimals={1}
                  decimal="."
                  suffix="k"
                  enableScrollSpy
                  scrollSpyOnce={false}
                  scrollSpyDelay={400}
                >
                  {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
              </Typography>
              <Typography variant="body-lg-500" className="text-grayScale-300">
                Online courses
              </Typography>
            </div>
            <div className="flex flex-col justify-center gap-3">
              <Typography variant="heading-02" className="text-white">
                <CountUp
                  start={0}
                  end={26}
                  duration={2.75}
                  suffix="k"
                  enableScrollSpy
                  scrollSpyOnce={false}
                  scrollSpyDelay={400}
                >
                  {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
              </Typography>
              <Typography variant="body-lg-500" className="text-grayScale-300">
                Certified Instructor
              </Typography>
            </div>
            <div className="flex flex-col justify-center gap-3">
              <Typography variant="heading-02" className="text-white">
                <CountUp
                  start={0}
                  end={99.9}
                  duration={2.75}
                  decimals={1}
                  decimal="."
                  suffix="%"
                  enableScrollSpy
                  scrollSpyOnce={false}
                  scrollSpyDelay={400}
                >
                  {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
              </Typography>
              <Typography variant="body-lg-500" className="text-grayScale-300">
                Sucess Rate
              </Typography>
            </div>
          </section>
        </div>
        <div className="border-b border-grayScale-800/50 bg-grayScale-900">
          <section className="section-container grid grid-cols-2 gap-6 py-20 lg:grid-cols-6">
            <div className="col-span-2">
              <Link href={"/"} className="group flex items-center gap-2.5">
                <GraduationCap size={46} className="fill-primary-500" />
                <div className="text-[36.8px] font-semibold leading-[45.6px] tracking-[-0.8px] text-white transition-colors duration-300 ease-in-out group-hover:text-primary-500">
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
              <div className="mt-6 flex gap-3">
                {[
                  { href: "/", Icon: FacebookIcon },
                  { href: "/", Icon: InstagramIcon },
                  { href: "/", Icon: LinkedinIcon },
                  { href: "/", Icon: TwitterIcon },
                  { href: "/", Icon: YoutubeIcon },
                ].map(({ href, Icon }, index) => (
                  <Link
                    key={index}
                    className="flex size-[46px] items-center justify-center bg-grayScale-800/40 transition-colors duration-300 ease-in-out hover:bg-primary-500"
                    href={href}
                  >
                    <Icon />
                  </Link>
                ))}
              </div>
            </div>
            {FOOTER_LINKS.map((column) => (
              <div key={column.title}>
                <Typography variant="label-lg" className="text-white">
                  {column.title}
                </Typography>
                <div className="mt-5 flex flex-col items-start gap-1.5">
                  {column.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="group relative flex items-center gap-3 py-1.5 before:absolute before:bottom-[-5px] before:left-0 before:h-0.5 before:w-0 before:bg-[#ff6636] before:transition-all before:duration-[0.3s] before:content-[''] hover:before:w-full"
                    >
                      <Typography
                        variant="body-md-400"
                        className="text-grayScale-500 group-hover:text-white"
                      >
                        {link.label}
                      </Typography>
                      <ArrowRight
                        size={16}
                        className="-translate-x-4 fill-white opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div>
              <Typography variant="label-lg" className="text-white">
                Download our app
              </Typography>
              <div className="mt-5 flex w-fit items-center gap-3.5 bg-grayScale-800/40 px-5 py-3">
                <AppleIcon />
                <div>
                  <Typography
                    variant="body-xs-400"
                    className="text-grayScale-300"
                  >
                    Download now
                  </Typography>
                  <Typography variant="body-lg-500" className="text-white">
                    App Store
                  </Typography>
                </div>
              </div>
              <div className="mt-5 flex w-fit items-center gap-3.5 bg-grayScale-800/40 px-5 py-3">
                <GooglePlayIcon />
                <div>
                  <Typography
                    variant="body-xs-400"
                    className="text-grayScale-300"
                  >
                    Download now
                  </Typography>
                  <Typography variant="body-lg-500" className="text-white">
                    App Store
                  </Typography>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="bg-grayScale-900">
          <section className="section-container py-6">
            <Typography variant="body-md-400" className="text-grayScale-500">
              © 2021 - Eduflex. Designed by{" "}
              <Link href={"/"} className="text-white">
                Templatecookie
              </Link>
              . All rights reserved
            </Typography>
          </section>
        </div>
      </footer>
    </>
  )
}
