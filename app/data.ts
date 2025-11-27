import { FiUsers, FiCpu, FiDatabase, FiCode, FiBook } from "react-icons/fi";

export interface NavProps {
  id: string;
}

export const sections = [
  { id: "home", name: "Home" },
  { id: "about", name: "About" },
  { id: "skills", name: "Skills" },
  { id: "experience", name: "Experience" },
  { id: "projects", name: "Projects" },
  { id: "publications", name: "Publications" },
];

export const experiences = [
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

export const getTypeColor = (type: string) => {
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

export const allProjects = [
  {
    title: "HealthTech Hackathon 2025 Finalist",
    description:
      "Mission: Brain Global Neurosurgery with Brainlabs and Harvard University. Developed AI solutions for global neurosurgery challenges.",
    category: "HealthTech",
    tech: ["AI", "Medical Imaging", "Neuroscience", "Python"],
    status: "Finalist",
    featured: true,
  },
  {
    title: "Stroke Risk Prediction System",
    description:
      "Predicting stroke risk using Logistic Regression and Random Forest algorithms with 94% accuracy on clinical datasets.",
    category: "Healthcare AI",
    tech: ["Machine Learning", "Python", "Scikit-learn", "Pandas"],
    status: "Completed",
    featured: true,
  },
  {
    title: "Fake News Detection Engine",
    description:
      "Advanced content verification system using Python and Logistic Regression for real-time fake news classification.",
    category: "NLP",
    tech: ["Python", "NLP", "Logistic Regression", "Transformers"],
    status: "Completed",
  },
  {
    title: "Handwritten Digit Recognition",
    description:
      "CNN Model with advanced Data Augmentation techniques for high-accuracy digit classification on MNIST dataset.",
    category: "Computer Vision",
    tech: ["CNN", "TensorFlow", "Data Augmentation", "Keras"],
    status: "Completed",
  },
  {
    title: "Life Expectancy Predictor",
    description:
      "ML model predicting life expectancy from GDP and mortality rates using WHO 2015 dataset with comprehensive feature analysis.",
    category: "Data Science",
    tech: ["Python", "Machine Learning", "WHO Data", "Matplotlib"],
    status: "Completed",
  },
  {
    title: "UK Traffic Accident Analysis",
    description:
      "Comprehensive analysis using K-Means and Gaussian Mixture Models on UK traffic accidents dataset with clustering insights.",
    category: "Data Analytics",
    tech: ["Clustering", "Python", "Data Analysis", "Scikit-learn"],
    status: "Completed",
  },
  {
    title: "AI-Powered Agriculture Chatbot",
    description:
      "Decision support system for sustainable agriculture using AI chatbot solution for farmers and agricultural experts.",
    category: "AI Chatbot",
    tech: ["NLP", "Python", "Transformers", "Agriculture"],
    status: "Research",
  },
  {
    title: "Urban Surveillance System",
    description:
      "Fog computing and mobile cloud integration with big data analytics for 5G-enabled urban surveillance networks.",
    category: "IoT & Big Data",
    tech: ["Fog Computing", "5G", "Big Data", "Cloud"],
    status: "Research",
  },
  {
    title: "UK Food & Drink Spending Analysis",
    description:
      "Used Matplotlib to analyze, compare, and visualize UK food & drink spending (1997–2022); projected 2024 values.",
    category: "Data Visualization",
    tech: ["Python", "Matplotlib", "Pandas", "Data Analysis"],
    status: "Completed",
  },
  {
    title: "Computer Vision Object Recognition",
    description:
      "Created a Computer Vision Demo with Teachable Machine for live classification and object recognition.",
    category: "Computer Vision",
    tech: [
      "Teachable Machine",
      "Computer Vision",
      "JavaScript",
      "TensorFlow.js",
    ],
    status: "Completed",
  },
  {
    title: "MCU Movies Database",
    description:
      "Built and queried an SQLite database for MCU movies with complex queries and data management.",
    category: "Database",
    tech: ["SQLite", "Python", "Database Design", "SQL"],
    status: "Completed",
  },
  {
    title: "Hybrid Deep Learning for Fake News Detection",
    description:
      "Case Study: Hybrid Deep Learning FastText and Explainable AI for Fake News Detection using CNN LSTM.",
    category: "Deep Learning",
    tech: ["FastText", "CNN", "LSTM", "Explainable AI"],
    status: "Research",
  },
  {
    title: "Transaction Data Mining",
    description:
      "Hands-on experience in transaction data mining and itemset discovery; implemented Apriori pipelines end-to-end.",
    category: "Data Mining",
    tech: [
      "Apriori Algorithm",
      "Data Mining",
      "Python",
      "Market Basket Analysis",
    ],
    status: "Completed",
  },
  {
    title: "Titanic Survival Prediction",
    description:
      "Predicted Titanic survival from passenger features using Python, with comprehensive dataset analysis including imputation and visualization.",
    category: "Machine Learning",
    tech: ["Python", "Classification", "Data Imputation", "Visualization"],
    status: "Completed",
  },
];

export const skillCategories = [
  {
    category: "Technical & Analytic Tools",
    skills: [
      "Python",
      "SQL",
      "TensorFlow/PyTorch",
      "Scikit-learn",
      "Power BI / Tableau",
      "Data Visualization",
      "Critical Thinking",
    ],
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
      "NumPy",
    ],
  },
  {
    category: "Programming & Systems",
    skills: [
      "Deep Learning",
      "AI Speech Recognition",
      "OpenCV",
      "Kaggle",
      "Vertex AI",
      "Google AutoML",
      "GitHub",
    ],
  },
];
export const publications = [
  {
    title:
      "AI-Powered Decision Support Systems for Sustainable Agriculture Using AI-Chatbot Solution",
    journal: "Journal of Development: Food, Energy, and Water Systems",
    year: "2024",
    type: "authored",
  },
  {
    title:
      "Enhancing Urban Surveillance with Fog Computing, Mobile Cloud, and Big Data Analytics in 5G Networks",
    journal: "International Journal of Emerging Multidisciplinary Technologies",
    year: "2024",
    type: "authored",
  },
  {
    title:
      "ChatGPT and the Future of Generative AI: Architecture, Limitations, and Advancements in Large Language Models",
    journal: "American Journal of Business and Social Research",
    year: "2025",
    type: "co-authored",
  },
  {
    title:
      "Artificial Intelligence-Driven Fuzzy Logic Approach for Optimal Well Selection in Gas Lift Optimization",
    journal: "Results in Engineering (ScienceDirect)",
    year: "2025",
    type: "co-authored",
  },
];
