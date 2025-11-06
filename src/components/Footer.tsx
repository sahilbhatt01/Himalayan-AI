"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative border-t border-white/10 bg-[#030a1a]/80 backdrop-blur-md overflow-hidden"
    >
      {/* Soft Nebula Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,200,255,0.15),transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col items-center text-center">

        {/* Logo / Title */}
        <h2 className="text-2xl font-semibold tracking-wide text-cyan-300 mb-2">
          Himalayan AI Code School
        </h2>
        <p className="text-gray-400 max-w-md text-sm leading-relaxed mb-10">
          Empowering creators to build the future with AI, creativity, and code —
          from the heart of the Himalayas to the world.
        </p>

        {/* Primary Navigation */}
        <nav className="flex flex-wrap justify-center gap-10 text-gray-300 text-lg mb-10">
          {[
            { name: "About", href: "/about" },
            { name: "Projects", href: "/projects" },
            { name: "Join Now", href: "/join" },
          ].map((link, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              <Link href={link.href} className="relative group font-medium">
                <span className="group-hover:text-cyan-300 transition-colors duration-300">
                  {link.name}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-300 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex gap-6 mb-8 text-xl">
          {[
            { icon: <FaLinkedin />, href: "#" },
            { icon: <FaGithub />, href: "#" },
            { icon: <FaInstagram />, href: "#" },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              whileHover={{ scale: 1.25 }}
              className="text-gray-400 hover:text-cyan-300 transition-colors duration-300"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Contact Information */}
        <p className="text-gray-400 text-sm mb-6">
          📩 Email:{" "}
          <a href="mailto:himalayanai.codeschool@gmail.com" className="text-cyan-300 hover:underline">
            himalayanai.codeschool@gmail.com
          </a>
        </p>

        {/* Divider */}
        <div className="w-4/5 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6"></div>

        {/* Copyright */}
        <p className="text-gray-500 text-xs tracking-wide">
          © {new Date().getFullYear()} Himalayan AI Code School — All Rights Reserved.
        </p>
      </div>

      {/* Accent Glow Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-cyan-400 via-blue-600 to-indigo-700 opacity-70"></div>
    </motion.footer>
  );
}
