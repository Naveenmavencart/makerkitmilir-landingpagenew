import Link from 'next/link'

import {  LinkedinIcon as LinkedIn } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full bg-[#0F172A] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            {/* <Link href="/" className="text-2xl font-bold text-[#FF4958] mb-4 block">
              Milir
            </Link> */}
              <img
              className="w-auto h-8 hover:filter hover:brightness-0 hover:invert hover:sepia hover:saturate-200 hover:hue-rotate-330 transition duration-200"
              src="/images/Group 12.png"
              alt="Milir Logo"
            />
            <p className="text-sm text-gray-400 mt-3">
              Converting free trial users into loyal customers with tactical conversion insights.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link href="#features" className="hover:text-[#FF4958]">Features</Link></li>
              <li><Link href="#how-it-works" className="hover:text-[#FF4958]">How It Works</Link></li>
              <li><Link href="#pricing" className="hover:text-[#FF4958]">Pricing</Link></li>
              <li><Link href="#pricing" className="hover:text-[#FF4958]">Why us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-[#FF4958]">Contact Us</Link></li>
              <li><Link href="/careers" className="hover:text-[#FF4958]">Privacy Policy</Link></li>
              <li><a href="#Terms-and-conditions" className="hover:text-[#FF4958]">Terms & Conditions</a></li>
             
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/milir/" className="hover:text-[#FF4958]"><LinkedIn size={20} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Milir. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

