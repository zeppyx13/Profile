"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { apiFetch } from "@/lib/api";
// @ts-ignore
import "swiper/css";

interface Technology {
    IdTechStack: number;
    Tech: string;
    Description: string;
    Images: string;
}

export default function SkillsSection() {
    const [technologies, setTechnologies] = useState<Technology[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTech = async () => {
            try {
                const res = await apiFetch<{
                    success: boolean;
                    data: Technology[];
                }>("/Technology");
                if (res.success && res.data) {
                    setTechnologies(res.data);
                }
            } catch (err) {
                console.error("Failed to fetch technologies:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchTech();
    }, []);

    return (
        <section id="skills" className="py-16 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-10 text-red-600">
                    My Skills
                </h2>

                {loading ? (
                    <p className="text-center text-gray-400">Loading...</p>
                ) : (
                    <Swiper
                        spaceBetween={15}
                        slidesPerView={2}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                            1280: { slidesPerView: 5 }, // 👈 5 per row di layar besar
                        }}
                        modules={[Autoplay]}
                    >
                        {technologies.map((tech) => (
                            <SwiperSlide key={tech.IdTechStack}>
                                <div className="relative group bg-gray-800 p-4 rounded-xl shadow-lg h-48 flex flex-col items-center justify-center text-center transition hover:scale-105">
                                    {/* Icon / Image */}
                                    <div className="mb-3">
                                        <img
                                            src={`${process.env.NEXT_PUBLIC_IMG_BASE_URL}/${tech.Images}`}
                                            alt={tech.Tech}
                                            className="h-10 mx-auto"
                                        />
                                    </div>
                                    <h3 className="font-bold text-base text-red-600">
                                        {tech.Tech}
                                    </h3>

                                    {/* Overlay muncul saat hover */}
                                    <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition rounded-xl p-3">
                                        <p className="text-xs text-gray-200">
                                            {tech.Description}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        </section>
    );
}
