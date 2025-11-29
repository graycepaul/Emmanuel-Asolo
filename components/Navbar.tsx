"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FiLinkedin, FiMail, FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { AiFillBulb } from "react-icons/ai";
import { BsFillLightbulbFill } from "react-icons/bs";

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
  const { theme, toggleTheme } = useTheme();

  // Define colors based on theme
  const activeColor = theme === "dark" ? "#BFA615" : "#854d0e";
  const activeBgColor =
    theme === "dark" ? "rgba(191, 166, 21, 0.1)" : "rgba(133, 77, 14, 0.1)";
  const iconColor = theme === "dark" ? "#f3f4f6" : "#1f2937";
  const bgColor = theme === "dark" ? "#374151" : "#e5e7eb";

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
      const offset = 70;
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
        style={{
          backgroundColor: isScrolled ? "var(--color-navbar)" : "transparent",
          borderBottomColor: "var(--color-border)",
        }}
        className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-lg"
      >
        <div className="container mx-auto px-4 sm:px-6 py-5">
          <div className="flex justify-between items-center">
            {/* Social Links - Left Side */}
            <div className="flex space-x-2 sm:space-x-3">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://linkedin.com/in/emmanuel-asolo-b197091b7"
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: bgColor }}
                className="p-2 rounded-lg hover:bg-[#BFA615] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  style={{ color: iconColor }}
                />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:e.asolo-2023@hull.ac.uk"
                style={{ backgroundColor: bgColor }}
                className="p-2 rounded-lg hover:bg-[#BFA615] transition-colors"
                aria-label="Send Email"
              >
                <FiMail
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  style={{ color: iconColor }}
                />
              </motion.a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-4 lg:gap-8 text-sm items-center">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  style={{
                    color:
                      activeSection === section.id
                        ? activeColor
                        : "var(--color-foreground)",
                    backgroundColor:
                      activeSection === section.id
                        ? activeBgColor
                        : "transparent",
                  }}
                  className="px-2 py-1 rounded-lg transition-all duration-300 font-medium hover:opacity-80"
                >
                  {section.name}
                </button>
              ))}

              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                style={{ backgroundColor: bgColor }}
                className="p-2 rounded-lg hover:bg-[#BFA615] transition-colors"
                aria-label={`Switch to ${
                  theme === "dark" ? "light" : "dark"
                } mode`}
              >
                {theme === "dark" ? (
                  <AiFillBulb
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    style={{ color: iconColor }}
                  />
                ) : (
                  <BsFillLightbulbFill
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    style={{ color: iconColor }}
                  />
                )}
              </motion.button>
            </div>

            {/* Mobile Menu Button and Theme Toggle */}
            <div className="flex items-center space-x-2 md:hidden">
              {/* Theme Toggle for Mobile */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                style={{ backgroundColor: bgColor }}
                className="p-2 rounded-lg hover:bg-[#BFA615] transition-colors"
                aria-label={`Switch to ${
                  theme === "dark" ? "light" : "dark"
                } mode`}
              >
                {theme === "dark" ? (
                  <AiFillBulb
                    className="w-5 h-5"
                    style={{ color: iconColor }}
                  />
                ) : (
                  <BsFillLightbulbFill
                    className="w-5 h-5"
                    style={{ color: iconColor }}
                  />
                )}
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                style={{ backgroundColor: bgColor }}
                className="p-2 rounded-lg hover:bg-[#BFA615] transition-colors menu-button"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <FiX className="w-5 h-5" style={{ color: iconColor }} />
                ) : (
                  <FiMenu className="w-5 h-5" style={{ color: iconColor }} />
                )}
              </motion.button>
            </div>
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
              style={{
                backgroundColor:
                  theme === "dark"
                    ? "rgba(0, 0, 0, 0.95)"
                    : "rgba(255, 255, 255, 0.95)",
                borderBottomColor: "var(--color-border)",
              }}
              className="md:hidden backdrop-blur-lg border-b mobile-menu"
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
                      style={{
                        color:
                          activeSection === section.id
                            ? activeColor
                            : "var(--color-foreground)",
                        backgroundColor:
                          activeSection === section.id
                            ? activeBgColor
                            : "transparent",
                      }}
                      className="text-left px-4 py-3 rounded-lg transition-all duration-300 font-medium hover:opacity-80"
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

      {/* Reduced spacer for fixed navbar */}
      <div className="h-14 sm:h-16" />
    </>
  );
}
