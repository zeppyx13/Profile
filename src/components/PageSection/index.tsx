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
          buttonText="Explore Projects"
          buttonLink="/Portfolio"
          imageSrc="/images/portfolio.png"
        />
      </SectionWrapper>
      {/* Blog Section */}
      <SectionWrapper id="blog">
        <SectionItem
          title="Blog"
          description="Explore my blog where I share insights, tutorials, and experiences on web development, IoT, and machine learning. Stay updated with the latest trends, tips, and projects in these exciting fields as I document my journey and knowledge."
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
