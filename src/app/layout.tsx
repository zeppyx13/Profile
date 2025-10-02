import type { Metadata } from "next";
import React from "react";
import "@/css/globals.css";
import { Rubik, PT_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "Gung Nanda | Web Developer, IoT & Machine Learning Enthusiast",
  description:
    "Personal website of Gung Nanda – a Full-Stack Developer from Bali specializing in Web Development, IoT, Robotics, and Machine Learning. Explore portfolio, blog, and contact information.",
  keywords: [
    "Gung Nanda",
    "Web Developer Bali",
    "Full-Stack Developer",
    "IoT Developer Bali",
    "Machine Learning Bali",
    "Robotics Developer Bali",
    "Portfolio",
    "Tech Blog",
    "Software Engineer",
  ],
  authors: [{ name: "Gung Nanda", url: "https://gungnanda.com" }],
  creator: "Gung Nanda",
  publisher: "Gung Nanda",
  metadataBase: new URL("https://gungnanda.com"),
  themeColor: "#ffffff",

  openGraph: {
    title: "Gung Nanda | Web Developer, IoT & Machine Learning Enthusiast",
    description:
      "Explore Gung Nanda’s personal portfolio, blog, and projects in Web Development, IoT, Robotics, and Machine Learning. Based in Bali, available for collaboration.",
    url: "https://gungnanda.com",
    siteName: "Gung Nanda",
    type: "website",
    images: [
      {
        url: "/images/Logo.png",
        width: 1200,
        height: 630,
        alt: "Gung Nanda Personal Website",
      },
    ],
    locale: "en_US",
  },

  icons: {
    icon: "/images/Ico.ico",
    shortcut: "/images/Ico.ico",
    apple: "/images/Ico.png",
  },
};

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-rubik",
  display: "swap",
});

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ptsans",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rubik.variable} ${ptSans.variable}`}>
      <body
        suppressHydrationWarning
        className="bg-[var(--background)] text-[var(--foreground)] font-sans"
      >
        {children}
      </body>
    </html>
  );
}
