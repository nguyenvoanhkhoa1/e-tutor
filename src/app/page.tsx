"use client"

import Image from "next/image"
import Link from "next/link"
import {
  Bell,
  CaretDown,
  Heart,
  MagnifyingGlass,
  ShoppingCartSimple,
} from "@phosphor-icons/react"

import Button from "@/components/ui/Button"
import Typography from "@/components/ui/Typography"

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
        <div>
          <section className="section-container">
            <div className="flex w-1/2 flex-col items-start gap-10 py-24">
              <Typography variant="display-02">
                Learn with expert anytime anywhere
              </Typography>
              <Typography variant="body-3xl-400" tag="p">
                Our mision is to help people to find the best course online and
                learn with expert anytime, anywhere.
              </Typography>
              <Button size="lg">Create Account</Button>
            </div>
            <Image src={""} alt={""}></Image>
          </section>
        </div>
      </main>
      <footer></footer>
    </>
  )
}
