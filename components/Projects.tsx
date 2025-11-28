"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiGithub, FiAward } from "react-icons/fi";
import { useState } from "react";
import { allProjects, NavProps } from "@/app/data";
import { useTheme } from "@/context/ThemeContext";

export default function Projects({ id }: NavProps) {
  const [showAll, setShowAll] = useState(false);
  const { theme } = useTheme();

  // Define colors based on theme
  const yellowColor = theme === "dark" ? "#BFA615" : "#854d0e"; // yellow-800 for light mode
  const yellowHoverColor = theme === "dark" ? "#f59e0b" : "#a16207"; // yellow-700 for light mode hover
  const yellowGradientFrom =
    theme === "dark" ? "rgba(191, 166, 21, 0.8)" : "rgba(133, 77, 14, 0.8)";
  const yellowGradientTo =
    theme === "dark" ? "rgba(245, 158, 11, 0.6)" : "rgba(161, 98, 7, 0.6)";

  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 4);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <section
      id={id}
      className={`py-20 relative overflow-hidden transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gradient-to-b from-black to-gray-900"
          : "bg-gradient-to-b from-gray-300 to-white"
      }`}
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-300 ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            Featured Projects
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={`text-lg max-w-2xl mx-auto leading-relaxed transition-colors duration-300 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Explore my work in AI, Data Science, and Machine Learning.
            {!showAll && " Showing 4 of " + allProjects.length + " projects."}
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative"
              >
                {/* Project Card */}
                <div
                  className={`relative backdrop-blur-sm rounded-xl p-5 transition-color duration-500 h-full flex flex-col overflow-hidden transition-colors duration-300 ${
                    theme === "dark"
                      ? "bg-gray-900 border-gray-800/60 group-hover:border-gray-700"
                      : "bg-white border-gray-300 group-hover:border-gray-200"
                  }`}
                >
                  {/* Subtle Accent Bar */}
                  <div
                    className="absolute top-0 left-0 w-full h-1 transform scale-x-100 group-hover:bg-white transition-transform duration-500"
                    style={{
                      background: `linear-gradient(to right, ${yellowGradientFrom}, ${yellowGradientTo}, ${yellowGradientFrom})`,
                    }}
                  />

                  {/* Header Section */}
                  <div className="flex justify-between items-start mb-4">
                    <span
                      className={`text-xs font-medium px-2.5 py-1 rounded-full border transition-colors duration-300 ${
                        project.status === "Finalist"
                          ? theme === "dark"
                            ? "bg-yellow-400/10 text-yellow-300 border-yellow-400/20"
                            : "bg-yellow-800/10 text-yellow-800 border-yellow-800/20"
                          : project.status === "Research"
                          ? theme === "dark"
                            ? "bg-blue-400/10 text-blue-300 border-blue-400/20"
                            : "bg-blue-800/10 text-blue-800 border-blue-800/20"
                          : theme === "dark"
                          ? "bg-gray-400/10 text-gray-300 border-gray-400/20"
                          : "bg-gray-400/10 text-gray-600 border-gray-400/20"
                      }`}
                    >
                      {project.status}
                    </span>

                    {project.featured && (
                      <div
                        className="flex items-center space-x-1"
                        style={{ color: yellowColor }}
                      >
                        <FiAward className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="flex-1 mb-4">
                    <h3
                      className={`text-lg font-semibold mb-3 group-hover:transition-colors duration-300 leading-tight ${
                        theme === "dark"
                          ? "text-white group-hover:text-yellow-400/90"
                          : "text-gray-800 group-hover:text-yellow-800"
                      }`}
                    >
                      {project.title}
                    </h3>

                    <p
                      className={`text-sm leading-relaxed line-clamp-3 transition-colors duration-300 ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className={`text-xs px-2.5 py-1 rounded-md border transition-colors duration-300 ${
                            theme === "dark"
                              ? "bg-gray-800/40 text-gray-400 border-gray-700/30"
                              : "bg-gray-100 text-gray-600 border-gray-300"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span
                          className={`text-xs px-2.5 py-1 rounded-md transition-colors duration-300 ${
                            theme === "dark"
                              ? "bg-gray-800/20 text-gray-500"
                              : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2 pt-3 transition-colors duration-300">
                    <button
                      className={`flex-1 py-2 px-3 rounded-lg text-sm hover:transition-all duration-300 flex items-center justify-center space-x-2 border transition-colors duration-300 ${
                        theme === "dark"
                          ? "bg-gray-800/50 text-gray-300 border-gray-700/30 hover:bg-gray-700/50 hover:text-white"
                          : "bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200 hover:text-gray-800"
                      }`}
                    >
                      <FiExternalLink className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </button>
                    <button
                      className={`p-2 rounded-lg hover:transition-all duration-300 border transition-colors duration-300 ${
                        theme === "dark"
                          ? "bg-gray-800/50 text-gray-400 border-gray-700/30 hover:bg-gray-700/50 hover:text-white"
                          : "bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200 hover:text-gray-800"
                      }`}
                    >
                      <FiGithub className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Subtle Hover Effects */}
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                    style={{
                      background: `linear-gradient(to bottom right, rgba(191, 166, 21, 0.03), transparent, rgba(191, 166, 21, 0.02))`,
                    }}
                  />
                </div>

                {/* Very Subtle Background Glow */}
                <div
                  className="absolute inset-0 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-20 scale-105"
                  style={{
                    backgroundColor:
                      theme === "dark"
                        ? "rgba(191, 166, 21, 0.03)"
                        : "rgba(133, 77, 14, 0.03)",
                  }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View More/Less Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow:
                theme === "dark"
                  ? "0 10px 30px -10px rgba(245, 158, 11, 0.3)"
                  : "0 10px 30px -10px rgba(133, 77, 14, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleShowAll}
            className="px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 mx-auto"
            style={{
              border: `2px solid ${yellowColor}`,
              color: yellowColor,
              backgroundColor:
                theme === "dark"
                  ? "rgba(191, 166, 21, 0.1)"
                  : "rgba(133, 77, 14, 0.1)",
            }}
          >
            <span>
              {showAll
                ? `Show Less (${allProjects.length})`
                : `View All Projects (${allProjects.length})`}
            </span>
          </motion.button>

          {!showAll && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`text-sm mt-4 transition-colors duration-300 ${
                theme === "dark" ? "text-gray-500" : "text-gray-600"
              }`}
            >
              Showing 4 of {allProjects.length} projects
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
