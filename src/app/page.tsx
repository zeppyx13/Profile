"use client"
import Image from "next/image"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Footer from "@/components/Footer"
import React, {useEffect, useState} from "react"
const Home = () => {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </>
  )
}

export default Home
