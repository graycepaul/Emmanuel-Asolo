"use client";
import { motion } from "framer-motion";
import { FiCode, FiUser, FiCpu, FiChevronDown } from "react-icons/fi";

interface HeroProps {
  id: string;
  setActiveSection: (section: string) => void;
}

export default function Hero({ id, setActiveSection }: HeroProps) {
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
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-b from-black to-gray-950 pt-10 lg:pt-0"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center ">
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
              <div className="w-2 h-2 bg-[#BFA615] rounded-full animate-pulse"></div>
              <span className="text-slate-300 text-sm font-medium tracking-wider">
                AI RESEARCHER & DATA SCIENTIST
              </span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
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
              <span className="text-[#BFA615] mx-2">•</span>
              University of Hull
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-sm lg:text-md text-gray-400 mb-8 leading-relaxed max-w-lg border-l-4 border-[#BFA615] pl-4"
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
                className="px-8 py-4 bg-[#BFA615] text-black rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                onClick={() => scrollToSection("projects")}
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
                className="px-8 py-4 border-2 border-gray-600 text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 hover:border-[#BFA615]"
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
                  <div className="text-2xl font-bold text-[#BFA615] mb-1">
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
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              {/* Ultra Clean Design */}
              <motion.div
                whileHover={{ scale: 1.005 }}
                className="relative aspect-[3/4] rounded-lg overflow-hidden bg-gray-900 border border-gray-800 shadow-xl"
              >
                {/* Placeholder for image - replace with actual Image component */}
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <div className="w-32 h-32 bg-[#BFA615] rounded-full mx-auto mb-4 flex items-center justify-center shadow-2xl">
                      <span className="text-3xl font-bold text-black">EA</span>
                    </div>
                    <p className="text-lg font-medium">Emmanuel Asolo</p>
                    <p className="text-sm text-gray-500 mt-2">
                      AI & Data Science
                    </p>
                  </div>
                </div>

                {/* Uncomment when you have the actual image */}
                {/* <Image
                  src="/emmanuel-photo.jpg"
                  alt="Emmanuel Asolo"
                  fill
                  className="object-cover"
                  priority
                /> */}
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
                <div className="text-[#BFA615] text-xs">AI Research</div>
              </motion.div>

              {/* Single Floating Element */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -top-2 -right-2 bg-[#BFA615] text-black rounded-full w-8 h-8 flex items-center justify-center shadow-lg"
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
          className="hidden lg:flex mt-20 absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
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
  );
}
