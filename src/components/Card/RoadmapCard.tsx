"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function RoadmapCard({ stage }: any) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.6 }}
      onClick={() => setOpen(!open)}
      className="relative group rounded-2xl p-[2px] cursor-pointer flex flex-col"
    >
      {/* Glow & hover background */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stage.gradient} opacity-40 blur-xl transition-all duration-700`}
      />
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stage.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500`}
      />

      {/* Card Content */}
      <div className="relative flex flex-col justify-between rounded-2xl bg-[#0a1025]/70 backdrop-blur-lg border border-white/10 p-6 transition-all duration-500 min-h-[240px] sm:min-h-[240px] md:min-h-[260px]">
          <h3 className="text-xl font-semibold group-hover:text-cyan-200 transition-colors">
            {stage.phase}
          </h3>
          <p className="text-sm text-cyan-300/90 mt-1">{stage.duration}</p>
          <p className="text-gray-300 mt-3">{stage.summary}</p>

          {/* Expandable Content */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
            className="overflow-hidden mt-4"
          >
            <Section label="Skills Learned" list={stage.topics} />
            <Section label="Outcome" list={stage.outcomes} />
            <Section label="Projects" list={stage.projects} />
            <Section label="Tools" list={stage.tools} />
          </motion.div>

        {/* Footer Text */}
        <p className="text-xs text-gray-400 mt-3 italic text-center">
          Click to {open ? "collapse" : "expand"} details ↘
        </p>
        </div>
    </motion.div>
  );
}

function Section({ label, list }: any) {
  return (
    <div className="mb-4">
      <p className="text-cyan-300 font-medium mb-1">{label}</p>
      <ul className="space-y-1 text-gray-300 text-sm">
        {list.map((item: string, i: number) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
