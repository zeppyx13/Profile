"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const images = [
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1483794344563-d27a8d18014e?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503264116251-35a269479413?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503264116251-35a269479413?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1483794344563-d27a8d18014e?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503264116251-35a269479413?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503264116251-35a269479413?q=80&w=1000&auto=format&fit=crop",
];

const Gallery = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar />
            <main className="flex-grow">
                <section className="py-20">
                    <div className="max-w-6xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#6F4E37]">
                                Gallery
                            </h2>
                            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                                A collection of abstract and aesthetic visuals, blending
                                creativity with technology-inspired vibes.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
                            {images.map((src, index) => (
                                <motion.div
                                    key={index}
                                    className={`relative overflow-hidden rounded-2xl shadow-md group 
                    ${index % 4 === 0 ? "row-span-2" : ""}`}
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <img
                                        src={src}
                                        alt={`Gallery ${index + 1}`}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#6F4E37]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-4">
                                        <p className="text-white font-semibold drop-shadow-md">
                                            Abstract {index + 1}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Gallery;
