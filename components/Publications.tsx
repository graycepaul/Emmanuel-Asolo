"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiExternalLink,
  FiFileText,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { publications } from "@/app/data";

interface PublicationsProps {
  id: string;
}

export default function Publications({ id }: PublicationsProps) {
  const [showAll, setShowAll] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const initialPublications = publications.slice(0, 4);
  const additionalPublications = publications.slice(4);

  const handlePublicationClick = (title: string) => {
    const searchQuery = encodeURIComponent(title);
    window.open(
      `https://scholar.google.com/scholar?q=${searchQuery}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const scrollLeft = () => {
    const container = document.getElementById("publications-scroll");
    if (container) {
      container.scrollLeft -= 300;
      setScrollPosition(container.scrollLeft - 300);
    }
  };

  const scrollRight = () => {
    const container = document.getElementById("publications-scroll");
    if (container) {
      container.scrollLeft += 300;
      setScrollPosition(container.scrollLeft + 300);
    }
  };

  return (
    <section id={id} className="py-20 bg-slate-800">
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

        {/* Initial Publications Grid */}
        <div className="grid md:grid-cols-2 gap-4 max-w-6xl mx-auto mb-8">
          {initialPublications.map((pub, index) => (
            <motion.div
              key={`${pub.title}-${index}`}
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

        {/* View All Publications Toggle */}
        <AnimatePresence>
          {!showAll && additionalPublications.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center mb-8"
            >
              <button
                onClick={() => setShowAll(true)}
                className="text-yellow-400 hover:text-yellow-300 text-sm transition-colors duration-300 border border-yellow-400/30 hover:border-yellow-400/50 rounded-lg px-6 py-2"
              >
                View All Publications ({publications.length})
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Additional Publications Horizontal Scroll */}
        <AnimatePresence>
          {showAll && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white text-lg font-semibold">
                  Additional Publications
                </h3>
                <div className="flex space-x-2">
                  <button
                    onClick={scrollLeft}
                    className="p-2 rounded-lg bg-gray-800 hover:bg-yellow-400 hover:text-black transition-all duration-300"
                  >
                    <FiChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={scrollRight}
                    className="p-2 rounded-lg bg-gray-800 hover:bg-yellow-400 hover:text-black transition-all duration-300"
                  >
                    <FiChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="relative">
                <div
                  id="publications-scroll"
                  className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide scroll-smooth"
                  style={{ scrollBehavior: "smooth" }}
                >
                  {additionalPublications.map((pub, index) => (
                    <motion.div
                      key={`additional-${pub.title}-${index}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex-shrink-0 w-80" // Fixed width for consistent cards
                    >
                      <div
                        onClick={() => handlePublicationClick(pub.title)}
                        className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-5 cursor-pointer hover:border-yellow-400/30 transition-all duration-300 h-full flex flex-col group"
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
                          <span className="line-clamp-2">{pub.journal}</span>
                        </div>

                        {/* Hover Action */}
                        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <FiExternalLink className="w-4 h-4 text-yellow-400" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Scroll gradient indicators */}
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black to-transparent pointer-events-none" />
              </div>

              {/* Hide All Publications Button */}
              <div className="text-center mt-6">
                <button
                  onClick={() => setShowAll(false)}
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                >
                  Hide Additional Publications
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Publication Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center space-x-6 text-sm text-gray-400">
            <span>
              Total Publications:{" "}
              <strong className="text-yellow-400">{publications.length}</strong>
            </span>
            <span>•</span>
            <span>
              Authored:{" "}
              <strong className="text-yellow-400">
                {publications.filter((p) => p.type === "authored").length}
              </strong>
            </span>
            <span>•</span>
            <span>
              Co-authored:{" "}
              <strong className="text-yellow-400">
                {publications.filter((p) => p.type === "co-authored").length}
              </strong>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
