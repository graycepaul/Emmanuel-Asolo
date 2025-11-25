import { FiBarChart2, FiCode, FiCpu, FiDatabase } from "react-icons/fi";
import { FiAward, FiBook, FiUsers } from "react-icons/fi";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
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
            <span className="bg-gradient-to-r from-yellow-600 to-slate-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-yellow-700 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-yellow-600">
              Research-Driven AI Innovator
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Currently pursuing an MSc in Artificial Intelligence and Data
              Science at the University of Hull, with a research focus on
              Responsible AI, Deep Learning, and Natural Language Processing
              (NLP).
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I combine strong technical skills with a commitment to ethical and
              explainable AI, demonstrated through academic publications and
              leadership as the Postgraduate Students&apos; Representative.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3">
                <FiAward className="w-6 h-6 text-yellow-400" />
                <span className="text-gray-300">4+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiBook className="w-6 h-6 text-yellow-500" />
                <span className="text-gray-300">MSc AI & Data Science</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiUsers className="w-6 h-6 text-yellow-400" />
                <span className="text-gray-300">Research Leadership</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiCode className="w-6 h-6 text-yellow-400" />
                <span className="text-gray-300">Multiple Publications</span>
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
              <div className="p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700">
                <FiCpu className="w-8 h-8 text-yellow-400 mb-3" />
                <h4 className="font-semibold text-white mb-2">Deep Learning</h4>
                <p className="text-sm text-gray-400">
                  TensorFlow, PyTorch, CNN, LSTM
                </p>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-yellow-800 to-gray-900 border border-gray-700">
                <FiDatabase className="w-8 h-8 text-yellow-400 mb-3" />
                <h4 className="font-semibold text-white mb-2">Data Science</h4>
                <p className="text-sm text-gray-400">
                  Python, SQL, Big Data Analytics
                </p>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="p-6 rounded-xl bg-gradient-to-br from-yellow-800 to-gray-900 border border-gray-700">
                <FiBarChart2 className="w-8 h-8 text-yellow-400 mb-3" />
                <h4 className="font-semibold text-white mb-2">NLP & AI</h4>
                <p className="text-sm text-gray-400">
                  Transformers, ChatGPT, Hugging Face
                </p>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700">
                <FiCode className="w-8 h-8 text-yellow-400 mb-3" />
                <h4 className="font-semibold text-white mb-2">MLOps</h4>
                <p className="text-sm text-gray-400">
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
