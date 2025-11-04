'use client';

import { motion } from 'framer-motion';
import SceneOrb from '@/components/SceneOrb';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#030a1a] text-white overflow-hidden">
      <section className="pt-28 px-6 md:px-16">
        {/* ====== Title ====== */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          About Us
        </motion.h1>

        {/* ====== Intro Paragraph ====== */}
        <motion.p
          className="text-gray-300 text-lg max-w-4xl mx-auto text-center leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <strong>Himalayan AI Code School</strong> is an immersive learning hub
          designed to train the next generation of AI innovators and creative
          developers. We combine technology, design, and hands-on projects to
          empower learners to build real-world solutions that shape the future.
        </motion.p>

        {/* ====== Mission Section ====== */}
        <motion.div
          className="mt-16 max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-cyan-400">
            Our Mission
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Our mission is to make high-quality AI and software education accessible
            to everyone, regardless of location or background. We focus on 
            <span className="text-white"> practical learning, mentorship, and innovation</span> —
            guiding learners from the basics of programming to advanced fields like
            machine learning, web development, and creative coding.
          </p>
        </motion.div>

        {/* ====== What We Offer ====== */}
        <motion.div
          className="mt-20 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-lg hover:bg-white/10 transition-all">
            <h3 className="text-xl font-semibold text-cyan-300 mb-3">
              Hands-on Learning
            </h3>
            <p className="text-gray-400">
              Build real-world projects guided by mentors and industry experts.
              Learn by doing — from coding your first AI model to deploying modern
              web apps.
            </p>
          </div>

          <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-lg hover:bg-white/10 transition-all">
            <h3 className="text-xl font-semibold text-blue-400 mb-3">
              Mentorship & Guidance
            </h3>
            <p className="text-gray-400">
              Learn directly from professionals who’ve built real AI and tech
              products. Get one-on-one mentorship and career guidance every step
              of the way.
            </p>
          </div>

          <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-lg hover:bg-white/10 transition-all">
            <h3 className="text-xl font-semibold text-purple-400 mb-3">
              Global Community
            </h3>
            <p className="text-gray-400">
              Join a thriving global network of creators, coders, and innovators
              passionate about technology, design, and positive impact.
            </p>
          </div>
        </motion.div>

        {/* ====== 3D Scene / Orb Section ====== */}
        <div className="mt-24 max-w-4xl mx-auto">
          <SceneOrb />
        </div>

        {/* ====== Vision Section ====== */}
        <motion.div
          className="mt-24 max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-purple-400">
            Our Vision
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            We envision a world where learning is limitless — where anyone can
            create intelligent systems, immersive 3D experiences, and
            meaningful technology that solves real problems. <br /> At Himalayan
            AI Code School, we’re building the bridge between creativity and
            code, imagination and innovation.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
