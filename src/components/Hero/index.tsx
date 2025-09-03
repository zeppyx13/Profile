"use client";
import Image from "next/image";
import TypewriterComponent from "typewriter-effect";
import { motion } from "framer-motion";
import Link from "next/link";
const Hero = () => {
  return (
    <section className="relative flex items-center justify-center h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/jumbo.jpg"
        alt="Hero Image"
        fill
        style={{ objectFit: "cover" }}
        priority
        className="scale-105 transition-transform duration-700 hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      <motion.div
        className="relative z-10 text-center text-white px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          <TypewriterComponent
            options={{
              strings: ["Welcome to My Portfolio", "Discover My Projects", "Let's Build Somethings"],
              autoStart: true,
              loop: true,
              delay: 120,
            }}
          />
        </h1>

        <p className="text-lg md:text-xl max-w-xl mx-auto mb-6 text-gray-200">
          Explore my journey as a developer and discover the skills and
          projects I’ve built along the way.
        </p>
        {/* CTA Buttons */}
        <div className="flex justify-center gap-4">
          <motion.a
            href="/Portfolio"
            className="px-6 py-3 rounded-full bg-indigo-900 text-white text-lg font-semibold hover:bg-indigo-950 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Projects
          </motion.a>
          <motion.a
            href="#contact"
            className="px-6 py-3 rounded-full bg-transparent border border-white text-white text-lg font-semibold hover:bg-white hover:text-black transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white opacity-80"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-sm">Scroll Down</span>
        <div className="w-6 h-6 mx-auto mt-2 border-b-2 border-r-2 border-white rotate-45"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
