"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { apiFetch } from "@/lib/api";

interface Journey {
    id: number;
    year: string;
    title: string;
    description: string;
    place: string;
}

export default function TimelineSection() {
    const [journeys, setJourneys] = useState<Journey[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJourney = async () => {
            try {
                const res = await apiFetch<{ success: boolean; data: Journey[] }>("/Journey");
                if (res.success && res.data) {
                    setJourneys(res.data);
                }
            } catch (err) {
                console.error("Failed to fetch journeys:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchJourney();
    }, []);

    return (
        <section id="timeline" className="py-16 bg-gray-900 text-white">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12 text-red-600">
                    My Journey
                </h2>

                {loading ? (
                    <p className="text-center text-gray-400">Loading timeline...</p>
                ) : journeys.length === 0 ? (
                    <p className="text-center text-gray-400">No journeys found.</p>
                ) : (
                    <div className="relative ml-8">
                        {/* Red line */}
                        <div className="absolute top-0 left-[-14px] w-1 bg-red-600 h-full rounded-full"></div>

                        {journeys.map((item, index) => (
                            <motion.div
                                key={item.id}
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
                )}
            </div>
        </section>
    );
}
