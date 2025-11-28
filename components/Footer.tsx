"use client";
import { motion } from "framer-motion";
import { FiLinkedin, FiMail } from "react-icons/fi";
import { useTheme } from "@/context/ThemeContext";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      className={`border-t py-12 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-800/50 border-gray-800"
          : "bg-gray-300 border-gray-300"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`text-2xl font-bold mb-6 bg-linear-to-r bg-clip-text text-transparent transition-colors duration-300 ${
              theme === "dark"
                ? "from-yellow-600 to-slate-400"
                : "from-yellow-700 to-slate-500"
            }`}
          >
            Let&apos;s Build the Future Together
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`mb-8 max-w-md mx-auto transition-colors duration-300 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Interested in collaborating on AI research or innovative projects?
            I&apos;m always open to discussing new opportunities.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center space-x-6 mb-8"
          >
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              href="https://linkedin.com/in/emmanuel-asolo-b197091b7"
              className={`p-3 rounded-full hover:bg-yellow-600 transition-colors duration-300 ${
                theme === "dark" ? "bg-gray-800" : "bg-gray-400/50"
              }`}
            >
              <FiLinkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              href="mailto:e.asolo-2023@hull.ac.uk"
              className={`p-3 rounded-full hover:bg-yellow-600 transition-colors duration-300 ${
                theme === "dark" ? "bg-gray-800" : "bg-gray-400/50"
              }`}
            >
              <FiMail className="w-6 h-6" />
            </motion.a>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className={`text-sm transition-colors duration-300 ${
              theme === "dark" ? "text-gray-600" : "text-gray-500"
            }`}
          >
            © 2025 Emmanuel Asolo. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
