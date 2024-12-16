"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* <Link href="/" className="text-2xl font-bold text-[#FF4958]">
          Milir
        </Link> */}
        <Link href="/">
          <img
            className="w-auto h-8"
            src="/images/milirlogo.png"
            alt="Milir Logo"
          />
        </Link>

        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none`}>
          <Link href="#features" className="text-[#0F172A] hover:text-[#FF4958] py-2 md:py-0 md:mr-6">
            Features
          </Link>
          <Link href="#how-it-works" className="text-[#0F172A] hover:text-[#FF4958] py-2 md:py-0 md:mr-6">
            How It Works
          </Link>
          <Link href="#pricing" className="text-[#0F172A] hover:text-[#FF4958] py-2 md:py-0 md:mr-6">
            Pricing
          </Link>
          <Link href="#why us" className="text-[#0F172A] hover:text-[#FF4958] py-2 md:py-0 md:mr-6">
            Why us
          </Link>
        </nav>
        <div className="flex items-center gap-x-4">
          <Button className="gap-1 text-black hover:bg-[#f5f2f2]">
            Sign In
          </Button>
          <Button className="bg-[#FF4958] text-white hover:bg-[#FF6B77]">
            Sign Up

          </Button>
          <button className="md:hidden ml-4" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  )
}

