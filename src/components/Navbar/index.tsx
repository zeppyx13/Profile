"use client";
import { Menu, X, Moon, Sun, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("EN");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  const toggleLanguage = () => {
    setLanguage(language === "EN" ? "ID" : "EN");
  };

  const isDashboard = pathname.startsWith("/Portfolio");

  const mainMenu = [
    { name: "HOME", href: "home" },
    { name: "PORTFOLIO", href: "projects" },
    { name: "BLOG", href: "blog" },
    { name: "CONTACT", href: "contact" },
  ];

  const portfolioMenu = [
    { name: "HOME", href: "/" },
    { name: "SKILLS", href: "skills" },
    { name: "JOURNEY", href: "journey" },
    { name: "PROJECTS", href: "projects" },
    { name: "CONTACT", href: "contact" },
  ];

  const menuItems = isDashboard ? portfolioMenu : mainMenu;

  const accentColor = isDashboard ? "text-red-600" : "text-white-600";
  const accentColor2 = isDashboard ? "text-white" : "text-orange-500";
  const hoverAccent = isDashboard ? "hover:text-white-600" : "hover:text-[#6F4E37]";
  const afterAccent = isDashboard
    ? "after:bg-red-600 dark:after:bg-red-500"
    : "after:bg-[#6F4E37] dark:after:bg-[#D4A373]";

  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg"
        : "bg-gradient-to-r from-white via-white/80 to-white/60 dark:from-gray-900 dark:via-gray-800/80 dark:to-gray-900/60"
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <span
            className={`text-2xl font-extrabold tracking-wide font-rubik ${accentColor}`}
          >
            GungNanda<span className={`${accentColor2}`}>.com</span>
          </span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-semibold text-gray-700 dark:text-gray-200">
          {menuItems.map((item) =>
            isDashboard && item.name === "HOME" ? (
              <Link
                key={item.name}
                href={item.href}
                className={`relative ${hoverAccent} transition-colors duration-300
                  after:content-[''] after:absolute after:-bottom-1 after:left-0
                  after:w-0 after:h-[2px] ${afterAccent}
                  after:transition-all after:duration-300 hover:after:w-full`}
              >
                {item.name}
              </Link>
            ) : (
              <button
                key={item.name}
                onClick={() => handleScrollToSection(item.href)}
                className={`relative ${hoverAccent} transition-colors duration-300
                  after:content-[''] after:absolute after:-bottom-1 after:left-0
                  after:w-0 after:h-[2px] ${afterAccent}
                  after:transition-all after:duration-300 hover:after:w-full`}
              >
                {item.name}
              </button>
            )
          )}
        </nav>
        <div className="flex items-center gap-4">
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

          <button
            className="md:hidden text-gray-800 dark:text-gray-200 transition-transform duration-300 hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>
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
              {menuItems.map((item) =>
                isDashboard && item.name === "HOME" ? (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`relative text-left ${hoverAccent} transition-colors duration-300
                      after:content-[''] after:absolute after:-bottom-1 after:left-0
                      after:w-0 after:h-[2px] ${afterAccent}
                      after:transition-all after:duration-300 hover:after:w-full`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => {
                      handleScrollToSection(item.href);
                      setIsOpen(false);
                    }}
                    className={`relative text-left ${hoverAccent} transition-colors duration-300
                      after:content-[''] after:absolute after:-bottom-1 after:left-0
                      after:w-0 after:h-[2px] ${afterAccent}
                      after:transition-all after:duration-300 hover:after:w-full`}
                  >
                    {item.name}
                  </button>
                )
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
