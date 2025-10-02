"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

function Footer() {
  const pathname = usePathname();
  const isPortfolio = pathname.startsWith("/Portfolio");
  const accentColor = isPortfolio ? "text-red-600" : "text-white-600";
  const accentColor2 = isPortfolio ? "text-white" : "text-orange-500";
  const hoverAccent = isPortfolio ? "hover:text-red-500" : "hover:text-[#D4A373]";
  const sectionAccent = isPortfolio ? "text-red-400" : "text-orange-400";

  return (
    <footer
      className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-300 py-12 w-full"
      id="contact"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div>
            <h2
              className={`text-2xl font-extrabold mb-4 tracking-wide font-rubik ${accentColor}`}
            >
              GungNanda<span className={`${isPortfolio ? "text-white" : "text-orange-500"}`}>.com</span>
            </h2>
            <p className="text-sm leading-6 text-gray-400">
              GungNanda.com is the personal website of Gung Nanda, a passionate developer specializing in Web, IoT, and Machine Learning. Explore my portfolio, blog, and projects that showcase my journey in creating innovative solutions that connect technology with real-world needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className={`text-lg font-semibold uppercase mb-4 ${sectionAccent}`}>
              Quick Links
            </h2>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/#About" className={`transition-colors duration-300 ${hoverAccent}`}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/#projects" className={`transition-colors duration-300 ${hoverAccent}`}>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/#blog" className={`transition-colors duration-300 ${hoverAccent}`}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/Gallery" className={`transition-colors duration-300 ${hoverAccent}`}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/#contact" className={`transition-colors duration-300 ${hoverAccent}`}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className={`text-lg font-semibold uppercase mb-4 ${sectionAccent}`}>
              My Projects
            </h2>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="https://Robustica.gungnanda.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors duration-300 ${hoverAccent}`}
                >
                  Robustica
                </Link>
              </li>
              <li>
                <Link
                  href="https://NongkiYok.gungnanda.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors duration-300 ${hoverAccent}`}
                >
                  Nongki-Yok
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className={`text-lg font-semibold uppercase mb-4 ${sectionAccent}`}>
              Contact Info
            </h2>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="font-bold text-white">Phone:</span>{" "}
                <Link
                  target="_blank"
                  href="tel:+6282146011946"
                  className={`transition-colors duration-300 ${hoverAccent}`}
                >
                  +62 821 4601 1946
                </Link>
              </li>
              <li>
                <span className="font-bold text-white">Email:</span>{" "}
                <Link
                  target="_blank"
                  href="mailto:contact@gungnanda.com"
                  className={`transition-colors duration-300 ${hoverAccent}`}
                >
                  contact@gungnanda.com
                </Link>
              </li>
              <li>
                <span className="font-bold text-white">Website:</span>{" "}
                <Link
                  target="_blank"
                  href="https://gungnanda.com/"
                  className={`transition-colors duration-300 ${hoverAccent}`}
                >
                  gungnanda.com
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
        <div className="mt-10 border-t border-gray-700" />
        <motion.div
          className="mt-6 text-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-white font-semibold">Gung Nanda</span>. All Rights Reserved.
          </p>
        </motion.div>
      </div>
      <div
        className={`absolute top-0 left-0 w-72 h-72 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse ${isPortfolio ? "bg-red-600" : "bg-orange-500"
          }`}
      ></div>
      <div
        className={`absolute bottom-0 right-0 w-72 h-72 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse ${isPortfolio ? "bg-red-800" : "bg-purple-600"
          }`}
      ></div>
    </footer>
  );
}

export default Footer;
