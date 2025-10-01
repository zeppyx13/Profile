import type { Metadata } from "next";
import React from "react";
import "@/css/globals.css";
import { Rubik, PT_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "Gung Nanda",
  description:
    "Personal Website of Gung Nanda including blog, portfolio, and contact information.",
};

// Rubik font
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
    <html
      lang="en"
      className={`${rubik.variable} ${ptSans.variable}`}
    >
      <body
        suppressHydrationWarning={true}
        className="bg-[var(--background)] text-[var(--foreground)] font-ptsans"
      >
        {children}
      </body>
    </html>
  );
}
