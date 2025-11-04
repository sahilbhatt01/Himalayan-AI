"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="border-t border-white/10 bg-gradient-to-t from-[#000814] via-[#020c1a] to-transparent"
    >
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col items-center text-center">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-8 text-gray-400 text-base mb-6">
          {[
            { name: "About", href: "/about" },
            { name: "Projects", href: "/projects" },
            { name: "Join Now", href: "/join" },
          ].map((link, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href={link.href}
                className="relative font-medium group"
              >
                <span className="group-hover:text-cyan-400 transition-colors duration-300">
                  {link.name}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px w-2/3 bg-gradient-to-r from-transparent via-white/10 to-transparent my-6"></div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm tracking-wide">
          © {new Date().getFullYear()}{" "}
          <span className="text-cyan-400 font-semibold">
            Himalayan AI Code School
          </span>{" "}
          — All rights reserved.
        </p>
      </div>

      {/* Bottom Bar (Subtle Accent Glow) */}
      <div className="h-[3px] w-full bg-gradient-to-r from-cyan-400 via-blue-600 to-indigo-700 opacity-50"></div>
    </motion.footer>
  );
}
