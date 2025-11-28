"use client";
import { useState, useEffect } from "react";

type Theme = "dark" | "light";

export function useDarkMode() {
  const [theme, setTheme] = useState<Theme>("dark");

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const initializeTheme = () => {
      try {
        const savedTheme = localStorage.getItem("theme") as Theme;
        const systemPrefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;

        const initialTheme =
          savedTheme || (systemPrefersDark ? "dark" : "light");
        setTheme(initialTheme);
      } catch (error) {
        console.warn("Error reading theme from localStorage:", error);
        setTheme("dark");
      }
    };

    initializeTheme();
  }, []);

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;

    // Remove both classes first
    root.classList.remove("dark", "light");

    // Add the current theme class
    root.classList.add(theme);

    // Add transition class for smooth changes
    root.classList.add("theme-transition");

    // Save to localStorage
    try {
      localStorage.setItem("theme", theme);
    } catch (error) {
      console.warn("Error saving theme to localStorage:", error);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
}
