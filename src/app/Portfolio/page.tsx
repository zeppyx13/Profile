"use client";
import { useEffect, useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import SkillsSection from "@/Partials/Portfolio/skill";
import TimelineSection from "@/Partials/Portfolio/timeline";
const roles = ["Backend Developer", "Robotics Engineer", "IoT Developer", "AI Enthusiast"];

const PortfolioHome = () => {
  const [currentRole, setCurrentRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const typingSpeed = deleting ? 50 : 100;
    const timer = setTimeout(() => {
      const fullRole = roles[roleIndex];
      if (!deleting && charIndex < fullRole.length) {
        setCurrentRole(fullRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (deleting && charIndex > 0) {
        setCurrentRole(fullRole.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else if (!deleting && charIndex === fullRole.length) {
        setTimeout(() => setDeleting(true), 1500);
      } else if (deleting && charIndex === 0) {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, roleIndex]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-gray-800 shadow-md">
        <h1 className="text-xl font-bold text-red-600">Portfolio.</h1>
        <ul className="flex gap-6 text-sm font-medium">
          {["Home", "About", "Skills", "Portfolio", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-red-600 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-12 gap-12">
        {/* Left Side */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <p className="text-gray-400 text-lg">Hello, It's Me</p>
          <h1 className="text-4xl md:text-5xl font-extrabold">
            <span className="text-white">Gung Nanda</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold">
            And I'm a{" "}
            <span className="text-red-600">{currentRole}|</span>
          </h2>
          <p className="text-gray-400 max-w-md mx-auto md:mx-0">
            I specialize in building modern web applications, crafting
            user-focused solutions, and experimenting with IoT & AI
            technologies.
          </p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-4 text-xl">
            <a href="https://facebook.com" className="hover:text-red-600" title="Facebook" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://twitter.com" className="hover:text-red-600" title="Twitter" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://instagram.com" className="hover:text-red-600" title="Instagram" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://linkedin.com" className="hover:text-red-600" title="LinkedIn" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>

          {/* Button */}
          <a
            href="/cv.pdf"
            download
            className="inline-block mt-4 px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold shadow-md transition"
          >
            Download CV
          </a>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-center relative">
          <div className="relative w-90 h-90 md:w-[450px] md:h-[450px]">
            {/* Glow belakang */}
            <div className="absolute inset-0 bg-red-600/40 blur-3xl rounded-full"></div>
            {/* Foto hexagon */}
            <div
              className="relative w-full h-full overflow-hidden shadow-2xl"
              style={{
                clipPath: "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
              }}
            >
              <img
                src="/profile.jpeg" // ganti dengan foto kamu
                alt="Profile"
                className="w-full h-full object-cover"
              />
              {/* Fade biar lebih nyatu */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
        {/* Skills Section */}
      </main>
      <SkillsSection />
      <TimelineSection />
    </div>
  );
};

export default PortfolioHome;
