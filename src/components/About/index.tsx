"use client";
import Image from "next/image";

const About = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/jumbo.jpg"
          alt="About Image"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      {/* Overlay Gelap */}
      <div className="absolute inset-0 bg-black opacity-50" />

      {/* Konten di atas gambar */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="mt-4 text-lg">
          Learn more about my background and skills
        </p>
      </div>
    </section>
  );
};

export default About;
