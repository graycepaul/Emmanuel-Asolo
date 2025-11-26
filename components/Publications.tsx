"use client";
import { motion } from "framer-motion";
import { FiExternalLink, FiFileText } from "react-icons/fi";

export default function Publications() {
  const publications = [
    {
      title:
        "AI-Powered Decision Support Systems for Sustainable Agriculture Using AI-Chatbot Solution",
      journal: "Journal of Development: Food, Energy, and Water Systems",
      year: "2024",
      type: "authored",
    },
    {
      title:
        "Enhancing Urban Surveillance with Fog Computing, Mobile Cloud, and Big Data Analytics in 5G Networks",
      journal:
        "International Journal of Emerging Multidisciplinary Technologies",
      year: "2024",
      type: "authored",
    },
    {
      title:
        "ChatGPT and the Future of Generative AI: Architecture, Limitations, and Advancements in Large Language Models",
      journal: "American Journal of Business and Social Research",
      year: "2025",
      type: "co-authored",
    },
    {
      title:
        "Artificial Intelligence-Driven Fuzzy Logic Approach for Optimal Well Selection in Gas Lift Optimization",
      journal: "Results in Engineering (ScienceDirect)",
      year: "2025",
      type: "co-authored",
    },
  ];

  const handlePublicationClick = (title: string) => {
    const searchQuery = encodeURIComponent(title);
    window.open(
      `https://scholar.google.com/scholar?q=${searchQuery}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section id="publications" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Research Publications
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Academic contributions to AI and Data Science research
          </p>
        </motion.div>

        {/* Minimal Cards Layout */}
        <div className="grid md:grid-cols-2 gap-4 max-w-6xl mx-auto">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div
                onClick={() => handlePublicationClick(pub.title)}
                className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-5 cursor-pointer hover:border-yellow-400/30 transition-all duration-300 h-full flex flex-col"
              >
                {/* Year and Type */}
                <div className="flex justify-between items-center mb-3">
                  <span className="text-yellow-400 text-sm font-semibold">
                    {pub.year}
                  </span>
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      pub.type === "authored"
                        ? "bg-yellow-400/10 text-yellow-400"
                        : "bg-blue-400/10 text-blue-400"
                    }`}
                  >
                    {pub.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-white text-sm font-medium mb-3 line-clamp-3 group-hover:text-yellow-400 transition-colors duration-300">
                  {pub.title}
                </h3>

                {/* Journal */}
                <div className="flex items-center gap-2 text-gray-400 text-xs mt-auto">
                  <FiFileText className="w-3 h-3 text-yellow-400/70" />
                  <span className="line-clamp-1">{pub.journal}</span>
                </div>

                {/* Hover Action */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FiExternalLink className="w-4 h-4 text-yellow-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Simple CTA */}
        <div className="text-center mt-8">
          <button
            onClick={() => window.open("https://scholar.google.com", "_blank")}
            className="text-yellow-400 hover:text-yellow-300 text-sm transition-colors duration-300"
          >
            View all publications on Google Scholar →
          </button>
        </div>
      </div>
    </section>
  );
}
