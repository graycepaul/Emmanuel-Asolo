"use client";
import { motion } from "framer-motion";

export default function Publications() {
  return (
    <section
      id="publications"
      className="py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Research Publications
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {[
            {
              title:
                "AI-Powered Decision Support Systems for Sustainable Agriculture Using AI-Chatbot Solution",
              journal:
                "Journal of Development: Food, Energy, and Water Systems (JD-FEWS), 2024",
              type: "Authored",
            },
            {
              title:
                "Enhancing Urban Surveillance with Fog Computing, Mobile Cloud, and Big Data Analytics in 5G Networks",
              journal:
                "International Journal of Emerging Multidisciplinary Technologies (IJEMT), 2024",
              type: "Authored",
            },
            {
              title:
                "ChatGPT and the Future of Generative AI: Architecture, Limitations, and Advancements in Large Language Models",
              journal:
                "American Journal of Business and Social Research (AJBSR), 2025",
              type: "Co-authored",
            },
            {
              title:
                "Artificial Intelligence-Driven Fuzzy Logic Approach for Optimal Well Selection in Gas Lift Optimization",
              journal: "Results in Engineering (ScienceDirect), 2025",
              type: "Co-authored",
            },
          ].map((pub, index) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 hover:border-emerald-400/50 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors flex-1">
                  {pub.title}
                </h3>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full mt-2 md:mt-0 ${
                    pub.type === "Authored"
                      ? "bg-emerald-400/10 text-emerald-400"
                      : "bg-cyan-400/10 text-cyan-400"
                  }`}
                >
                  {pub.type}
                </span>
              </div>
              <p className="text-cyan-400 text-sm">{pub.journal}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
