"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12">

        {/* Text Section */}
        <motion.div
          className="flex-1 space-y-6 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#6F4E37] leading-tight">
            About <span className="text-[#D4A373]">Me</span>
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed tracking-wide">
            Halo! Saya{" "}
            <span className="font-semibold text-[#6F4E37]">Gung Nanda</span>,
            seorang pengembang web yang berfokus pada menciptakan pengalaman digital yang
            menarik dan fungsional. Dengan pengalaman dalam{" "}
            <span className="font-medium">React.js</span>,{" "}
            <span className="font-medium">Next.js</span>, dan{" "}
            <span className="font-medium">Node.js</span>, saya senang memecahkan
            masalah kompleks serta menghadirkan desain yang modern dan intuitif.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex-1 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-64 h-64 lg:w-80 lg:h-80 mx-auto">
            <Image
              src="/images/Logo.jpg"
              alt="Profile"
              width={450}
              height={450}
              className="object-cover rounded-full shadow-2xl border-4 border-[#D4A373]"
              priority
            />
          </div>

          {/* Decorative Elements */}
          <div className="absolute -z-10 top-0 -right-10 w-40 h-40 bg-[#D4A373] opacity-30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -z-10 bottom-0 -left-10 w-40 h-40 bg-[#6F4E37] opacity-30 rounded-full blur-3xl animate-pulse"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
