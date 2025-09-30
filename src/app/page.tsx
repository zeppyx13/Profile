"use client"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Footer from "@/components/Footer"
import PageSection from "@/components/PageSection"
import ContactSection from "@/components/contact"
const Home = () => {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <PageSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default Home
