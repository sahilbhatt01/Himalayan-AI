"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10 shadow-lg"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold tracking-wide text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          Himalayan AI Code School
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-gray-300">
          {navLinks.map((link, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href={link.href}
                className="relative px-1 text-lg font-medium group"
              >
                <span className="group-hover:text-cyan-400 transition-colors">
                  {link.name}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}

          {/* Join Button */}
          <motion.div whileTap={{ scale: 0.95 }}>
            <Link
              href="/join"
              className="px-5 py-2 text-white font-semibold rounded-full 
                         bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600
                         hover:from-cyan-500 hover:via-blue-600 hover:to-indigo-700
                         transition-all duration-300 shadow-[0_0_15px_rgba(56,189,248,0.6)]
                         hover:shadow-[0_0_25px_rgba(56,189,248,0.9)]"
            >
              Join Now
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cyan-400 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-7 h-7"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden flex flex-col items-center bg-black/90 backdrop-blur-lg border-t border-white/10 py-4 space-y-4"
        >
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg text-gray-300 hover:text-cyan-400 transition"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/join"
            onClick={() => setIsOpen(false)}
            className="mt-2 px-6 py-2 rounded-full text-white font-semibold 
                       bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600
                       hover:from-cyan-500 hover:via-blue-600 hover:to-indigo-700
                       transition-all duration-300 shadow-[0_0_15px_rgba(56,189,248,0.6)]"
          >
            Join Now
          </Link>
        </motion.nav>
      )}
    </motion.header>
  );
}
