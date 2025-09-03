"use client";
import Image from "next/image";

const About = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-[#f8f4f0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#6F4E37] leading-tight">
            About <span className="text-[#D4A373]">Me</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Halo! Saya <span className="font-semibold text-[#6F4E37]">Gung Nanda</span>, 
            seorang pengembang web yang berfokus pada menciptakan pengalaman digital yang menarik dan fungsional.
            Dengan pengalaman dalam <span className="font-medium">React.js</span>, <span className="font-medium">Next.js</span>, dan <span className="font-medium">Node.js</span>,
            saya senang memecahkan masalah kompleks dan menghadirkan desain yang intuitif.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Saya percaya bahwa teknologi yang hebat harus memberikan dampak positif 
            bagi penggunanya. Saat ini saya juga sedang mengembangkan beberapa proyek yang 
            menggabungkan teknologi modern dan AI untuk masa depan yang lebih baik.
          </p>
        </div>

        {/* Gambar About */}
        <div className="flex-1 relative">
          <div className="relative w-64 h-64 lg:w-80 lg:h-80 mx-auto">
            <Image
              src="/images/Logo.jpg"
              alt="Profile"
              fill
              className="object-cover rounded-full shadow-xl border-4 border-[#D4A373]"
            />
          </div>
          {/* Dekorasi animasi */}
          <div className="absolute -z-10 top-0 -right-10 w-40 h-40 bg-[#D4A373] opacity-20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -z-10 bottom-0 -left-10 w-40 h-40 bg-[#6F4E37] opacity-20 rounded-full blur-3xl animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
