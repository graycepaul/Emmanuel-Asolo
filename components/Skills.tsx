"use client";
import { motion } from "framer-motion";
import { FiBarChart2, FiCode, FiCpu } from "react-icons/fi";

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-clip-text text-white">Technical Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              category: "Technical & Analytic Tools",
              skills: [
                "Python",
                "SQL",
                "TensorFlow/PyTorch",
                "Scikit-learn",
                "Power BI/Tableau",
                "Data Visualization",
              ],
              icon: <FiBarChart2 className="w-6 h-6" />,
              color: "yellow",
            },
            {
              category: "AI & Automation Tools",
              skills: [
                "Jupyter Notebook",
                "Hugging Face",
                "Google Colab",
                "OpenAI ChatGPT API",
                "Streamlit",
                "Power Automate",
              ],
              icon: <FiCpu className="w-6 h-6" />,
              color: "yellow",
            },
            {
              category: "Programming & Systems",
              skills: [
                "Deep Learning",
                "AI Speech Recognition",
                "OpenCV",
                "Kaggle",
                "Vertex AI",
                "GitHub",
              ],
              icon: <FiCode className="w-6 h-6" />,
              color: "yellow",
            },
          ].map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300"
            >
              <div
                className={`flex items-center space-x-3 mb-6 text-${group.color}-400`}
              >
                {group.icon}
                <h3 className="text-xl font-bold text-gray-200">
                  {group.category}
                </h3>
              </div>
              <div className="space-y-3">
                {group.skills.map((skill) => (
                  <div key={skill} className="flex items-center space-x-3">
                    <div
                      className={`w-2 h-2 bg-${group.color}-400 rounded-full`}
                    ></div>
                    <span className="text-gray-400">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
