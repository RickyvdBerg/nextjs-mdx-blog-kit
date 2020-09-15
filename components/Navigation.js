import React from 'react'
import Link from './Link'
import { Toggle } from './themeToggle'

export const Navigation = () => {
  return (
    <div className="md:py-6">
      <div className="flex items-center justify-between flex-wrap p-5 ">
        <div className="flex items-center flex-shrink-0 text-primary font-semibold mr-6">
          <div className="active:text-accent text-lg">
            <Link href="/">
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-primary hover:text-accent mr-4"
              >
                Home
              </a>
            </Link>
            <Link href="/blog">
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-primary hover:text-accent mr-4"
              >
                Blog
              </a>
            </Link>
            <Link href="/about">
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-primary hover:text-accent mr-4"
              >
                About
              </a>
            </Link>
            <Link href="/hire">
              <a
                href="#"
                className="block mt-4 lg:inline-block lg:mt-0 text-primary hover:text-accent mr-4"
              >
                Hire
              </a>
            </Link>
          </div>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-primary border-teal-400 hover:text-accent hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Home</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow"></div>
          <span className="font-semibold text-xl tracking-tight hover:text-accent">
            <Toggle></Toggle>
          </span>
        </div>
      </div>
    </div>
  )
}
