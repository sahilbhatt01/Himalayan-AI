"use client";

import { useState } from "react";
import InfoCard from "@/components/InfoCard";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.25 } },
};

export default function JoinPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to submit");

      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", program: "", message: "" });
    } catch (err: any) {
      console.error("Form submit error:", err.message);
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen bg-[#030a1a] text-white overflow-hidden">
      <section className="pt-28 px-6 md:px-16 text-center">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-6"
        >
          Join the Himalayan AI Family
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.3 }}
          className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Embark on a transformative journey into the world of Artificial
          Intelligence, 3D Web Experiences, and Creative Coding.
        </motion.p>

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-left mb-16"
        >
          {[
            {
              title: "Learn by Doing",
              gradient: "from-cyan-400 via-blue-400 to-purple-400",
              text: "Work on real projects that combine creativity and technology — from AI assistants to immersive 3D experiences.",
            },
            {
              title: "Global Mentorship",
              gradient: "from-blue-400 via-purple-500 to-pink-400",
              text: "Get guidance from experienced mentors and tech leaders who help you master the latest tools and frameworks.",
            },
            {
              title: "Future Opportunities",
              gradient: "from-purple-400 via-pink-500 to-red-400",
              text: "Grow your portfolio, collaborate with others, and open doors to internships, freelancing, or even startup creation.",
            },
          ].map((card, index) => (
            <motion.div key={index} variants={fadeUp}>
              <InfoCard
                title={card.title}
                text={card.text}
                gradient={card.gradient}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          whileInView="show"
          transition={{ delay: 0.4 }}
          className="max-w-md mx-auto bg-[#0b1630]/80 border border-blue-900 rounded-2xl p-8 shadow-xl shadow-blue-500/20 backdrop-blur"
        >
          <h2 className="text-2xl font-semibold text-cyan-400 mb-6">
            Apply Now
          </h2>

          {success && (
            <p className="text-green-400 mb-4 text-center">
              Application submitted successfully!
            </p>
          )}

          {errorMsg && (
            <p className="text-red-400 mb-4 text-center">{errorMsg}</p>
          )}

          <motion.form
            className="space-y-5"
            onSubmit={handleSubmit}
            initial="hidden"
            animate="show"
            variants={staggerParent}
          >
            <motion.input
              variants={fadeUp}
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Full Name"
              className="w-full p-3 bg-[#0b1630] rounded-lg border border-gray-700 focus:border-cyan-400"
              required
            />
            <motion.input
              variants={fadeUp}
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email Address"
              className="w-full p-3 bg-[#0b1630] rounded-lg border border-gray-700 focus:border-cyan-400"
              required
            />
            <motion.input
              variants={fadeUp}
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="text"
              placeholder="Phone Number (optional)"
              className="w-full p-3 bg-[#0b1630] rounded-lg border border-gray-700 focus:border-cyan-400"
            />

            <motion.select
              variants={fadeUp}
              name="program"
              value={formData.program}
              onChange={handleChange}
              className="w-full p-3 bg-[#0b1630] rounded-lg border border-gray-700 focus:border-cyan-400"
              required
            >
              <option value="">Choose Program</option>
              <option value="AI Development">AI Development</option>
              <option value="3D Web Design">3D Web Design</option>
              <option value="Full-Stack Projects">Full-Stack Projects</option>
              <option value="Creative Coding">Creative Coding</option>
            </motion.select>

            <motion.textarea
              variants={fadeUp}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us why you want to join..."
              rows={4}
              className="w-full p-3 bg-[#0b1630] rounded-lg border border-gray-700 focus:border-cyan-400"
              required
            />

            <motion.button
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              disabled={loading}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 py-3 rounded-lg font-semibold disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit Application"}
            </motion.button>
          </motion.form>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="mt-24 max-w-2xl mx-auto text-center mb-16"
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
