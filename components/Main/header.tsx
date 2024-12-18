// "use client"

// import { useState } from 'react'
// import Link from 'next/link'
// import { Button } from '@/components/ui/button'
// import { Menu, X } from 'lucide-react'

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
  

//   return (
//     <header className="w-full bg-white py-4 sticky top-0 z-50 shadow-sm">
//       <div className="container mx-auto flex items-center justify-between px-4">
//         {/* Logo */}
//         <Link href="/">
//           <img
//             className="w-auto h-8"
//             src="/images/milirlogo.png"
//             alt="Milir Logo"
//           />
//         </Link>

//         {/* Navigation Menu */}
//         <nav
//           className={`${
//             isMenuOpen ? "flex" : "hidden"
//           } md:flex flex-col md:flex-row absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none`}
//         >
//           <div className="flex flex-col md:flex-row md:items-center">
//             <Link
//               href="#features"
//               className="text-[#0F172A] hover:text-[#FF4958] py-2 md:py-0 md:mr-6"
//             >
//               Features
//             </Link>
//             <Link
//               href="#how-it-works"
//               className="text-[#0F172A] hover:text-[#FF4958] py-2 md:py-0 md:mr-6"
//             >
//               How It Works
//             </Link>
//             <Link
//               href="#pricing"
//               className="text-[#0F172A] hover:text-[#FF4958] py-2 md:py-0 md:mr-6"
//             >
//               Pricing
//             </Link>
//             <Link
//               href="#why us"
//               className="text-[#0F172A] hover:text-[#FF4958] py-2 md:py-0 md:mr-6"
//             >
//               Why Us
//             </Link>
//           </div>

//           {/* Mobile Buttons */}
//           {isMenuOpen && (
//             <div className="flex flex-col mt-4 md:hidden border-t pt-4">
//               <Button className="gap-1 text-black hover:bg-[#f5f2f2] w-full mb-2">
                
//                 <Link href="https://milir-maker-it-ui.vercel.app/auth/sign-in">
//                 Sign In
//               </Link>
                
//               </Button>
//               <Button className="bg-[#FF4958] text-white hover:bg-[#FF6B77] w-full">
                
//                 <Link href="https://milir-maker-it-ui.vercel.app/auth/sign-up">
//                 Sign Up
//               </Link>
//               </Button>
//             </div>
//           )}
//         </nav>

//         {/* Buttons and Mobile Menu Toggle */}
//         <div className="flex items-center gap-x-4">
//           {/* Always visible buttons */}
//           <Button className="hidden md:inline gap-1 text-black hover:bg-[#f5f2f2]">
//           <Link href="https://milir-maker-it-ui.vercel.app/auth/sign-in">
//                 Sign In
//               </Link>
//           </Button>
//           <Button className="hidden md:inline bg-[#FF4958] text-white hover:bg-[#FF6B77]">
//           <Link href="https://milir-maker-it-ui.vercel.app/auth/sign-up">
//                 Sign Up
//               </Link>
//           </Button>
//           <button
//             className="md:hidden ml-4"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>
//     </header>
//   )
// }




"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('home') // Added activeLink state

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const onUpdateActiveLink = (value : any) => {
    setActiveLink(value) // Updates the active link state
  }

  return (
    <header
      className={`w-full bg-white py-4 sticky top-0 z-50 shadow-sm transition-shadow ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link href="/">
          <img
            className="w-auto h-8"
            src="/images/milirlogo.png"
            alt="Milir Logo"
          />
        </Link>

        {/* Navigation Menu */}
        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none`}
        >
          <div className="flex flex-col md:flex-row md:items-center">
            {[
              { href: "#features", label: "Features" },
              { href: "#how-it-works", label: "How It Works" },
              { href: "#pricing", label: "Pricing" },
              { href: "#why-us", label: "Why Us" },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`py-2 md:py-0 md:mr-6 ${
                  activeLink === href
                    ? "text-[#FF4958] font-semibold"
                    : "text-[#0F172A] hover:text-[#FF4958]"
                }`}
                onClick={(e) => {
                  e.preventDefault() // Prevent default anchor behavior
                  onUpdateActiveLink(href) // Update the active link
                  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }) // Smooth scroll
                }}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Mobile Buttons */}
          {isMenuOpen && (
            <div className="flex flex-col mt-4 md:hidden border-t pt-4">
              <Button className="gap-1 text-black hover:bg-[#f5f2f2] w-full mb-2">
                <Link href="https://milir-maker-it-ui.vercel.app/auth/sign-in">
                  Sign In
                </Link>
              </Button>
              <Button className="bg-[#FF4958] text-white hover:bg-[#FF6B77] w-full">
                <Link href="https://milir-maker-it-ui.vercel.app/auth/sign-up">
                  Sign Up
                </Link>
              </Button>
            </div>
          )}
        </nav>

        {/* Buttons and Mobile Menu Toggle */}
        <div className="flex items-center gap-x-4">
          {/* Always visible buttons */}
          <Button className="hidden md:inline gap-1 text-black hover:bg-[#f5f2f2]">
            <Link href="https://milir-maker-it-ui.vercel.app/auth/sign-in">
              Sign In
            </Link>
          </Button>
          <Button className="hidden md:inline bg-[#FF4958] text-white hover:bg-[#FF6B77]">
            <Link href="https://milir-maker-it-ui.vercel.app/auth/sign-up">
              Sign Up
            </Link>
          </Button>
          <button
            className="md:hidden ml-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  )
}
