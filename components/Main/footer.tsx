'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link'
import { LinkedinIcon } from 'lucide-react';

export default function Footer() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  // Add scroll listener for background color update
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to set the active link
  const handleSetActiveLink = (link: string) => {
    setActiveLink(link);
    const section = document.querySelector(link); // Scroll to the section
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
    className={`w-full ${scrolled ? 'bg-[#0E1626]' : 'bg-[#0F172A]'} text-white py-12 transition-colors duration-300`}
  >
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div>
          <Link href="/">
            <img
              className="w-auto h-8 hover:brightness-110 transition duration-200"
              src="/images/Group 12.png"
              alt="Milir Logo"
            />
          </Link>
          <p className="text-sm text-gray-400 mt-3">
            Converting free trial users into loyal customers with tactical conversion insights.
          </p>
        </div>

        {/* Product Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Product</h3>
          <ul className="space-y-2">
            {['#features', '#how-it-works', '#pricing', '#why-us'].map((link) => (
              <li key={link}>
                <button
                  onClick={() => handleSetActiveLink(link)}
                  className={`hover:text-[#FF4958] ${
                    activeLink === link ? 'text-[#FF4958]' : 'text-white'
                  }`}
                >
                  {link.replace('#', '').replace('-', ' ')}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/contact-form" className="hover:text-[#FF4958]">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/privacy-and-policy" className="hover:text-[#FF4958]">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-and-condition" className="hover:text-[#FF4958]">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/company/milir/"
              className="hover:text-[#FF4958]"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Milir. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

