"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  // Initialize theme only once after mount
  useEffect(() => {
    const initializeTheme = () => {
      try {
        const savedTheme = localStorage.getItem("theme") as Theme;
        const systemPrefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;

        const initialTheme =
          savedTheme || (systemPrefersDark ? "dark" : "light");

        // Batch state updates to avoid cascading renders
        setTheme(initialTheme);
        setMounted(true);
      } catch (error) {
        console.warn("Error reading theme from localStorage:", error);
        setTheme("dark");
        setMounted(true);
      }
    };

    // Use setTimeout to ensure this runs after the component is mounted
    const timer = setTimeout(initializeTheme, 0);

    return () => clearTimeout(timer);
  }, []);

  // Apply theme to document - separate effect to avoid cascading renders
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;

    // Set data-theme attribute
    root.setAttribute("data-theme", theme);

    // Save to localStorage
    try {
      localStorage.setItem("theme", theme);
    } catch (error) {
      console.warn("Error saving theme to localStorage:", error);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // Prevent flash of unstyled content
  if (!mounted) {
    return (
      <div
        style={{
          backgroundColor: "#000000", // Default dark background
          color: "#f3f4f6", // Default dark text
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="w-16 h-16 border-4 border-[#BFA615] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div data-theme={theme}>{children}</div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
