"use client";
import { motion } from "framer-motion";
import {
  FiUsers,
  FiCpu,
  FiDatabase,
  FiCode,
  FiBook,
  FiAward,
} from "react-icons/fi";

export default function Experience() {
  const experiences = [
    {
      role: "Postgraduate Taught Representative",
      company: "Hull University Students' Union (HUSU)",
      period: "October 2025 - Present",
      description:
        "Elected as the official representative for all postgraduate taught students across the University of Hull (Hull and London campuses). Working closely with academic and student services to enhance postgraduate learning, inclusion, and well-being.",
      achievements: [
        "Serve as the link between postgraduate students, faculty, and the Students' Union on academic matters",
        "Represent postgraduate voices in university council and academic zone meetings",
        "Lead student engagement initiatives and facilitate open communication between staff and students",
        "Collaborate with course representatives across faculties to gather feedback and address concerns",
        "Promote fair academic practices, diversity, and inclusion in postgraduate programs",
        "Support postgraduate community development through events and academic-focused activities",
      ],
      type: "leadership",
      icon: FiUsers,
      industry: "Education & Leadership",
    },
    {
      role: "Team Lead - System Operation",
      company: "OfficeCare Limited",
      period: "June 2025 - Present",
      description:
        "Leading the operations team in rolling out new ways to run and maintain machines. Focus on tech side, software setup, firmware, sensors, and basic hardware checks.",
      achievements: [
        "Balance IT duties with team leadership in operations",
        "Handle general IT tasks, machines, devices, and daily cleaning operations",
        "Oversee IT systems, devices, and daily tech tasks",
        "Train crew to use simple diagnostics, follow clear routines, and keep clean logs",
        "Ensure work safety, efficiency, and alignment with service targets",
      ],
      type: "tech",
      icon: FiCpu,
      industry: "PropTech",
    },
    {
      role: "Data Analyst",
      company: "Stechin Global Consult",
      period: "December 2019 - April 2025",
      description:
        "Supported the migration of customer data from legacy systems across 12+ business areas to Salesforce, optimizing data accessibility and improving customer interactions.",
      achievements: [
        "Increased overall resource utilization by 20% through data optimization",
        "Built comprehensive dashboards for inquiry, application, offer, and enrolment tracking",
        "Implemented data quality checks and simple audit logs",
        "Monitored company systems, servers, and networks with user support",
        "Explored AI tools and open-source libraries for process improvement",
      ],
      type: "data",
      icon: FiDatabase,
      industry: "EdTech",
    },
    {
      role: "Member Research Team",
      company: "Osun State University",
      period: "June 2018 - May 2019",
      description:
        "Research team member in the Department of Information and Communication Technology, contributing to academic research and laboratory operations.",
      achievements: [
        "Conducted experiments and simulations for research projects",
        "Assisted in the supervision and monitoring of undergraduate students",
        "Maintained and upgraded laboratory equipment and resources",
        "Represented the Supervisor at research events, conferences, and workshops",
      ],
      type: "research",
      icon: FiBook,
      industry: "Academic Research",
    },
    {
      role: "Full-stack Software Engineer (Intern)",
      company: "BixBase Technology",
      period: "May 2017 - Present",
      description:
        "Full-time internship focusing on web application development and software engineering practices.",
      achievements: [
        "Assisted in development and maintenance of web applications using HTML, CSS, JavaScript, and PHP",
        "Participated in system testing, version control (Git), and documentation tasks",
        "Collaborated on all stages of systems development lifecycle",
        "Gained exposure to agile-style workflows through code reviews and team discussions",
      ],
      type: "development",
      icon: FiCode,
      industry: "Technology",
    },
    {
      role: "Web Developer (Internship)",
      company: "Eagles Institute of Technology",
      period: "2017",
      description:
        "Web development internship focusing on modern web technologies and frameworks.",
      achievements: [
        "Wrote custom Components, Pipes, Filters, and Services for Angular 2+ and Vue.js applications",
        "Integrated user-facing components with server-side RESTful/SOAP Web Services",
        "Developed server-side applications using Spring (Boot, Data JPA) and Hibernate framework",
        "Worked with SQL/NoSQL databases for SOA and Microservices applications",
      ],
      type: "development",
      icon: FiCode,
      industry: "Technology",
    },
  ];

  const getIconColor = (type: string) => {
    switch (type) {
      case "leadership":
        return "text-yellow-400";
      case "tech":
        return "text-blue-400";
      case "data":
        return "text-green-400";
      case "research":
        return "text-purple-400";
      case "development":
        return "text-cyan-400";
      default:
        return "text-gray-400";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "leadership":
        return "bg-yellow-400/10 text-yellow-400 border-yellow-400/20";
      case "tech":
        return "bg-blue-400/10 text-blue-400 border-blue-400/20";
      case "data":
        return "bg-green-400/10 text-green-400 border-green-400/20";
      case "research":
        return "bg-purple-400/10 text-purple-400 border-purple-400/20";
      case "development":
        return "bg-cyan-400/10 text-cyan-400 border-cyan-400/20";
      default:
        return "bg-gray-400/10 text-gray-400 border-gray-400/20";
    }
  };

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 mb-4"
          >
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-yellow-400 text-sm font-medium tracking-wider">
              CAREER JOURNEY
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Professional <span className="text-yellow-400">Experience</span>
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
        <div className="max-w-6xl mx-auto">
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
