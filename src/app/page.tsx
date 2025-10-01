"use client"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Footer from "@/components/Footer"
import PageSection from "@/components/PageSection"
import ContactSection from "@/components/contact"
const Home = () => {

  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-900 text-white flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <PageSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default Home
