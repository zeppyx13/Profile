"use client"
import Image from "next/image"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Footer from "@/components/Footer"
import PageSection from "@/components/PageSection"
const Home = () => {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <PageSection />
      <Footer />
    </>
  )
}

export default Home
