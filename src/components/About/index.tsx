"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12">
        <motion.div
          className="flex-1 space-y-6 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#6F4E37] leading-tight">
            About <span className="text-[#D4A373]">Me</span>
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed tracking-wide max-w-3xl mx-auto text-center">
            Hello! I'm <span className="font-bold text-[#6F4E37]">Gung Nanda</span>, a passionate creator who thrives at the intersection of
            <span className="font-semibold"> Web</span>, <span className="font-semibold">IoT</span>, and
            <span className="font-semibold"> Machine Learning</span>. I specialize in crafting intelligent, user-focused solutions
            with a mission to connect people and ideas through meaningful innovation that bridges the gap between technology and real-world needs.
          </p>
        </motion.div>
        <motion.div
          className="flex-1 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-64 h-64 lg:w-80 lg:h-80 mx-auto">
            <Image
              src="/images/Logo.png"
              alt="Profile"
              width={450}
              height={450}
              className="object-cover rounded-full shadow-2xl border-4 border-[#D4A373]"
              priority
            />
          </div>
          <div className="absolute -z-10 top-0 -right-10 w-40 h-40 bg-[#D4A373] opacity-30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -z-10 bottom-0 -left-10 w-40 h-40 bg-[#6F4E37] opacity-30 rounded-full blur-3xl animate-pulse"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
