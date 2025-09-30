"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero/portfolio";
import SkillsSection from "@/Partials/Portfolio/skill";
import TimelineSection from "@/Partials/Portfolio/timeline";
import ProjectsSection from "@/Partials/Portfolio/project";
import ContactSection from "@/Partials/Portfolio/contact";
import Footer from "@/components/Footer";

const PortfolioHomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Navbar />
      <main className="flex-1 mt-16">
        <Hero />
        <SkillsSection />
        <TimelineSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioHomePage;
