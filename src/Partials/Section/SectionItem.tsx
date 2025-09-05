"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../Button/Button";
import showAlert from "../alerts/showAlert";

interface SectionItemProps {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    imageSrc: string;
    reverse?: boolean;
}

const SectionItem: React.FC<SectionItemProps> = ({
    title,
    description,
    imageSrc,
    reverse = false,
}) => {
    // Fungsi handle click khusus untuk Blog
    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (title === "Blog") {
            e.preventDefault();
            showAlert({
                title: "Blog Coming Soon",
                text: "Blog is currently under construction and not available yet.",
                icon: "warning",
                confirmButtonText: "Confirm",
            });
        }
    };

    return (
        <div
            className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"
                } items-center justify-between gap-16`}
        >
            <motion.div
                className="relative w-full md:w-1/2 flex justify-center"
                initial={{ opacity: 0, x: reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <motion.div
                    className="relative group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200 }}
                >
                    <Image
                        src={imageSrc}
                        alt={title}
                        width={450}
                        height={450}
                        className="drop-shadow-xl rounded-2xl"
                        priority
                    />
                    <div className="absolute inset-0 rounded-2xl bg-black/10 group-hover:bg-black/20 transition duration-300" />
                </motion.div>
            </motion.div>

            {/* Bagian Teks */}
            <motion.div
                className="w-full md:w-1/2 text-center md:text-left"
                initial={{ opacity: 0, x: reverse ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                    <span className="text-[#6F4E37]">{title}</span>
                </h2>
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed tracking-wide mb-8">
                    {description}
                </p>

                {/* Tombol dengan handler klik */}
                <button
                    className="inline-block px-8 py-3 rounded-full bg-[#6F4E37] text-white text-lg font-semibold hover:bg-[#5b3e2e] shadow-xl hover:shadow-2xl transition duration-300"
                    onClick={handleButtonClick}
                >
                    Discover Blogs
                </button>
            </motion.div>
        </div>
    );
};

export default SectionItem;
