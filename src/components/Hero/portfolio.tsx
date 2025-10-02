"use client";
import React, { useEffect, useState } from "react";
import SocialLinks from "@/components/Links/SocialLinks";
import ProfileHex from "@/components/Hero/ProfileHex";

const roles = ["Full-Stack Developer", "Robotics Engineer", "IoT Developer", "AI Enthusiast"];

const Hero: React.FC = () => {
    const [currentRole, setCurrentRole] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

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
        <section className="flex-1 flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-12 gap-12">
            {/* Left */}
            <div className="flex-1 space-y-6 text-center md:text-left">
                <p className="text-gray-400 text-lg">Hello, It's Me</p>
                <h1 className="text-4xl md:text-5xl font-extrabold">
                    <span className="text-white">Gung Nanda</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold">
                    And I'm a <span className="text-red-600">{currentRole}|</span>
                </h2>
                <p className="text-gray-400 max-w-md mx-auto md:mx-0">
                    I specialize in building modern web applications, crafting user-focused solutions, and experimenting with IoT & AI technologies.
                </p>

                <SocialLinks />

                <a
                    href="https://drive.google.com/drive/folders/1fUz7elGzCPsmMJKxEGq3Peiwt6VfCbVn?usp=sharing"
                    className="inline-block mt-4 px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold shadow-md transition"
                >
                    Download CV
                </a>
            </div>

            {/* Right */}
            <ProfileHex imgSrc="/profile.jpeg" size={380} />
        </section>
    );
};

export default Hero;
