import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Gokulramm S",
description: "Hi, I'm Gokulramm S, an aspiring Software Engineer passionate about building high-performance, AI-driven applications with sleek, professional UI.",
generator: "Next.js",
applicationName: "Gokulramm S",
keywords: [
    "freelance",
    "developer",
    "freelance developer",
    "full-stack",
    "backend",
    "backend developer",
    "node.js",
    "express.js",
    "database",
    "mongodb",
    "sql",
    "iot",
    "embedded systems",
    "esp32",
    "esp8266",
    "microcontrollers",
    "ai",
    "ml",
    "software",
    "software developer",
    "cloud",
    "api development",
    "scalable systems",
    "technical portfolio",
],
colorScheme: "light",
openGraph: {
    title: "Gokulramm S — Software Engineer",
    description: "Aspiring Software Engineer specializing in AI-driven applications, full-stack development, IoT, and embedded systems.",
    url: "https://www.gokulramms.com/",
    siteName: "Gokulramm S Portfolio",
    images: [
      {
        url: "https://imgur.com/a/e9ShgTf",
        width: 1200,
        height: 630,
        alt: "Gokulramm S — Software Engineer",
      },
    ],
    locale: "en-IN",
    type: "website",
},
twitter: {
    card: "summary_large_image",
    title: "Gokulramm S — Software Engineer",
    description: "Aspiring Software Engineer specializing in AI-driven applications, full-stack development, IoT, and embedded systems.",
    creator: "gokulramms",
    creatorId: "its__sgr",
    images: [
      "https://drive.google.com/file/d/19vu_Q3jAykpfJ-FiUN57D-pSA4GmfFl5/view?usp=sharing",
    ],
},

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
