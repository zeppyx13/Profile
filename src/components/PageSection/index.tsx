"use client";
import SectionWrapper from "../../Partials/Section/SectionWrapper";
import SectionItem from "../../Partials/Section/SectionItem";

const PageSection = () => {
  return (
    <>
      <SectionWrapper id="projects">
        {/* Portfolio Section */}
        <SectionItem
          title="Portfolio"
          description="Discover my projects that showcase my skills in web development and IoT systems. From dynamic web apps, robotic systems, AI, and smart IoT devices with real-time data integration, each project reflects my creativity, technical expertise, and passion for building innovative, impactful solutions."
          buttonText="Lihat Portfolio"
          buttonLink="/Portfolio"
          imageSrc="/images/portfolio.png"
        />
      </SectionWrapper>
      {/* Blog Section */}
      <SectionWrapper id="blog">
        <SectionItem
          title="Blog"
          description="Saya rutin membagikan wawasan, tutorial, dan update terbaru seputar web development dan teknologi. Blog ini adalah tempat saya berbagi tantangan yang dihadapi, solusi yang saya temukan, serta tips untuk developer lain yang ingin meningkatkan keterampilan mereka."
          buttonText="Discover Blog's"
          buttonLink="https://blog.gungnanda.com"
          imageSrc="/images/blogging.png"
          reverse
        />
      </SectionWrapper>
    </>
  );
};

export default PageSection;
