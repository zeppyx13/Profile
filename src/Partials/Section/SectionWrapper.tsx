"use client";

import React from "react";

interface SectionWrapperProps {
    children: React.ReactNode;
    id?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id }) => {
    return (
        <section
            id={id}
            className="relative bg-gradient-to-b from-gray-50 via-white to-gray-100 py-24"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-32">
                {children}
            </div>
        </section>
    );
};

export default SectionWrapper;
