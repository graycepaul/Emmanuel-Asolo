"use client";

import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            Featured Projects
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Real-world applications of AI and machine learning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[
            {
              title: "Computer Vision System",
              description:
                "Real-time object detection and classification system using YOLO and TensorFlow",
              tech: ["Python", "TensorFlow", "OpenCV", "Flask"],
              gradient: "from-purple-500 to-pink-500",
            },
            {
              title: "Predictive Analytics Platform",
              description:
                "ML-powered forecasting system for business intelligence and decision making",
              tech: ["Python", "Scikit-learn", "FastAPI", "Docker"],
              gradient: "from-blue-500 to-cyan-500",
            },
            {
              title: "NLP Chatbot",
              description:
                "AI-powered conversational agent with contextual understanding and sentiment analysis",
              tech: ["Python", "Transformers", "PyTorch", "React"],
              gradient: "from-green-500 to-blue-500",
            },
            {
              title: "Recommendation Engine",
              description:
                "Personalized content recommendation system using collaborative filtering",
              tech: ["Python", "Pandas", "Redis", "AWS"],
              gradient: "from-orange-500 to-red-500",
            },
          ].map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700 hover:border-purple-500 transition-all group"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-gradient transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm border border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
