import Link from "next/link";
import { Linkedin, Github, Mail, Twitter, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/emmanuel-asolo-b197091b7",
      icon: Linkedin,
      color: "hover:text-blue-400",
    },
    {
      name: "GitHub",
      href: "https://github.com/emmanuelasolo",
      icon: Github,
      color: "hover:text-gray-300",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/emmanuelasolo",
      icon: Twitter,
      color: "hover:text-sky-400",
    },
    {
      name: "Email",
      href: "mailto:emmanuel@asolo.com",
      icon: Mail,
      color: "hover:text-red-400",
    },
    {
      name: "Website",
      href: "https://about.me/emmanuelasolo",
      icon: Globe,
      color: "hover:text-green-400",
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <Link href="/" className="inline-block">
                <h3 className="text-2xl font-bold text-gradient">
                  Emmanuel.Asolo
                </h3>
              </Link>
              <p className="text-slate-400 max-w-md">
                AI & Machine Learning Engineer passionate about building
                intelligent systems that solve real-world problems through
                cutting-edge technology.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-slate-400 ${social.color} transition-colors duration-300`}
                    aria-label={`Visit ${social.name}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "TensorFlow",
                  "PyTorch",
                  "Next.js",
                  "TypeScript",
                  "AWS",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-slate-400">
              <span>© {currentYear} Emmanuel Asolo. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
