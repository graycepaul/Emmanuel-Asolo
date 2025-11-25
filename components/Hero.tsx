"use client";

import { motion } from "framer-motion";
import { Brain, ChevronDown, Cpu, Network } from "lucide-react";

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center relative pt-20 bg-white">
      {/* Minimal Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-gray-400 rounded-full opacity-30"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-gray-600 rounded-full opacity-40"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-gray-500 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-gray-700 rounded-full opacity-50"></div>

        {/* Neural Network Lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          viewBox="0 0 100 100"
        >
          <path
            d="M10,10 Q50,30 90,10"
            stroke="black"
            strokeWidth="0.5"
            fill="none"
          />
          <path
            d="M10,30 Q50,50 90,30"
            stroke="black"
            strokeWidth="0.5"
            fill="none"
          />
          <path
            d="M10,50 Q50,70 90,50"
            stroke="black"
            strokeWidth="0.5"
            fill="none"
          />
          <path
            d="M10,70 Q50,90 90,70"
            stroke="black"
            strokeWidth="0.5"
            fill="none"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="floating mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900 rounded-full flex items-center justify-center border border-gray-300 shadow-lg">
              <Brain className="w-16 h-16 text-white" />
            </div>
          </div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
              Emmanuel Asolo
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-8 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            AI & Machine Learning Engineer
          </motion.p>

          <motion.p
            className="text-lg text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Building intelligent systems that learn, adapt, and transform
            businesses through cutting-edge AI and machine learning
            technologies.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.a
              href="#projects"
              className="px-8 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all border border-gray-900 shadow-sm hover:shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-3 border border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-50 transition-all shadow-sm hover:shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Tech Stack Preview */}
          <motion.div
            className="mt-16 flex flex-wrap justify-center gap-6 text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {["TensorFlow", "PyTorch", "Python", "Next.js", "TypeScript"].map(
              (tech) => (
                <div key={tech} className="flex items-center space-x-1 text-sm">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <span>{tech}</span>
                </div>
              )
            )}
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-gray-400 w-6 h-6" />
        </motion.div>
      </div>
    </div>
  );
}
