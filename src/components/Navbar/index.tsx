// src/components/Navbar/Navbar.tsx
"use client";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["HOME", "CATEGORIES", "BLOG", "CONTACT"];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg"
          : "bg-gradient-to-r from-white via-white/80 to-white/60"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-extrabold text-[#6F4E37] tracking-wide rubik">
            GungNanda<span className="text-orange-500">.com</span>
          </span>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-8 text-sm font-semibold text-gray-700">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`/${item === "HOME" ? "" : item.toLowerCase()}`}
              className="relative hover:text-[#6F4E37] transition-colors duration-300
                after:content-[''] after:absolute after:-bottom-1 after:left-0 
                after:w-0 after:h-[2px] after:bg-[#6F4E37] 
                after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-800 transition-transform duration-300 hover:scale-110"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200"
          >
            <nav className="flex flex-col gap-4 px-6 py-6 text-gray-700 font-semibold">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`/${item === "HOME" ? "" : item.toLowerCase()}`}
                  className="relative hover:text-[#6F4E37] transition-colors duration-300
                    after:content-[''] after:absolute after:-bottom-1 after:left-0 
                    after:w-0 after:h-[2px] after:bg-[#6F4E37] 
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
