// src/components/Navbar/Navbar.tsx
"use client";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

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

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${scrolled
                    ? "bg-white/95 backdrop-blur-md shadow-sm border-gray-200"
                    : "bg-white border-gray-200"
                }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <span className="text-2xl font-extrabold pt-sans-regular text-[#6F4E37]">
                        GungNanda.com
                    </span>
                </div>

                {/* Menu Desktop */}
                <nav className="hidden md:flex gap-8 text-sm font-semibold text-gray-700">
                    {["HOME", "CATEGORIES", "BLOG", "CONTACT"].map((item) => (
                        <a
                            key={item}
                            href={`/${item === "HOME" ? "" : item.toLowerCase()}`}
                            className="relative hover:text-[#6F4E37] transition-colors 
                        after:content-[''] after:absolute after:-bottom-1 after:left-0 
                        after:w-0 after:h-[2px] after:bg-[#6F4E37] 
                        after:transition-all after:duration-300 hover:after:w-full"
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-gray-800"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 animate-fade-in">
                    <nav className="flex flex-col gap-4 px-6 py-4 text-gray-700 font-semibold">
                        {["HOME", "CATEGORIES", "BLOG", "CONTACT"].map((item) => (
                            <a
                                key={item}
                                href={`/${item === "HOME" ? "" : item.toLowerCase()}`}
                                className="relative hover:text-[#6F4E37] transition-colors 
                          after:content-[''] after:absolute after:-bottom-1 after:left-0 
                          after:w-0 after:h-[2px] after:bg-[#6F4E37] 
                          after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
