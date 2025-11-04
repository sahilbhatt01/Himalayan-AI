"use client";

import SceneOrb from "@/components/SceneOrb";
import { motion } from "framer-motion";

export default function JoinPage() {
  return (
    <main className="min-h-screen bg-[#030a1a] text-white overflow-hidden">
      <section className="pt-28 px-6 md:px-16 text-center">
        {/* ====== Title ====== */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Join the Himalayan AI Family
        </motion.h1>

        {/* ====== Subtitle ====== */}
        <motion.p
          className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Embark on a transformative journey into the world of Artificial
          Intelligence, 3D Web Experiences, and Creative Coding. Whether you’re
          a beginner or an experienced developer, we welcome all curious minds
          ready to build the future.
        </motion.p>

        {/* ====== Why Join Section ====== */}
        <motion.div
          className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-left mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="bg-white/5 p-6 rounded-2xl border border-cyan-800 hover:bg-white/10 transition-all">
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">
              Learn by Doing
            </h3>
            <p className="text-gray-400 text-base">
              Work on real projects that combine creativity and technology —
              from AI assistants to immersive 3D experiences.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-blue-800 hover:bg-white/10 transition-all">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              Global Mentorship
            </h3>
            <p className="text-gray-400 text-base">
              Get guidance from experienced mentors and tech leaders who help
              you master the latest tools and frameworks.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-purple-800 hover:bg-white/10 transition-all">
            <h3 className="text-xl font-semibold text-purple-400 mb-2">
              Future Opportunities
            </h3>
            <p className="text-gray-400 text-base">
              Grow your portfolio, collaborate with others, and open doors to
              internships, freelancing, or even startup creation.
            </p>
          </div>
        </motion.div>

        {/* ====== Application Form ====== */}
        <motion.div
          className="max-w-md mx-auto bg-[#0b1630]/80 border border-blue-900 rounded-2xl p-8 shadow-lg shadow-blue-500/20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-cyan-400 mb-6">
            Apply Now
          </h2>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 bg-[#0b1630] rounded-lg border border-gray-700 focus:outline-none focus:border-cyan-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 bg-[#0b1630] rounded-lg border border-gray-700 focus:outline-none focus:border-cyan-400"
            />
            <input
              type="text"
              placeholder="Phone Number (optional)"
              className="w-full p-3 bg-[#0b1630] rounded-lg border border-gray-700 focus:outline-none focus:border-cyan-400"
            />
            <select className="w-full p-3 bg-[#0b1630] rounded-lg border border-gray-700 focus:outline-none focus:border-cyan-400">
              <option>Choose Program</option>
              <option>AI Development</option>
              <option>3D Web Design</option>
              <option>Full-Stack Projects</option>
              <option>Creative Coding</option>
            </select>
            <textarea
              placeholder="Tell us why you want to join..."
              rows={4}
              className="w-full p-3 bg-[#0b1630] rounded-lg border border-gray-700 focus:outline-none focus:border-cyan-400"
            ></textarea>

            <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 py-3 rounded-lg font-semibold transition-all">
              Submit Application
            </button>
          </form>
        </motion.div>

        {/* ====== 3D Scene Orb ======
        <div className="mt-24 max-w-3xl mx-auto">
          <SceneOrb />
        </div> */}

        {/* ====== Closing Section ====== */}
        <motion.div
          className="mt-24 max-w-2xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-purple-400 mb-4">
            Become a Creator of the Future
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            At <span className="text-white">Himalayan AI Code School</span>, we
            believe learning is not just about knowledge — it’s about creation.
            Join our global community of dreamers, coders, and designers shaping
            the future of AI and immersive experiences.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
