"use client";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experience"
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
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {[
            {
              role: "Postgraduate Taught Representative",
              company: "Hull University Students' Union",
              period: "October 2025 - Present",
              description:
                "Elected representative for all postgraduate taught students. Enhancing postgraduate learning, inclusion, and well-being.",
              achievements: [
                "Serve as link between students, faculty, and Students' Union",
                "Represent postgraduate voices in university council meetings",
                "Lead student engagement initiatives",
              ],
            },
            {
              role: "Team Lead - System Operation",
              company: "OfficeCare Limited",
              period: "June 2025 - Present",
              description:
                "Leading operations team in tech deployment and maintenance. Focus on software setup, firmware, and hardware systems.",
              achievements: [
                "Balance IT duties with team leadership",
                "Oversee IT systems and daily tech tasks",
                "Train crew on diagnostics and maintenance",
              ],
            },
            {
              role: "Data Analyst",
              company: "Stechin Global Consult",
              period: "December 2019 - April 2025",
              description:
                "Supported data migration to Salesforce across 12+ business areas. Improved customer interactions and resource utilization by 20%.",
              achievements: [
                "Built dashboards for business intelligence",
                "Implemented data quality checks",
                "Explored AI tools and open-source libraries",
              ],
            },
          ].map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 hover:border-emerald-400/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <span className="text-emerald-400 font-semibold">
                  {exp.period}
                </span>
              </div>
              <p className="text-cyan-400 font-semibold mb-4">{exp.company}</p>
              <p className="text-gray-300 mb-4">{exp.description}</p>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-400">{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
