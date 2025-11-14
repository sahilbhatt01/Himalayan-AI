"use client";
import { motion } from "framer-motion";

export default function InfoCard({
  title,
  text,
  gradient,
}: {
  title: string;
  text: string;
  gradient: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut" },
      }}
      whileHover={{
        scale: 1.08,
        rotateX: 6,
        rotateY: -6,
        transition: { type: "spring", stiffness: 180, damping: 12 },
      }}
      whileTap={{ scale: 1.01 }}
      className="relative p-[2px] rounded-2xl group cursor-pointer"
    >
      {/* Glow Outline */}
      <motion.div
        animate={{
          opacity: [0.2, 0.6, 0.2],
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${gradient} blur-xl`}
      />

      {/* Gradient Hover Border */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      {/* Card Body */}
      <motion.div
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="relative flex flex-col justify-between gap-3 bg-[#0b1630]/80 backdrop-blur-xl border border-white/10 group-hover:border-white/30 rounded-2xl p-6 transition-all duration-500"
      >
        <h3 className="text-xl text-cyan-400 font-semibold group-hover:text-cyan-200 transition-all duration-300">
          {title}
        </h3>
        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 md:h-[96px] lg:h-[100px] overflow-y-auto">
          {text}
        </p>
      </motion.div>
    </motion.div>
  );
}
