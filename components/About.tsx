"use client";
import { FiBarChart2, FiCode, FiCpu, FiDatabase } from "react-icons/fi";
import { FiAward, FiBook, FiUsers } from "react-icons/fi";
import { motion } from "framer-motion";
import { NavProps } from "@/app/data";
import { useTheme } from "@/context/ThemeContext";

export default function About({ id }: NavProps) {
  const { theme } = useTheme();

  return (
    <section
      id={id}
      className={`py-20 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gradient-to-b from-black to-gray-900"
          : "bg-gradient-to-b from-gray-200 to-white"
      }`}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3
              className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              Research-Driven AI Innovator
            </h3>
            <p
              className={`mb-6 leading-relaxed transition-colors duration-300 ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Currently pursuing an MSc in Artificial Intelligence and Data
              Science at the University of Hull, with a research focus on
              Responsible AI, Deep Learning, and Natural Language Processing
              (NLP).
            </p>
            <p
              className={`mb-6 leading-relaxed transition-colors duration-300 ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              I combine strong technical skills with a commitment to ethical and
              explainable AI, demonstrated through academic publications and
              leadership as the Postgraduate Students&apos; Representative.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3">
                <FiAward className="w-6 h-6 text-yellow-400" />
                <span
                  className={`transition-colors duration-300 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  4+ Years Experience
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FiBook className="w-6 h-6 text-yellow-500" />
                <span
                  className={`transition-colors duration-300 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  MSc AI & Data Science
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FiUsers className="w-6 h-6 text-yellow-400" />
                <span
                  className={`transition-colors duration-300 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Research Leadership
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FiCode className="w-6 h-6 text-yellow-400" />
                <span
                  className={`transition-colors duration-300 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Multiple Publications
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div
                className={`p-6 rounded-xl border transition-colors duration-300 ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700"
                    : "bg-gradient-to-br from-gray-100 to-white border-gray-200"
                }`}
              >
                <FiCpu className="w-8 h-8 text-yellow-400 mb-3" />
                <h4
                  className={`font-semibold mb-2 transition-colors duration-300 ${
                    theme === "dark" ? "text-white" : "text-gray-800"
                  }`}
                >
                  Deep Learning
                </h4>
                <p
                  className={`text-sm transition-colors duration-300 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  TensorFlow, PyTorch, CNN, LSTM
                </p>
              </div>
              <div
                className={`p-6 rounded-xl border transition-colors duration-300 ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-yellow-800 to-gray-900 border-gray-700"
                    : "bg-gradient-to-br from-yellow-50 to-white border-gray-200"
                }`}
              >
                <FiDatabase className="w-8 h-8 text-yellow-400 mb-3" />
                <h4
                  className={`font-semibold mb-2 transition-colors duration-300 ${
                    theme === "dark" ? "text-white" : "text-gray-800"
                  }`}
                >
                  Data Science
                </h4>
                <p
                  className={`text-sm transition-colors duration-300 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Python, SQL, Big Data Analytics
                </p>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div
                className={`p-6 rounded-xl border transition-colors duration-300 ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-yellow-800 to-gray-900 border-gray-700"
                    : "bg-gradient-to-br from-yellow-50 to-white border-gray-200"
                }`}
              >
                <FiBarChart2 className="w-8 h-8 text-yellow-400 mb-3" />
                <h4
                  className={`font-semibold mb-2 transition-colors duration-300 ${
                    theme === "dark" ? "text-white" : "text-gray-800"
                  }`}
                >
                  NLP & AI
                </h4>
                <p
                  className={`text-sm transition-colors duration-300 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Transformers, ChatGPT, Hugging Face
                </p>
              </div>
              <div
                className={`p-6 rounded-xl border transition-colors duration-300 ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700"
                    : "bg-gradient-to-br from-gray-100 to-white border-gray-200"
                }`}
              >
                <FiCode className="w-8 h-8 text-yellow-400 mb-3" />
                <h4
                  className={`font-semibold mb-2 transition-colors duration-300 ${
                    theme === "dark" ? "text-white" : "text-gray-800"
                  }`}
                >
                  MLOps
                </h4>
                <p
                  className={`text-sm transition-colors duration-300 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Vertex AI, AutoML, Streamlit
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
