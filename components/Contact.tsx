"use client";

import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div id="contact" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            Let&apos;s Connect
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Ready to bring AI solutions to your next project?
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700"
          >
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
              <motion.a
                href="https://linkedin.com/in/emmanuel-asolo-b197091b7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600/20 text-blue-400 rounded-full border border-blue-500/50 hover:bg-blue-600/30 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </motion.a>

              <motion.a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-slate-600/20 text-slate-400 rounded-full border border-slate-500/50 hover:bg-slate-600/30 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </motion.a>

              <motion.a
                href="mailto:emmanuel@asolo.com"
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-purple-600/20 text-purple-400 rounded-full border border-purple-500/50 hover:bg-purple-600/30 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </motion.a>
            </div>

            <p className="text-center text-slate-400">
              Currently open to new opportunities and collaborations in AI/ML
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
