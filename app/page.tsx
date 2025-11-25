"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FiLinkedin,
  FiMail,
  FiChevronDown,
  FiCode,
  FiCpu,
  // FiDatabase,
  // FiBarChart2,
  FiAward,
  // FiBook,
  // FiUsers,
  FiUser,
} from "react-icons/fi";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Skills from "@/components/Skills";
// import Experience from "@/components/Experience";
// import Publications from "@/components/Publications";
// import Projects from "@/components/Projects";
import Image from "next/image";

export default function MLPortfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  const sections = [
    { id: "home", name: "Home" },
    { id: "about", name: "About" },
    { id: "skills", name: "Skills" },
    { id: "experience", name: "Experience" },
    { id: "projects", name: "Projects" },
    { id: "publications", name: "Publications" },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <motion.h2
            className="text-2xl font-bold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Emmanuel Asolo
          </motion.h2>
          <motion.p
            className="text-yellow-600 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            AI & Data Science Portfolio
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://linkedin.com/in/emmanuel-asolo-b197091b7"
                className="p-2 rounded-lg bg-gray-800 hover:bg-yellow-600 transition-colors"
              >
                <FiLinkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:e.asolo-2023@hull.ac.uk"
                className="p-2 rounded-lg bg-gray-800 hover:bg-yellow-600 transition-colors"
              >
                <FiMail className="w-5 h-5" />
              </motion.a>
            </div>
            <div className=" flex gap-3 lg:gap-8 text-sm lg:text-md">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`transition-all duration-300 ${
                    activeSection === section.id
                      ? "text-yellow-500 border-b-2 border-slate-300 "
                      : "text-slate-100 hover:text-slate-300"
                  }`}
                >
                  {section.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center relative overflow-hidden bg-black mt-20 lg:mt-0"
      >
        {/* Yellow Accent Elements */}
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-9 lg:mt-8">
            {/* Text Content - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white"
            >
              {/* Welcome Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 mb-6"
              >
                <div className="w-2 h-2 bg-yellow-600 rounded-full animate-pulse"></div>
                <span className="text-slate-300 text-sm font-medium tracking-wider">
                  AI RESEARCHER & DATA SCIENTIST
                </span>
              </motion.div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl  font-bold mb-6 leading-tight">
                Emmanuel Asolo
              </h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-300 mb-8 font-light tracking-wide"
              >
                MSc Artificial Intelligence & Data Science
                <span className="text-yellow-600 mx-2">•</span>
                University of Hull
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-sm lg:text-md text-gray-400 mb-8 leading-relaxed max-w-lg border-l-4 border-yellow-400 pl-4"
              >
                Research-driven AI specialist passionate about building ethical
                and explainable AI systems. Currently advancing research in Deep
                Learning and Natural Language Processing.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#f59e0b",
                    boxShadow: "0 10px 30px -10px rgba(245, 158, 11, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-yellow-600 text-black rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                  onClick={() => setActiveSection("projects")}
                >
                  <FiCode className="w-5 h-5" />
                  <span>View My Work</span>
                </motion.button>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    borderColor: "#f59e0b",
                    backgroundColor: "rgba(245, 158, 11, 0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-gray-600 text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 hover:border-yellow-400"
                  onClick={() => setActiveSection("about")}
                >
                  <FiUser className="w-5 h-5" />
                  <span>About Me</span>
                </motion.button>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex gap-8"
              >
                {[
                  { number: "4+", label: "Years Experience" },
                  { number: "10+", label: "Publications" },
                  { number: "MSc", label: "AI & Data Science" },
                ].map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-yellow-600 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Photo Section - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className=" relative lg:flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-md">
                {/* Ultra Clean Design */}
                <motion.div
                  whileHover={{ scale: 1.005 }}
                  className="relative aspect-[3/4] rounded-lg overflow-hidden bg-gray-900 border border-gray-800 shadow-xl"
                >
                  <Image
                    src="/emmanuel-photo.jpg"
                    alt="Emmanuel Asolo"
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* Subtle Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600" />
                </motion.div>

                {/* Minimal Text Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded px-3 py-2"
                >
                  <div className="text-white font-semibold">
                    MSc AI & Data Science
                  </div>
                  <div className="text-yellow-400 text-xs">AI Research</div>
                </motion.div>

                {/* Single Floating Element */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -top-2 -right-2 bg-yellow-400 text-black rounded-full w-8 h-8 flex items-center justify-center shadow-lg"
                >
                  <FiCpu className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="hidden lg:flex mt-20 absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 "
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-slate-400/70"
            >
              <span className="text-xs uppercase tracking-widest mb-2">
                Scroll to explore
              </span>
              <FiChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </div>
      </section>
      <About />
      <Skills />
      {/* <Projects />
      <Experience />
      <Publications />   */}
      <Footer />
    </div>
  );
}
