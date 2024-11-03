import Image from "next/image"
import Link from "next/link"

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
        className="bg-grayScale-900 flex items-center justify-between px-8"
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
          <div className="body-md-400 text-grayScale-400 flex items-center gap-1.5">
            USD
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.75 4.5L6 8.25L2.25 4.5"
                stroke="#A1A5B3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="body-md-400 text-grayScale-400 flex items-center gap-1.5">
            English
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.75 4.5L6 8.25L2.25 4.5"
                stroke="#A1A5B3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <header className="flex items-center justify-between px-8 py-6">
        <div className="flex items-center">
          <Link href={"/"} className="h-fit">
            <Image src={"/assets/logo.svg"} alt={""} width={153} height={40} />
          </Link>
          <div className="body-lg-400 text-grayScale-700 px-4.5 border-grayScale-100 ms-[50px] flex w-[200px] items-center justify-between border py-3">
            Browse
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 6L8 11L3 6"
                stroke="#4E5566"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </header>
      <main></main>
      <footer></footer>
    </>
  )
}
