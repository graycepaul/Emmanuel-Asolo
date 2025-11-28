"use client";
import { experiences, getTypeColor, NavProps } from "@/app/data";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export default function Experience({ id }: NavProps) {
  const { theme } = useTheme();

  return (
    <section
      id={id}
      className={`py-20 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gradient-to-b from-gray-950 to-gray-900"
          : "bg-gradient-to-b from-gray-100 to-white"
      }`}
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-2 transition-colors duration-300 ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            Professional Experience
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={`text-lg max-w-2xl mx-auto leading-relaxed transition-colors duration-300 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            My career path through technology, research, and leadership roles
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div
            className={`absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full hidden lg:block transition-colors duration-300 ${
              theme === "dark" ? "bg-gray-800/50" : "bg-gray-300/50"
            }`}
          ></div>

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
                  <div
                    className={`backdrop-blur-sm border rounded-xl p-6 hover:border-gray-700/80 transition-all duration-500 group transition-colors duration-300 ${
                      theme === "dark"
                        ? "bg-gray-900/40 border-gray-800/60"
                        : "bg-white/80 border-gray-300"
                    }`}
                  >
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
                          <h3
                            className={`text-lg font-semibold group-hover:text-yellow-400 transition-colors duration-300 ${
                              theme === "dark" ? "text-white" : "text-gray-800"
                            }`}
                          >
                            {exp.role}
                          </h3>
                          <p className="text-yellow-400 font-medium text-sm">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span
                          className={`text-sm font-medium px-3 py-1 rounded-full transition-colors duration-300 ${
                            theme === "dark"
                              ? "text-gray-400 bg-gray-800/50"
                              : "text-gray-600 bg-gray-200/50"
                          }`}
                        >
                          {exp.period}
                        </span>
                        <span
                          className={`text-xs px-2 py-1 rounded transition-colors duration-300 ${
                            theme === "dark"
                              ? "text-gray-500 bg-gray-800/30"
                              : "text-gray-500 bg-gray-200/30"
                          }`}
                        >
                          {exp.industry}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p
                      className={`mb-4 text-sm leading-relaxed transition-colors duration-300 ${
                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      <h4
                        className={`text-sm font-medium transition-colors duration-300 ${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start space-x-3 text-sm"
                          >
                            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span
                              className={`leading-relaxed transition-colors duration-300 ${
                                theme === "dark"
                                  ? "text-gray-400"
                                  : "text-gray-600"
                              }`}
                            >
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
          <div
            className={`inline-flex items-center space-x-4 text-sm transition-colors duration-300 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <span>2017</span>
            <div
              className={`w-24 h-1 rounded-full overflow-hidden transition-colors duration-300 ${
                theme === "dark" ? "bg-gray-700" : "bg-gray-300"
              }`}
            >
              <div
                className="h-full bg-yellow-400 rounded-full"
                style={{ width: "100%" }}
              ></div>
            </div>
            <span>Present</span>
          </div>
          <p
            className={`text-xs mt-2 transition-colors duration-300 ${
              theme === "dark" ? "text-gray-500" : "text-gray-500"
            }`}
          >
            6+ years of professional growth
          </p>
        </motion.div>
      </div>
    </section>
  );
}
