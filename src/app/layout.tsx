import type { Metadata } from "next";
import React from "react";
import "../css/globals.css";
export const metadata: Metadata = {
  title: "Gung Nanda",
  description: "Personal Website of Gung Nanda including blog, portfolio, and contact information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      suppressHydrationWarning={true}
      className="bg-[var(--background)] text-[var(--foreground)]"
      >
        {children}
      </body>
    </html>
  );
}
