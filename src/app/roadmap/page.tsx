"use client";
import RoadmapCard from "@/components/RoadmapCard";

export default function RoadmapPage() {
  const roadmap = [
    {
      phase: "Month 1: Programming & Logic Foundation",
      duration: "Week 1 - 4",
      summary:
        "Build strong logical reasoning, scripting confidence, and problem-solving ability required to become a real developer.",
      topics: [
        "JavaScript Foundations: variables, loops, arrays, functions, objects",
        "How to think like a programmer (algorithmic thinking)",
        "Debugging, error handling & clean code",
        "Git & GitHub workflow (branches, commits, pull requests)",
      ],
      outcomes: [
        "You can write programs without copying from YouTube",
        "You start solving coding problems confidently",
        "You maintain code in GitHub like a professional",
      ],
      projects: ["Console Quiz Game", "Calculator", "Todo App (LocalStorage)"],
      tools: ["VS Code", "Git", "GitHub", "Chrome DevTools"],
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      phase: "Month 2: Frontend Development Mastery",
      duration: "Week 5 - 8",
      summary:
        "Learn to build visually stunning, responsive and professional websites that work on all devices.",
      topics: [
        "HTML5 Semantic architecture",
        "CSS3, Flexbox, Grid & responsiveness",
        "TailwindCSS workflow + UI Design fundamentals",
        "JavaScript DOM Manipulation + animations",
      ],
      outcomes: [
        "You can convert Figma/UI designs into real responsive websites",
        "You understand layout systems in depth",
        "You gain UI confidence required for real freelance work",
      ],
      projects: ["Portfolio Website", "Landing Page Clone"],
      tools: ["TailwindCSS", "GSAP / Framer-Motion", "Figma"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      phase: "Month 3: Modern React & Next.js",
      duration: "Week 9 - 12",
      summary:
        "Master component-based UI, state management, and build real production-level frontend apps.",
      topics: [
        "React Hooks, Props, State & component patterns",
        "Next.js App Router, layouts & server components",
        "API Routes, client vs server rendering",
        "Optimizing apps for performance & SEO",
      ],
      outcomes: [
        "You understand modern React & Next.js deeply (not tutorial level)",
        "You know how to structure large applications",
      ],
      projects: ["Blog App with Search", "Dashboard UI"],
      tools: ["React DevTools", "Next.js 14", "Vercel"],
      gradient: "from-indigo-500 to-sky-500",
    },
    {
      phase: "Month 4: Backend & Database Engineering",
      duration: "Week 13 - 16",
      summary:
        "Learn server architecture, APIs, databases & authentication for full-stack development.",
      topics: [
        "Node.js + Express.js server development",
        "REST API & middleware",
        "MongoDB / PostgreSQL schema models",
        "JWT Authentication + Authorization",
      ],
      outcomes: [
        "You can create your own backend server",
        "You understand how databases are structured",
        "You can build secure login-based applications",
      ],
      projects: ["Authentication System", "Admin Dashboard Backend"],
      tools: ["Postman", "MongoDB Atlas / Supabase", "Express.js"],
      gradient: "from-emerald-400 to-green-600",
    },
    {
      phase: "Month 5: DevOps & Deployment",
      duration: "Week 17 - 20",
      summary:
        "Industry-level deployment, reliability, automation & application shipping.",
      topics: [
        "Linux fundamentals & server configuration",
        "Docker containerization",
        "CI/CD pipelines (GitHub Actions)",
        "Cloud Deployment: Vercel, Railway, Fly.io, AWS",
      ],
      outcomes: [
        "You can deploy applications professionally",
        "You understand server logs & scaling principles",
      ],
      projects: ["Deployed SaaS App / API Service"],
      tools: ["Docker", "Railway", "AWS / Fly.io"],
      gradient: "from-rose-500 to-orange-400",
    },
    {
      phase: "Month 6: Capstone Project & Job Prep",
      duration: "Week 21 - 24",
      summary:
        "Build a real startup-grade project and prepare for interviews and placements.",
      topics: [
        "System Design Basics",
        "Clean Architecture & Best Practices",
        "Portfolio Branding + Resume Building",
        "Mock Interviews + Job Strategy",
      ],
      outcomes: [
        "You build a live, scalable full-stack product",
        "You become interview-ready",
      ],
      projects: ["Full SaaS App / E-Commerce / Booking System"],
      tools: ["LinkedIn", "LeetCode", "Resume & Case Study Writing"],
      gradient: "from-yellow-400 to-red-500",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-[#050915] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-sky-500">
          Himalayan AI Code School Roadmap
        </h1>
        <p className="text-gray-400 mb-16 max-w-3xl mx-auto text-lg">
          A deep, structured learning path that builds true engineering skill.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {roadmap.map((stage, i) => (
            <RoadmapCard key={i} stage={stage} />
          ))}
        </div>
      </div>
    </main>
  );
}
