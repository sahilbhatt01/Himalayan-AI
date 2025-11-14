"use client";

import { motion } from "framer-motion";
import Hero3D from "@/components/Ui/Hero3D";
import ThreeCanvas from "@/components/Ui/ThreeCanvas";
import InfoCard from "@/components/Card/InfoCard"; // ✅ NEW IMPORT

export default function HomePage() {
  return (
    <main className="min-h-screen w-full bg-[#030a1a] text-white overflow-hidden">
      {/* ===== Hero 3D Section ===== */}
      <Hero3D />

      {/* ===== About Section ===== */}
      <section className="relative z-10 py-20 px-6 md:px-16 bg-gradient-to-b from-[#030a1a] via-[#08142b] to-[#0a1e3a]">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Learn, Create, and Innovate
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-12">
           <span className="text-cyan-400 font-semibold">Himalayan AI Code School</span> empowers learners to explore Artificial
            Intelligence, 3D Design, and modern web technologies through
            interactive, project-based learning. Whether you're a beginner or an
            advanced developer, our courses help you turn ideas into intelligent
            applications that come alive in 3D environments.
          </p>
        </motion.div>

        {/* 3D Canvas */}
        <motion.div
          className="max-w-5xl mx-auto mt-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <ThreeCanvas />
        </motion.div>
      </section>

      {/* ===== Programs Section ===== */}
      <section className="relative py-24 bg-[#020b18] px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 bg-clip-text text-transparent mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Curriculum
          </motion.h2>

          <motion.div
            className="grid lg:grid-cols-3 md:grid-cols-2 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            viewport={{ once: true }}
          >
            {[
              {
                title: "AI Fundamentals",
                desc: "Learn machine learning, neural networks, and data visualization using real-world datasets.",
                gradient: "from-cyan-400 via-blue-500 to-indigo-500",
              },
              {
                title: "3D Web Development",
                desc: "Build immersive 3D web experiences using Three.js, React Three Fiber, and advanced shaders.",
                gradient: "from-blue-400 via-purple-500 to-pink-500",
              },
              {
                title: "Full-Stack Projects",
                desc: "Develop end-to-end applications using Next.js, Tailwind CSS, and Prisma with PostgreSQL.",
                gradient: "from-purple-400 via-pink-500 to-red-400",
              },
            ].map((card, i) => (
              <InfoCard
                key={i}
                title={card.title}
                text={card.desc}
                gradient={card.gradient}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== Why Choose Us ===== */}
      <section className="relative py-24 bg-gradient-to-b from-[#0a1e3a] to-[#051024] px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Why Choose Himalayan AI Code School?
            </h2>
            <ul className="space-y-4 text-gray-300 text-lg">
              <li>✅ Live project-based learning from day one</li>
              <li>✅ Mentorship from real developers & AI engineers</li>
              <li>
                ✅ Modern tools: Next.js 14, Prisma, Three.js, and OpenAI APIs
              </li>
              <li>✅ Build your portfolio with 3D & AI-powered projects</li>
              <li>✅ Career guidance & community-driven collaboration</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-[400px]">
              <ThreeCanvas />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== Student Projects ===== */}
      <section className="relative py-24 bg-[#030a1a] px-6 md:px-16">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent mb-8">
            Student Projects
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto mb-12">
            Our learners build interactive AI tools, 3D visualizations, and
            full-stack applications that showcase innovation and creativity.
          </p>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {[
              {
                title: "AI Image Generator",
                desc: "Built with OpenAI API & Next.js for generating art through prompts.",
                gradient: "from-cyan-400 to-blue-500",
              },
              {
                title: "3D Portfolio Site",
                desc: "An immersive portfolio using React Three Fiber & motion animations.",
                gradient: "from-purple-400 to-pink-500",
              },
              {
                title: "AI Chat Assistant",
                desc: "A chatbot trained on real datasets with context-aware replies.",
                gradient: "from-teal-400 to-green-400",
              },
            ].map((p, i) => (
              <InfoCard key={i} title={p.title} text={p.desc} gradient={p.gradient} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* ===== CTA Section ===== */}
      <section className="relative py-24 bg-gradient-to-r from-[#0a1e3a] via-[#08142b] to-[#030a1a] text-center px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Join the Himalayan AI Revolution
        </motion.h2>
        <p className="text-gray-300 max-w-3xl mx-auto mb-10 text-lg">
          Start your journey into AI, 3D, and modern web development with
          expert-led learning paths and hands-on experience.
        </p>
        <motion.a
          href="/join"
          whileHover={{ scale: 1.05 }}
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
        >
          Enroll Now
        </motion.a>
      </section>
    </main>
  );
}
