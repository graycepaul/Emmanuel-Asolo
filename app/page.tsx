"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FiLinkedin,
  FiMail,
  FiChevronDown,
  FiCode,
  FiCpu,
  FiUser,
} from "react-icons/fi";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Publications from "@/components/Publications";
import Projects from "@/components/Projects";
import Image from "next/image";
import { sections } from "./data";
import Navigation from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function MLPortfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-[#BFA615] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <motion.h2
            className="text-2xl font-bold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Emmanuel Asolo
          </motion.h2>
          <motion.p
            className="text-[#BFA615] mt-2"
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
    <div className="min-h-screen text-white ">
      {/* Navigation */}
      <Navigation
        sections={sections}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <Hero id="home" setActiveSection={setActiveSection} /> <About />
      <Skills />
      <Projects />
      <Experience />
      <Publications />
      <Footer />
    </div>
  );
}
