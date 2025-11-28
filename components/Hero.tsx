"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiCode, FiUser, FiCpu, FiChevronDown } from "react-icons/fi";
import { useTheme } from "@/context/ThemeContext";

interface HeroProps {
  id: string;
  setActiveSection: (section: string) => void;
}

export default function Hero({ id, setActiveSection }: HeroProps) {
  const { theme } = useTheme();

  // Define colors based on theme
  const yellowColor = theme === "dark" ? "#BFA615" : "#854d0e"; // yellow-800 for light mode
  const yellowHoverColor = theme === "dark" ? "#f59e0b" : "#a16207"; // yellow-700 for light mode hover

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <section
      id={id}
      className={`min-h-screen flex items-center relative overflow-hidden pt-10 lg:pt-0 -mt-2 lg:-mt-12 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gradient-to-b from-[#0F141D] to-gray-950"
          : "bg-gradient-to-b from-gray-300 to-white"
      }`}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`transition-colors duration-300 ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            {/* Welcome Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 mb-6 mt-4 lg:mt-0"
            >
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: yellowColor }}
              ></div>
              <span
                className={`text-sm font-medium tracking-wider transition-colors duration-300 ${
                  theme === "dark" ? "text-slate-300" : "text-gray-600"
                }`}
              >
                AI RESEARCHER & DATA SCIENTIST
              </span>
            </motion.div>

            {/* Main Heading */}
            <h1
              className={`text-5xl md:text-6xl font-bold mb-6 leading-tight transition-colors duration-300 ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              Emmanuel Asolo
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={`text-lg mb-8 font-light tracking-wide transition-colors duration-300 ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              MSc Artificial Intelligence & Data Science
              <span className="mx-2" style={{ color: yellowColor }}>
                •
              </span>
              University of Hull
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className={`text-sm lg:text-md mb-8 leading-relaxed max-w-lg border-l-4 pl-4 transition-colors duration-300 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
              style={{ borderLeftColor: yellowColor }}
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
                  backgroundColor: yellowHoverColor,
                  boxShadow: `0 10px 30px -10px ${
                    theme === "dark"
                      ? "rgba(245, 158, 11, 0.3)"
                      : "rgba(133, 77, 14, 0.3)"
                  }`,
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                style={{
                  backgroundColor: theme === "dark" ? "#f59e0b" : "#864D0F", // yellow-500 for light mode button
                  color: theme === "dark" ? "black" : "black",
                }}
                onClick={() => scrollToSection("projects")}
              >
                <FiCode className="w-5 h-5" />
                <span>View My Work</span>
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  borderColor: yellowColor,
                  backgroundColor:
                    theme === "dark"
                      ? "rgba(191, 166, 21, 0.1)"
                      : "rgba(133, 77, 14, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 border-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                  theme === "dark"
                    ? "border-gray-600 text-white"
                    : "border-gray-400 text-gray-800"
                }`}
                onClick={() => scrollToSection("about")}
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
                  <div
                    className="text-2xl font-bold mb-1"
                    style={{ color: yellowColor }}
                  >
                    {stat.number}
                  </div>
                  <div
                    className={`text-xs uppercase tracking-wider transition-colors duration-300 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
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
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              {/* Ultra Clean Design */}
              <motion.div
                whileHover={{ scale: 1.005 }}
                className={`relative aspect-[3/4] rounded-lg overflow-hidden border shadow-xl transition-colors duration-300 ${
                  theme === "dark"
                    ? "bg-gray-900 border-gray-800"
                    : "bg-gray-100 border-gray-300"
                }`}
              >
                {/* Placeholder for image - replace with actual Image component */}
                <div
                  className={`w-full h-full flex items-center justify-center transition-colors duration-300 ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-gray-800 to-gray-900"
                      : "bg-gradient-to-br from-gray-200 to-gray-100"
                  }`}
                >
                  <div
                    className={`text-center transition-colors duration-300 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    <div
                      className="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center shadow-2xl"
                      style={{ backgroundColor: yellowColor }}
                    >
                      <span className="text-3xl font-bold text-black">EA</span>
                    </div>
                    <p className="text-lg font-medium">Emmanuel Asolo</p>
                    <p
                      className={`text-sm mt-2 transition-colors duration-300 ${
                        theme === "dark" ? "text-gray-500" : "text-gray-500"
                      }`}
                    >
                      AI & Data Science
                    </p>
                  </div>
                </div>

                <Image
                  src="/emmanuel-photo.jpg"
                  alt="Emmanuel Asolo"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>

              {/* Minimal Text Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className={`absolute bottom-4 left-4 backdrop-blur-sm rounded px-3 py-2 transition-colors duration-300 ${
                  theme === "dark" ? "bg-black/70" : "bg-white/80"
                }`}
              >
                <div
                  className={`font-semibold transition-colors duration-300 ${
                    theme === "dark" ? "text-white" : "text-gray-800"
                  }`}
                >
                  MSc AI & Data Science
                </div>
                <div className="text-xs" style={{ color: yellowColor }}>
                  AI Research
                </div>
              </motion.div>

              {/* Single Floating Element */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -top-2 -right-2 rounded-full w-8 h-8 flex items-center justify-center shadow-lg"
                style={{ backgroundColor: yellowColor }}
              >
                <FiCpu className="w-4 h-4 text-black" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="hidden lg:flex mt-20 absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`flex flex-col items-center transition-colors duration-300 ${
              theme === "dark" ? "text-slate-400/70" : "text-gray-500/70"
            }`}
          >
            <span className="text-xs uppercase tracking-widest mb-2">
              Scroll to explore
            </span>
            <FiChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
