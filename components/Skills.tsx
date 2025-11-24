"use client";
import { motion } from "framer-motion";
import { Brain, Cpu, Database, Code2, Sparkles } from "lucide-react";

export default function Skills() {
  return (
    <div id="skills" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            Technical Expertise
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Specialized in modern AI/ML technologies and frameworks
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Brain,
              title: "Machine Learning",
              skills: ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost"],
            },
            {
              icon: Cpu,
              title: "Deep Learning",
              skills: [
                "Neural Networks",
                "Computer Vision",
                "NLP",
                "Transformers",
              ],
            },
            {
              icon: Database,
              title: "Data Engineering",
              skills: ["Python", "SQL", "Pandas", "Apache Spark"],
            },
            {
              icon: Code2,
              title: "MLOps & Deployment",
              skills: ["Docker", "Kubernetes", "AWS/GCP", "FastAPI"],
            },
          ].map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 hover:border-purple-500 transition-all group"
            >
              <div className="w-12 h-12 tech-gradient rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div key={skill} className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    <span className="text-slate-300">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
