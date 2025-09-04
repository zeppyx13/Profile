"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const PageSection = () => {
  return (
    <section
      id="portfolio"
      className="relative bg-gradient-to-b from-gray-50 via-white to-gray-100 py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-32">
        {/* === Portfolio Section === */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          {/* Image Side */}
          <motion.div
            className="relative w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Image
                src="/images/portfolio.png"
                alt="Portfolio Illustration"
                width={450}
                height={450}
                className="drop-shadow-xl rounded-2xl"
                priority
              />
              <div className="absolute inset-0 rounded-2xl bg-black/10 group-hover:bg-black/20 transition duration-300" />
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              <span className="text-[#6F4E37]">Portfolio</span>
            </h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed tracking-wide mb-8">
              Discover my projects that showcase my skills in
              <span className="font-bold text-[#6F4E37]"> web development</span> and
              <span className="font-bold text-[#6F4E37]"> IoT systems</span>.
              From dynamic web apps, robotic systems, AI, and smart IoT devices with real-time data integration,
              each project reflects my creativity, technical expertise, and passion for building innovative, impactful solutions.
            </p>
            <motion.a
              href="/Portfolio"
              className="inline-block px-8 py-3 rounded-full bg-[#6F4E37] text-white text-lg font-semibold hover:bg-[#5b3e2e] shadow-xl hover:shadow-2xl transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Lihat Portfolio
            </motion.a>
          </motion.div>
        </div>

        {/* === Blog Section === */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-16 bg-gradient-to-b from-gray-50 via-white to-gray-100 m-3 p-6">
          {/* Image Side */}
          <motion.div
            className="relative w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Image
                src="/images/blogging.png"
                alt="Blog Illustration"
                width={450}
                height={450}
                className="drop-shadow-xl rounded-2xl"
                priority
              />
              <div className="absolute inset-0 rounded-2xl bg-black/10 group-hover:bg-black/20 transition duration-300" />
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              <span className="text-[#6F4E37]">Blog</span>
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Saya rutin membagikan wawasan, tutorial, dan update terbaru seputar
              web development dan teknologi. Blog ini adalah tempat saya berbagi
              tantangan yang dihadapi, solusi yang saya temukan, serta tips untuk
              developer lain yang ingin meningkatkan keterampilan mereka.
            </p>
            <motion.a
              href="https://blog.gungnanda.com"
              className="inline-block px-8 py-3 rounded-full bg-[#6F4E37] text-white text-lg font-semibold hover:bg-[#5b3e2e] shadow-xl hover:shadow-2xl transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discover Blog's
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PageSection;
