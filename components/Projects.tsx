"use client";

import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "HealthTech Hackathon 2025 Finalist",
              description:
                "Mission: Brain Global Neurosurgery with Brainlabs and Harvard University",
              category: "HealthTech",
              tech: ["AI", "Medical Imaging", "Neuroscience"],
            },
            {
              title: "Stroke Risk Prediction",
              description:
                "Predicting stroke risk using Logistic Regression and Random Forest algorithms",
              category: "Healthcare AI",
              tech: ["Machine Learning", "Python", "Scikit-learn"],
            },
            {
              title: "Fake News Detector",
              description:
                "Built using Python and Logistic Regression for content verification",
              category: "NLP",
              tech: ["Python", "NLP", "Logistic Regression"],
            },
            {
              title: "Handwritten Digit Recognition",
              description:
                "CNN Model with Data Augmentation for digit classification",
              category: "Computer Vision",
              tech: ["CNN", "TensorFlow", "Data Augmentation"],
            },
            {
              title: "Life Expectancy Prediction",
              description:
                "ML model predicting life expectancy from GDP and mortality rates using WHO data",
              category: "Data Science",
              tech: ["Python", "ML", "WHO Data"],
            },
            {
              title: "UK Traffic Analysis",
              description:
                "K-Means and Gaussian Mixture Model analysis on UK traffic accidents data",
              category: "Data Analytics",
              tech: ["Clustering", "Python", "Data Analysis"],
            },
          ].map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 hover:border-emerald-400/50 transition-all duration-300 group cursor-pointer"
            >
              <div className="mb-4">
                <span className="text-xs font-semibold px-3 py-1 bg-emerald-400/10 text-emerald-400 rounded-full">
                  {project.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
