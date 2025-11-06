"use client";

import { LazyMotion, domAnimation, motion } from "framer-motion";

export default function ProjectsPage() {
  const projects = [
    {
      name: "AI Chatbot Assistant",
      desc: "An intelligent conversational assistant built using OpenAI’s GPT models and Next.js. It can automate customer interactions, answer questions in real-time, and integrate seamlessly with any web or business workflow.",
      tech: ["Next.js", "OpenAI API", "TypeScript", "TailwindCSS"],
    },
    {
      name: "3D Portfolio Experience",
      desc: "A fully interactive 3D web experience powered by Three.js and Framer Motion. It showcases dynamic scenes, immersive camera movements, and real-time object interactions for an unforgettable digital presence.",
      tech: ["Three.js", "React Three Fiber", "Framer Motion", "Vercel"],
    },
    {
      name: "AI Learning Dashboard",
      desc: "A data-driven full-stack platform designed to track student progress, visualize performance metrics, and personalize the AI learning journey using adaptive algorithms and intuitive UI design.",
      tech: ["Next.js 14", "Prisma", "PostgreSQL", "Chart.js", "TailwindCSS"],
    },
  ];

  const upcoming = [
    {
      name: "AI Art Generator",
      desc: "A creative platform that turns text prompts into stunning AI-generated art using diffusion models and interactive 3D display.",
    },
    {
      name: "Voice-Powered Coding Assistant",
      desc: "An experimental tool that allows developers to write, refactor, and debug code using natural speech commands.",
    },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <main className="min-h-screen bg-[#030a1a] text-white overflow-hidden">
        <section className="pt-28 px-6 md:px-16 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 bg-clip-text text-transparent mb-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Projects
          </motion.h1>

          <motion.p
            className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed mb-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            At{" "}
            <span className="text-cyan-400 font-semibold">
              Himalayan AI Code School
            </span>
            , every project is more than just code — it’s a journey of innovation,
            creativity, and real-world problem solving. Here’s a glimpse into what
            our learners and mentors have built together.
          </motion.p>

          {/* ====== Current Projects ====== */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                className="relative p-[2px] rounded-2xl group cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{
                  scale: 1.05,
                  rotateX: 6,
                  rotateY: -6,
                  transition: { type: "spring", stiffness: 180, damping: 12 },
                }}
              >
                {/* Animated Glow Border */}
                <motion.div
                  animate={{
                    opacity: [0.2, 0.8, 0.2],
                    scale: [1, 1.04, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "mirror",
                  }}
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-400 opacity-0 group-hover:opacity-100 blur-xl transition duration-700"
                />

                {/* Card Content */}
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  }}
                  className="relative bg-[#0b163070] backdrop-blur-md border border-blue-900 p-8 rounded-2xl group-hover:scale-[1.03] hover:shadow-blue-500/40 hover:shadow-2xl transition-all duration-500"
                >
                  <h3 className="text-2xl text-cyan-400 font-semibold mb-3">
                    {p.name}
                  </h3>
                  <p className="text-gray-300 text-base mb-4 leading-relaxed">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 mt-3">
                    {p.tech.map((t, index) => (
                      <span
                        key={index}
                        className="text-sm bg-blue-900/40 px-3 py-1 rounded-full border border-blue-800 text-blue-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Divider Glow */}
          <div className="my-28 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-60"></div>

          {/* ====== Upcoming Projects ====== */}
          <motion.div
            className="max-w-5xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-purple-400 mb-6">
              Upcoming Projects
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              Our innovation never stops. Here’s what’s next at Himalayan AI Code
              School.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {upcoming.map((p, i) => (
                <motion.div
                  key={i}
                  className="bg-[#101a3b]/60 backdrop-blur-md border border-purple-800 p-8 rounded-2xl hover:scale-[1.03] hover:bg-[#1a224b]/80 transition-all duration-400"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                >
                  <h3 className="text-xl font-semibold text-purple-300 mb-2">
                    {p.name}
                  </h3>
                  <p className="text-gray-400">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Closing Section */}
          <motion.div
            className="mt-28 max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-4">
              Building the Future Together
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Every project we create reflects our belief in{" "}
              <span className="text-white">learning through innovation</span>.
              Whether it’s AI, 3D, or full-stack — we code with creativity and
              purpose. Join us as we continue shaping the future of intelligent,
              interactive, and inspiring technology.
            </p>
          </motion.div>
        </section>
      </main>
    </LazyMotion>
  );
}
