"use client";
import React from "react";
import { FaDiscord, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const SocialLinks: React.FC = () => {
    return (
        <div className="flex justify-center md:justify-start gap-4 text-xl">
            <a href="https://discord.com/users/555343817348349977" target="_blank" rel="noopener" aria-label="Discord" title="Discord" className="hover:text-red-600">
                <FaDiscord />
            </a>
            <a href="https://github.com/zeppyx13" target="_blank" rel="noopener" aria-label="GitHub" title="GitHub" className="hover:text-red-600">
                <FaGithub />
            </a>
            <a href="https://www.instagram.com/gn.porto/" target="_blank" rel="noopener" aria-label="Instagram" title="Instagram" className="hover:text-red-600">
                <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/gung-nanda/" target="_blank" rel="noopener" aria-label="LinkedIn" title="LinkedIn" className="hover:text-red-600">
                <FaLinkedin />
            </a>
        </div>
    );
};

export default SocialLinks;
