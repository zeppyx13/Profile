"use client";

import React from "react";

interface SectionWrapperProps {
    children: React.ReactNode;
    id?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id }) => {
    // Tentukan style background berdasarkan id
    const bgClass =
        id === "portfolio"
            ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700"
            : "bg-gradient-to-b from-gray-50 via-white to-gray-100";

    return (
        <section
            id={id}
            className={`relative ${bgClass} py-24 transition-colors duration-500`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-32">
                {children}
            </div>
        </section>
    );
};

export default SectionWrapper;
