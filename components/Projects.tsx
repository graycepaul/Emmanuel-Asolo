"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiAward } from "react-icons/fi";

export default function Projects() {
  const projects = [
    {
      title: "HealthTech Hackathon 2025 Finalist",
      description:
        "Mission: Brain Global Neurosurgery with Brainlabs and Harvard University. Developed AI solutions for global neurosurgery challenges.",
      category: "HealthTech",
      tech: ["AI", "Medical Imaging", "Neuroscience", "Python"],
      status: "Finalist",
      featured: true,
    },
    {
      title: "Stroke Risk Prediction System",
      description:
        "Predicting stroke risk using Logistic Regression and Random Forest algorithms with 94% accuracy on clinical datasets.",
      category: "Healthcare AI",
      tech: ["Machine Learning", "Python", "Scikit-learn", "Pandas"],
      status: "Completed",
      featured: true,
    },
    {
      title: "Fake News Detection Engine",
      description:
        "Advanced content verification system using Python and Logistic Regression for real-time fake news classification.",
      category: "NLP",
      tech: ["Python", "NLP", "Logistic Regression", "Transformers"],
      status: "Completed",
    },
    {
      title: "Handwritten Digit Recognition",
      description:
        "CNN Model with advanced Data Augmentation techniques for high-accuracy digit classification on MNIST dataset.",
      category: "Computer Vision",
      tech: ["CNN", "TensorFlow", "Data Augmentation", "Keras"],
      status: "Completed",
    },
    {
      title: "Life Expectancy Predictor",
      description:
        "ML model predicting life expectancy from GDP and mortality rates using WHO 2015 dataset with comprehensive feature analysis.",
      category: "Data Science",
      tech: ["Python", "Machine Learning", "WHO Data", "Matplotlib"],
      status: "Completed",
    },
    {
      title: "UK Traffic Accident Analysis",
      description:
        "Comprehensive analysis using K-Means and Gaussian Mixture Models on UK traffic accidents dataset with clustering insights.",
      category: "Data Analytics",
      tech: ["Clustering", "Python", "Data Analysis", "Scikit-learn"],
      status: "Completed",
    },
    {
      title: "AI-Powered Agriculture Chatbot",
      description:
        "Decision support system for sustainable agriculture using AI chatbot solution for farmers and agricultural experts.",
      category: "AI Chatbot",
      tech: ["NLP", "Python", "Transformers", "Agriculture"],
      status: "Research",
    },
    {
      title: "Urban Surveillance System",
      description:
        "Fog computing and mobile cloud integration with big data analytics for 5G-enabled urban surveillance networks.",
      category: "IoT & Big Data",
      tech: ["Fog Computing", "5G", "Big Data", "Cloud"],
      status: "Research",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Featured Projects
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Explore my latest work in AI, Data Science, and Machine Learning.
            Each project demonstrates practical applications of cutting-edge
            technologies.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Project Card */}
              <div className="relative bg-gray-900/40 backdrop-blur-sm border border-gray-800/60 rounded-xl p-5 transition-all duration-500 group-hover:border-gray-700/80 group-hover:bg-gray-900/60 h-full flex flex-col overflow-hidden">
                {/* Subtle Accent Bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400/80 via-yellow-500/60 to-yellow-400/80 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                {/* Header Section */}
                <div className="flex justify-between items-start mb-4">
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                      project.status === "Finalist"
                        ? "bg-yellow-400/10 text-yellow-300 border border-yellow-400/20"
                        : project.status === "Research"
                        ? "bg-blue-400/10 text-blue-300 border border-blue-400/20"
                        : "bg-gray-400/10 text-gray-300 border border-gray-400/20"
                    }`}
                  >
                    {project.status}
                  </span>

                  {project.featured && (
                    <div className="flex items-center space-x-1 text-yellow-400/80">
                      <FiAward className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="flex-1 mb-4">
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-yellow-400/90 transition-colors duration-300 leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 bg-gray-800/40 text-gray-400 rounded-md border border-gray-700/30 group-hover:border-gray-600/50 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons - More Subtle */}
                <div className="flex space-x-2 pt-3 border-t border-gray-800/40">
                  <button className="flex-1 bg-gray-800/50 text-gray-300 py-2 px-3 rounded-lg text-sm hover:bg-gray-700/50 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 border border-gray-700/30">
                    <FiExternalLink className="w-3.5 h-3.5" />
                    <span>Details</span>
                  </button>
                  <button className="p-2 bg-gray-800/50 text-gray-400 rounded-lg hover:bg-gray-700/50 hover:text-white transition-all duration-300 border border-gray-700/30">
                    <FiGithub className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Subtle Hover Effects */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-yellow-400/3 via-transparent to-yellow-400/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </div>

              {/* Very Subtle Background Glow */}
              <div className="absolute inset-0 rounded-xl bg-yellow-400/3 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-20 scale-105" />
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px -10px rgba(245, 158, 11, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 rounded-xl font-semibold hover:bg-yellow-400/10 transition-all duration-300"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
