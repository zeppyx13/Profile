"use client";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialLinks: React.FC = () => {
    return (
        <div className="flex justify-center md:justify-start gap-4 text-xl">
            <a href="https://facebook.com" aria-label="Facebook" title="Facebook" className="hover:text-red-600">
                <FaFacebook />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" title="Twitter" className="hover:text-red-600">
                <FaTwitter />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" title="Instagram" className="hover:text-red-600">
                <FaInstagram />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" title="LinkedIn" className="hover:text-red-600">
                <FaLinkedin />
            </a>
        </div>
    );
};

export default SocialLinks;
