import { motion } from "framer-motion";
import { FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gray-800/50 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-slate-400 bg-clip-text text-transparent"
          >
            Let&apos;s Build the Future Together
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 mb-8 max-w-md mx-auto"
          >
            Interested in collaborating on AI research or innovative projects?
            I&apos;m always open to discussing new opportunities.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center space-x-6 mb-8"
          >
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              href="https://linkedin.com/in/emmanuel-asolo-b197091b7"
              className="p-3 rounded-full bg-gray-800 hover:bg-yellow-600 transition-colors"
            >
              <FiLinkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              href="mailto:e.asolo-2023@hull.ac.uk"
              className="p-3 rounded-full bg-gray-800 hover:bg-yellow-600 transition-colors"
            >
              <FiMail className="w-6 h-6" />
            </motion.a>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-600 text-sm"
          >
            © 2024 Emmanuel Asolo. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
