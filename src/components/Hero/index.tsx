"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import TypewriterComponent from "typewriter-effect";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/Partials/Button/Button";
const Hero = () => {
  const [showScrollDown, setShowScrollDown] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShowScrollDown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative flex items-center justify-center h-screen overflow-hidden" id="home">
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
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-rubik">
          <TypewriterComponent
            options={{
              strings: [
                "Welcome to My Website",
                "A Curated Collection of My Projects.",
                "Discover My Projects",
              ],
              autoStart: true,
              loop: true,
              delay: 120,
            }}
          />
        </h1>

        <p className="text-lg md:text-xl max-w-xl mx-auto mb-6 text-gray-200">
          A showcase of my development journey, from creative concepts to tangible results.
        </p>

        <div className="flex justify-center gap-4">
          <Button
            link="#projects"
            title="Explore Projects"
            style="rounded-full bg-indigo-900 text-white text-lg font-semibold hover:bg-indigo-950 duration-300"
          />
        </div>
      </motion.div>

      <AnimatePresence>
        {showScrollDown && (
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white opacity-80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="text-sm block"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            >
              Scroll Down
            </motion.span>
            <motion.div
              className="w-6 h-6 mx-auto mt-2 border-b-2 border-r-2 border-white rotate-45"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            ></motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
