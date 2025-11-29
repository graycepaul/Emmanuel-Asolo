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
import { useTheme } from "@/context/ThemeContext";

interface PublicationsProps {
  id: string;
}

export default function Publications({ id }: PublicationsProps) {
  const [showAll, setShowAll] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const { theme } = useTheme();

  // Define colors based on theme
  const yellowColor = theme === "dark" ? "#BFA615" : "#854d0e"; // yellow-800 for light mode
  const yellowHoverColor = theme === "dark" ? "#f59e0b" : "#a16207"; // yellow-700 for light mode hover

  const initialPublications = publications.slice(0, 4);
  const additionalPublications = publications.slice(4);

  const handlePublicationClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
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
    <section
      id={id}
      className={`py-20 transition-colors duration-300 ${
        theme === "dark" ? "bg-slate-800" : "bg-gray-200"
      }`}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300 ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            Research Publications
          </h2>
          <p
            className={`max-w-2xl mx-auto transition-colors duration-300 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
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
                onClick={() => handlePublicationClick(pub.url)}
                className={`border rounded-lg p-5 cursor-pointer transition-all duration-300 h-full flex flex-col transition-colors duration-300 ${
                  theme === "dark"
                    ? "bg-gray-900/30 border-gray-800/50 hover:border-yellow-400/30"
                    : "bg-white/80 border-gray-300 hover:border-yellow-800/30"
                }`}
              >
                {/* Year and Type */}
                <div className="flex justify-between items-center mb-3">
                  <span
                    className="text-sm font-semibold"
                    style={{ color: yellowColor }}
                  >
                    {pub.year}
                  </span>
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      pub.type === "authored"
                        ? theme === "dark"
                          ? "bg-yellow-400/10 text-yellow-400"
                          : "bg-yellow-800/10 text-yellow-800"
                        : theme === "dark"
                        ? "bg-blue-400/10 text-blue-400"
                        : "bg-blue-800/10 text-blue-800"
                    }`}
                  >
                    {pub.type}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className={`text-sm font-medium mb-3 line-clamp-3 transition-colors duration-300 ${
                    theme === "dark"
                      ? "text-white group-hover:text-yellow-400"
                      : "text-gray-800 group-hover:text-yellow-800"
                  }`}
                >
                  {pub.title}
                </h3>

                {/* Journal */}
                <div
                  className={`flex items-center gap-2 text-xs mt-auto transition-colors duration-300 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <FiFileText
                    className="w-3 h-3"
                    style={{
                      color:
                        theme === "dark"
                          ? "rgba(191, 166, 21, 0.7)"
                          : "rgba(133, 77, 14, 0.7)",
                    }}
                  />
                  <span className="line-clamp-1">{pub.journal}</span>
                </div>

                {/* Hover Action */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FiExternalLink
                    className="w-4 h-4"
                    style={{ color: yellowColor }}
                  />
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
                className="text-sm transition-colors duration-300 rounded-lg px-6 py-2"
                style={{
                  color: yellowColor,
                  border: `1px solid ${
                    theme === "dark"
                      ? "rgba(191, 166, 21, 0.3)"
                      : "rgba(133, 77, 14, 0.3)"
                  }`,
                  backgroundColor:
                    theme === "dark"
                      ? "rgba(191, 166, 21, 0.1)"
                      : "rgba(133, 77, 14, 0.1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color =
                    theme === "dark" ? "#f59e0b" : "#a16207";
                  e.currentTarget.style.borderColor =
                    theme === "dark"
                      ? "rgba(245, 158, 11, 0.5)"
                      : "rgba(161, 98, 7, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = yellowColor;
                  e.currentTarget.style.borderColor =
                    theme === "dark"
                      ? "rgba(191, 166, 21, 0.3)"
                      : "rgba(133, 77, 14, 0.3)";
                }}
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
                <h3
                  className={`text-lg font-semibold transition-colors duration-300 ${
                    theme === "dark" ? "text-white" : "text-gray-800"
                  }`}
                >
                  Additional Publications
                </h3>
                <div className="flex space-x-2">
                  <button
                    onClick={scrollLeft}
                    className={`p-2 rounded-lg transition-all duration-300 transition-colors duration-300 ${
                      theme === "dark" ? "bg-gray-800" : "bg-gray-300"
                    }`}
                    style={{
                      color: theme === "dark" ? "#f3f4f6" : "#1f2937",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = yellowColor;
                      e.currentTarget.style.color = "black";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor =
                        theme === "dark" ? "#374151" : "#e5e7eb";
                      e.currentTarget.style.color =
                        theme === "dark" ? "#f3f4f6" : "#1f2937";
                    }}
                  >
                    <FiChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={scrollRight}
                    className={`p-2 rounded-lg transition-all duration-300 transition-colors duration-300 ${
                      theme === "dark" ? "bg-gray-800" : "bg-gray-300"
                    }`}
                    style={{
                      color: theme === "dark" ? "#f3f4f6" : "#1f2937",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = yellowColor;
                      e.currentTarget.style.color = "black";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor =
                        theme === "dark" ? "#374151" : "#e5e7eb";
                      e.currentTarget.style.color =
                        theme === "dark" ? "#f3f4f6" : "#1f2937";
                    }}
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
                        onClick={() => handlePublicationClick(pub.url)}
                        className={`border rounded-lg p-5 cursor-pointer transition-all duration-300 h-full flex flex-col group transition-colors duration-300 ${
                          theme === "dark"
                            ? "bg-gray-900/30 border-gray-800/50 hover:border-yellow-400/30"
                            : "bg-white/80 border-gray-300 hover:border-yellow-800/30"
                        }`}
                      >
                        {/* Year and Type */}
                        <div className="flex justify-between items-center mb-3">
                          <span
                            className="text-sm font-semibold"
                            style={{ color: yellowColor }}
                          >
                            {pub.year}
                          </span>
                          <span
                            className={`text-xs px-2 py-1 rounded ${
                              pub.type === "authored"
                                ? theme === "dark"
                                  ? "bg-yellow-400/10 text-yellow-400"
                                  : "bg-yellow-800/10 text-yellow-800"
                                : theme === "dark"
                                ? "bg-blue-400/10 text-blue-400"
                                : "bg-blue-800/10 text-blue-800"
                            }`}
                          >
                            {pub.type}
                          </span>
                        </div>

                        {/* Title */}
                        <h3
                          className={`text-sm font-medium mb-3 line-clamp-3 transition-colors duration-300 ${
                            theme === "dark"
                              ? "text-white group-hover:text-yellow-400"
                              : "text-gray-800 group-hover:text-yellow-800"
                          }`}
                        >
                          {pub.title}
                        </h3>

                        {/* Journal */}
                        <div
                          className={`flex items-center gap-2 text-xs mt-auto transition-colors duration-300 ${
                            theme === "dark" ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          <FiFileText
                            className="w-3 h-3"
                            style={{
                              color:
                                theme === "dark"
                                  ? "rgba(191, 166, 21, 0.7)"
                                  : "rgba(133, 77, 14, 0.7)",
                            }}
                          />
                          <span className="line-clamp-2">{pub.journal}</span>
                        </div>

                        {/* Hover Action */}
                        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <FiExternalLink
                            className="w-4 h-4"
                            style={{ color: yellowColor }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Scroll gradient indicators */}
                <div
                  className={`absolute left-0 bottom-0 w-8 bg-gradient-to-r pointer-events-none rounded-l-lg transition-colors duration-300 ${
                    theme === "dark"
                      ? "from-slate-950 to-transparent top-0"
                      : "from-gray-400 to-transparent -top-2"
                  }`}
                />
                <div
                  className={`absolute right-0 bottom-0 w-8 bg-gradient-to-l pointer-events-none rounded-r-lg transition-colors duration-300 ${
                    theme === "dark"
                      ? "from-slate-950 to-transparent top-0"
                      : "from-gray-400 to-transparent -top-2"
                  }`}
                />
              </div>

              {/* Hide All Publications Button */}
              <div className="text-center mt-6">
                <button
                  onClick={() => setShowAll(false)}
                  className={`text-sm transition-colors duration-300 ${
                    theme === "dark"
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
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
          <div
            className={`inline-flex items-center space-x-6 text-sm transition-colors duration-300 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <span>
              Total Publications:
              <strong style={{ color: yellowColor }}>
                {" "}
                {publications.length}
              </strong>
            </span>
            <span>•</span>
            <span>
              Authored:{" "}
              <strong style={{ color: yellowColor }}>
                {publications.filter((p) => p.type === "authored").length}
              </strong>
            </span>
            <span>•</span>
            <span>
              Co-authored:
              <strong style={{ color: yellowColor }}>
                {" "}
                {publications.filter((p) => p.type === "co-authored").length}
              </strong>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
