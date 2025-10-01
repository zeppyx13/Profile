"use client";
import { motion } from "framer-motion";
import { usePhotos } from "@/hooks/usePhotos";
const Photos = () => {
    const { photos, loading, error } = usePhotos();

    return (
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

                    {loading ? (
                        <p className="text-center text-gray-500">Loading photos...</p>
                    ) : error ? (
                        <p className="text-center text-red-500">{error}</p>
                    ) : photos.length === 0 ? (
                        <p className="text-center text-gray-500 italic">No photos found.</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
                            {photos.map((photo, index) => (
                                <motion.div
                                    key={photo.IdPhoto}
                                    className={`relative overflow-hidden rounded-2xl shadow-md group ${index % 4 === 0 ? "row-span-2" : ""
                                        }`}
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <img
                                        src={`${process.env.NEXT_PUBLIC_IMG_BASE_URL}/${photo.Images}`}
                                        alt={photo.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#6F4E37]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-4">
                                        <p className="text-white font-semibold drop-shadow-md">
                                            {photo.title}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
};

export default Photos;
