"use client";
import { motion } from "framer-motion";

const timeline = [
    {
        year: "2025",
        title: "Backend Developer Intern",
        place: "Startup TechX",
        description:
            "Mengembangkan REST API dan melakukan optimasi database untuk aplikasi SaaS skala besar.",
    },
    {
        year: "2024",
        title: "Ketua UKM Robotics",
        place: "ITB STIKOM Bali",
        description:
            "Memimpin tim untuk kompetisi robot nasional, fokus pada integrasi IoT & AI.",
    },
    {
        year: "2023",
        title: "Freelance IoT Developer",
        place: "Remote",
        description:
            "Mengerjakan proyek IoT berbasis ESP32 dengan integrasi cloud dan sistem monitoring.",
    },
];

export default function TimelineSection() {
    return (
        <section id="timeline" className="py-16 bg-gray-900 text-white">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12 text-red-600">
                    My Journey
                </h2>

                {/* Red line */}
                <div className="relative ml-8">
                    <div className="absolute top-0 left-[-13px] w-1 bg-red-600 h-full rounded-full"></div>

                    {timeline.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="mb-12 relative pl-12"
                        >
                            {/* Marker bulat */}
                            <span className="absolute -left-8 flex items-center justify-center w-10 h-10 bg-red-600 text-white font-bold rounded-full ring-4 ring-gray-900 shadow-lg">
                                {item.year}
                            </span>

                            {/* Card */}
                            <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-red-600/30 transition">
                                <h3 className="text-xl font-semibold text-red-600">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-2">{item.place}</p>
                                <p className="text-gray-300 text-sm">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
