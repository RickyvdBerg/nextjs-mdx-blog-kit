import React, { useState } from 'react'
import Link from './Link'
import { Toggle } from './themeToggle'

// export const Navigation = () => {
//   const [nav, setNav] = useState(false)
//   const toggleNav = (e) => {
//     setNav(!nav)
//   }
//   return (
//     <div className="container m-auto md:py-6 px-5 sm:px-8 md:px-20 max-w-screen-xl bg-secondary md:bg-transparent">
//       <div className="flex items-center justify-between flex-wrap p-5 ">
//         <div
//           className="flex items-center flex-shrink-0 text-primary font-semibold mr-6"
//           className={nav ? 'hidden' : 'block'}
//         >
//           <div className="active:text-accent text-lg">
//             <Link href="/">
//               <a
//                 href="#responsive-header"
//                 className="block mt-4 lg:inline-block lg:mt-0 text-primary hover:text-accent mr-4"
//               >
//                 Home
//               </a>
//             </Link>
//             <Link href="/blog">
//               <a
//                 href="#responsive-header"
//                 className="block mt-4 lg:inline-block lg:mt-0 text-primary hover:text-accent mr-4"
//               >
//                 Blog
//               </a>
//             </Link>
//             <Link href="/about">
//               <a
//                 href="#responsive-header"
//                 className="block mt-4 lg:inline-block lg:mt-0 text-primary hover:text-accent mr-4"
//               >
//                 About
//               </a>
//             </Link>
//             <Link href="/hire">
//               <a
//                 href="#"
//                 className="block mt-4 lg:inline-block lg:mt-0 text-primary hover:text-accent mr-4"
//               >
//                 Hire
//               </a>
//             </Link>
//           </div>
//         </div>
//         <div className="flex self-start md:hidden">
//           <button
//             onClick={(e) => toggleNav(e)}
//             className="flex items-center px-3 py-2 border rounded text-primary border-teal-400 hover:text-accent hover:border-white"
//           >
//             <svg
//               className="fill-current h-3 w-3"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <title>Home</title>
//               <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
//             </svg>
//           </button>
//         </div>
//         <div className="w-full block flex-grow md:flex md:items-center md:w-auto">
//           <div className="text-sm md:flex-grow"></div>
//           <span className="font-semibold text-xl tracking-tight hover:text-accent">
//             <Toggle></Toggle>
//           </span>
//         </div>
//       </div>
//     </div>
//   )
// }

export const Navigation = ({}) => {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <nav
      className={`flex items-center flex-wrap container py-5 m-auto px-10 sm:px-8 md:px-20 max-w-screen-xl absolute left-0 right-0 md:bg-transparent ${
        isExpanded ? 'bg-secondary' : 'bg-transparent '
      }`}
    >
      <div className="flex flex-row w-full justify-between">
        <div className="flex items-center flex-shrink-0 text-white md:hidden">
          <Toggle></Toggle>
        </div>
        <div className="block md:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-accent hover:text-white hover:border-white"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full block flex-grow md:flex md:items-center md:w-auto`}
      >
        <div className="active:text-accent text-lg font-semibold md:flex-grow text-center md:text-left">
          <Link href="/">
            <a
              href="#responsive-header"
              className="block mt-4 md:inline-block md:mt-0 text-primary hover:text-accent mr-4"
            >
              Home
            </a>
          </Link>
          <Link href="/blog">
            <a
              href="#responsive-header"
              className="block mt-4 md:inline-block md:mt-0 text-primary hover:text-accent mr-4"
            >
              Blog
            </a>
          </Link>
          <Link href="/about">
            <a
              href="#responsive-header"
              className="block mt-4 md:inline-block md:mt-0 text-primary hover:text-accent mr-4"
            >
              About
            </a>
          </Link>
          <Link href="/contact">
            <a
              href="#"
              className="block mt-4 md:inline-block md:mt-0 text-primary hover:text-accent mr-4"
            >
              Contact
            </a>
          </Link>
        </div>
        <div>
          <div
            href="#"
            className="hidden md:inline-block text-sm px-4 py-2 leading-none "
          >
            <span className="font-semibold text-xl tracking-tight hover:text-accent mt-4 md:mt-0">
              <Toggle></Toggle>
            </span>
          </div>
        </div>
      </div>
    </nav>
  )
}
