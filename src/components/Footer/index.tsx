"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-300 py-12 w-full" id="contact">
      <div className="container mx-auto px-6 relative z-10">
        {/* Grid Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* About Section */}
          <div>
            <h2 className="text-2xl font-extrabold mb-4 text-[#6F4E37] dark:text-[#D4A373] tracking-wide font-rubik">
              GungNanda<span className="text-orange-500">.com</span>
            </h2>
            <p className="text-sm leading-6 text-gray-400">
              GungNanda.com is the personal website of Gung Nanda, a passionate developer specializing in Web, IoT, and Machine Learning. Explore my portfolio, blog, and projects that showcase my journey in creating innovative solutions that connect technology with real-world needs.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="text-lg font-semibold uppercase mb-4 text-orange-400">
              Quick Links
            </h2>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#About"
                  className="hover:text-orange-400 transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="hover:text-orange-400 transition-colors duration-300"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="#blog"
                  className="hover:text-orange-400 transition-colors duration-300"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Projects Section */}
          <div>
            <h2 className="text-lg font-semibold uppercase mb-4 text-orange-400">
              My Projects
            </h2>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="https://Robustica.gungnanda.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition-colors duration-300"
                >
                  Robustica
                </Link>
              </li>
              <li>
                <Link
                  href="https://NongkiYok.gungnanda.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition-colors duration-300"
                >
                  Nongki-Yok
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h2 className="text-lg font-semibold uppercase mb-4 text-orange-400">
              Contact Info
            </h2>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="font-bold text-white">Phone:</span>{" "}
                <Link
                  target="_blank"
                  href="tel:+6282146011946"
                  className="hover:text-orange-400 transition-colors duration-300"
                >
                  +62 821 4601 1946
                </Link>
              </li>
              <li>
                <span className="font-bold text-white">Email:</span>{" "}
                <Link
                  target="_blank"
                  href="mailto:contact@gungnanda.com"
                  className="hover:text-orange-400 transition-colors duration-300"
                >
                  contact@gungnanda.com
                </Link>
              </li>
              <li>
                <span className="font-bold text-white">Website:</span>{" "}
                <Link
                  target="_blank"
                  href="https://gungnanda.com/"
                  className="hover:text-orange-400 transition-colors duration-300"
                >
                  gungnanda.com
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="mt-10 border-t border-gray-700" />

        {/* Copyright Section */}
        <motion.div
          className="mt-6 text-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-white font-semibold">Gung Nanda</span>. All
            Rights Reserved.
          </p>
        </motion.div>
      </div>

      {/* Background Glow Effect */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-600 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>
    </footer>
  );
}

export default Footer;
