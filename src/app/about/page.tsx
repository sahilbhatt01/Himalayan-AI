"use client";

import { motion } from "framer-motion";
import SceneOrb from "@/components/SceneOrb";
import InfoCard from "@/components/InfoCard"; 

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } },
};

const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.25 } },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#030a1a] text-white overflow-hidden">
      <section className="pt-28 px-6 md:px-16">
        {/* ====== Title ====== */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-10"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          About Us
        </motion.h1>

        {/* ====== Intro Paragraph ====== */}
        <motion.p
          className="text-gray-300 text-lg max-w-4xl mx-auto text-center leading-relaxed"
          variants={fadeIn}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.3 }}
        >
          <strong>Himalayan AI Code School</strong> is an immersive learning hub
          designed to train the next generation of AI innovators and creative
          developers. We combine technology, design, and hands-on projects to
          empower learners to build real-world solutions that shape the future.
        </motion.p>

        <motion.div
          className="mt-16 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1 }}
        />

        {/* ====== Mission Section ====== */}
        <motion.div
          className="mt-16 max-w-5xl mx-auto text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-cyan-400">
            Our Mission
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Our mission is to make high-quality AI and software education
            accessible to everyone, regardless of location or background. We
            focus on
            <span className="text-white"> practical learning, mentorship, and innovation </span>
            — guiding learners from the basics of programming to advanced fields
            like machine learning, web development, and creative coding.
          </p>
        </motion.div>

        {/* ====== What We Offer (REPLACED WITH InfoCard) ====== */}
        <motion.div
          className="mt-20 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto"
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
        >
          {[
            {
              title: "Hands-on Learning",
              gradient: "from-cyan-500 via-blue-500 to-purple-500",
              text: "Build real-world projects guided by mentors and industry experts. Learn by doing — from coding your first AI model to deploying modern web apps.",
            },
            {
              title: "Mentorship & Guidance",
              gradient: "from-blue-500 via-purple-500 to-pink-500",
              text: "Learn directly from professionals who’ve built real AI and tech products. Get one-on-one mentorship and career guidance every step of the way.",
            },
            {
              title: "Global Community",
              gradient: "from-purple-500 via-pink-500 to-red-500",
              text: "Join a thriving global network of creators, coders, and innovators passionate about technology, design, and positive impact.",
            },
          ].map((item, i) => (
            <motion.div key={i} variants={fadeUp}>
              <InfoCard title={item.title} text={item.text} gradient={item.gradient} />
            </motion.div>
          ))}
        </motion.div>

        {/* ====== 3D Scene ====== */}
        <motion.div className="mt-24 max-w-4xl mx-auto">
          <SceneOrb />
        </motion.div>

        {/* ====== Vision Section ====== */}
        <motion.div
          className="mt-24 max-w-4xl mx-auto text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-purple-400">
            Our Vision
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            We envision a world where learning is limitless — where anyone can
            create intelligent systems, immersive 3D experiences, and meaningful
            technology that solves real problems. <br /> At Himalayan AI Code
            School, we’re building the bridge between creativity and code,
            imagination and innovation.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
