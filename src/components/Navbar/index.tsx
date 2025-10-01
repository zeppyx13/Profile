"use client";
import { Menu, X, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState("EN");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "EN" ? "ID" : "EN");
  };

  const isPortfolio = pathname.startsWith("/Portfolio");

  const menuItems = [
    { name: "HOME", href: "/" },
    { name: "PORTFOLIO", href: "/Portfolio" },
    { name: "GALLERY", href: "/Gallery" },
    { name: "CONTACT", href: "/#contact" },
  ];

  const accentColor = isPortfolio ? "text-red-600" : "text-gray-800";
  const accentColor2 = isPortfolio ? "text-white" : "text-orange-500";
  const hoverAccent = isPortfolio ? "hover:text-red-600" : "hover:text-[#6F4E37]";
  const afterAccent = isPortfolio ? "after:bg-red-600" : "after:bg-[#6F4E37]";
  const menuText = isPortfolio ? "text-white" : "text-gray-700";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${scrolled
          ? isPortfolio
            ? "bg-gray-900/95 backdrop-blur-md shadow-lg"
            : "bg-white/90 backdrop-blur-md shadow-lg"
          : isPortfolio
            ? "bg-gray-900/40 backdrop-blur-sm"
            : "bg-gradient-to-r from-white via-white/80 to-white/60"
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <Link
          href="/"
          className={`text-xl md:text-2xl font-extrabold tracking-wide font-rubik ${accentColor}`}
        >
          GungNanda<span className={`${accentColor2}`}>.com</span>
        </Link>
        <nav className={`hidden md:flex gap-8 text-sm font-semibold ${menuText}`}>
          {menuItems.map((item) => (
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
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            aria-label="Change Language"
            className="flex items-center gap-1 px-2 py-1 rounded-md hover:bg-gray-100/20 transition"
          >
            <Globe className={`w-5 h-5 ${isPortfolio ? "text-white" : "text-gray-700"}`} />
            <span className={`hidden md:inline text-sm ${menuText}`}>{language}</span>
          </button>
          <button
            className={`md:hidden transition-transform duration-300 hover:scale-110 ${isPortfolio ? "text-white" : "text-gray-800"}`}
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
            className={`md:hidden backdrop-blur-md border-t shadow-lg 
              ${isPortfolio ? "bg-gray-900/95 border-gray-700 text-white" : "bg-white/95 border-gray-200 text-gray-700"}`}
          >
            <nav className="flex flex-col gap-4 px-6 py-6 font-semibold">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`relative text-left ${hoverAccent} transition-colors duration-300`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
