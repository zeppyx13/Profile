"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Photos from "@/Partials/Gallery/photos";

const Gallery = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar />
            <Photos />
            <Footer />
        </div>
    );
};

export default Gallery;
