"use client";
import { experiences, getTypeColor } from "@/app/data";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 bg-linear-to-b from-gray-950 to-gray-900"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-white">
            Professional Experience
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            My career path through technology, research, and leadership roles
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto ">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-800/50 hidden lg:block"></div>

          {/* Experience Items */}
          <div className="space-y-12 relative">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full border-4 border-black z-10 hidden lg:block"></div>

                {/* Content Card */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"
                  } w-full`}
                >
                  <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/60 rounded-xl p-6 hover:border-gray-700/80 transition-all duration-500 group">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-3">
                      <div className="flex items-start space-x-3">
                        <div
                          className={`p-2 rounded-lg ${getTypeColor(
                            exp.type
                          )} mt-1`}
                        >
                          <exp.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors duration-300">
                            {exp.role}
                          </h3>
                          <p className="text-yellow-400 font-medium text-sm">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className="text-gray-400 text-sm font-medium bg-gray-800/50 px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                        <span className="text-xs text-gray-500 bg-gray-800/30 px-2 py-1 rounded">
                          {exp.industry}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-gray-400">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start space-x-3 text-sm"
                          >
                            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-400 leading-relaxed">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden lg:block"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Career Progress Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center space-x-4 text-gray-400 text-sm">
            <span>2017</span>
            <div className="w-24 h-1 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-yellow-400 rounded-full"
                style={{ width: "100%" }}
              ></div>
            </div>
            <span>Present</span>
          </div>
          <p className="text-gray-500 text-xs mt-2">
            6+ years of professional growth
          </p>
        </motion.div>
      </div>
    </section>
  );
}
