"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Use usePathname instead of useRouter

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 sticky top-0 backdrop-blur-md z-50 px-4 py-3 shadow-md w-full">
      <div className="max-w-screen-xl container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          <Link href="/">AimanBlog</Link>
        </div>

        {/* Hamburger Menu Button for Mobile */}
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-gray-100 focus:outline-none"
          >
           <svg>
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Links for Desktop */}
        <div className="hidden sm:flex space-x-8">
          {['/', '/blog', '/about', '/contact'].map((path) => (
            <Link
              key={path}
              href={path}
              className={`${
                pathname === path
                  ? 'bg-gray-700 rounded-md text-white font-bold' // Active link styling
                  : 'text-gray-300 hover:bg-gray-600 hover:text-white transition duration-200' // Hover styling
              } px-3 py-2 rounded-md`} // Add rounded-md to maintain consistent border radius
            >
              {path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.slice(2)}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden mt-2 bg-gray-800 rounded-lg shadow-md">
          <div className="space-y-2 p-4">
            {['/', '/blog', '/about', '/contact'].map((path) => (
              <Link
                key={path}
                href={path}
                className={`block ${
                  pathname === path
                    ? 'bg-gray-700 rounded-md text-white font-bold' // Active link styling
                    : 'text-gray-300 hover:bg-gray-600 hover:text-white transition duration-200' // Hover styling
                } px-3 py-2 rounded-md`} // Add rounded-md to maintain consistent border radius
              >
                {path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;