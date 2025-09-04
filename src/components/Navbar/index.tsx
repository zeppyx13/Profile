// src/components/Navbar/Navbar.tsx
"use client";
import { Menu, X, Moon, Sun, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("EN");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Toggle language
  const toggleLanguage = () => {
    setLanguage(language === "EN" ? "ID" : "EN");
  };

  const menuItems = ["HOME", "CATEGORIES", "BLOG", "CONTACT"];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg"
          : "bg-gradient-to-r from-white via-white/80 to-white/60 dark:from-gray-900 dark:via-gray-800/80 dark:to-gray-900/60"
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-extrabold text-[#6F4E37] dark:text-[#D4A373] tracking-wide rubik">
            GungNanda<span className="text-orange-500">.com</span>
          </span>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-8 text-sm font-semibold text-gray-700 dark:text-gray-200">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`/${item === "HOME" ? "" : item.toLowerCase()}`}
              className="relative hover:text-[#6F4E37] dark:hover:text-[#D4A373] transition-colors duration-300
                after:content-[''] after:absolute after:-bottom-1 after:left-0 
                after:w-0 after:h-[2px] after:bg-[#6F4E37] dark:after:bg-[#D4A373]
                after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            aria-label="Change Language"
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <Globe className="w-6 h-6 text-gray-700 dark:text-gray-200" />
          </button>
          <span className="hidden md:inline text-sm font-medium text-gray-700 dark:text-gray-200">
            {language}
          </span>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {darkMode ? (
              <Sun className="w-6 h-6 text-yellow-500" />
            ) : (
              <Moon className="w-6 h-6 text-gray-700 dark:text-gray-200" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-800 dark:text-gray-200 transition-transform duration-300 hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-t border-gray-200 dark:border-gray-700"
          >
            <nav className="flex flex-col gap-4 px-6 py-6 text-gray-700 dark:text-gray-200 font-semibold">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`/${item === "HOME" ? "" : item.toLowerCase()}`}
                  className="relative hover:text-[#6F4E37] dark:hover:text-[#D4A373] transition-colors duration-300
                    after:content-[''] after:absolute after:-bottom-1 after:left-0 
                    after:w-0 after:h-[2px] after:bg-[#6F4E37] dark:after:bg-[#D4A373]
                    after:transition-all after:duration-300 hover:after:w-full"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
