"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FiLinkedin, FiMail, FiMenu, FiX } from "react-icons/fi";
import { useState, useEffect } from "react";

interface NavigationProps {
  sections: Array<{ id: string; name: string }>;
  activeSection: string;
  setActiveSection: (id: string) => void;
}

export default function Navigation({
  sections,
  activeSection,
  setActiveSection,
}: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed navbar height
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        isMobileMenuOpen &&
        !target.closest(".mobile-menu") &&
        !target.closest(".menu-button")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-lg border-b border-gray-800/50"
            : "bg-black backdrop-blur-lg"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-3">
          <div className="flex justify-between items-center">
            {/* Social Links - Left Side */}
            <div className="flex space-x-2 sm:space-x-3">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://linkedin.com/in/emmanuel-asolo-b197091b7"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 hover:bg-[#BFA615] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:e.asolo-2023@hull.ac.uk"
                className="p-2 rounded-lg bg-gray-800 hover:bg-[#BFA615] transition-colors"
                aria-label="Send Email"
              >
                <FiMail className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-4 lg:gap-8 text-sm">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`transition-all duration-300 px-2 py-1 rounded-lg ${
                    activeSection === section.id
                      ? "text-[#BFA615] bg-[#BFA615]/10 font-semibold"
                      : "text-slate-100 hover:text-slate-300 hover:bg-gray-800/50"
                  }`}
                >
                  {section.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-800 hover:bg-[#BFA615] transition-colors menu-button"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <FiX className="w-5 h-5" />
              ) : (
                <FiMenu className="w-5 h-5" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black/95 backdrop-blur-lg border-b border-gray-800 mobile-menu"
            >
              <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col space-y-3">
                  {sections.map((section) => (
                    <motion.button
                      key={section.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => scrollToSection(section.id)}
                      className={`text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                        activeSection === section.id
                          ? "text-[#BFA615] bg-[#BFA615]/10 font-semibold"
                          : "text-slate-100 hover:text-slate-300 hover:bg-gray-800/50"
                      }`}
                    >
                      {section.name}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16 sm:h-20" />
    </>
  );
}
