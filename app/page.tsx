"use client";
import Hero from "./hero-section/Hero";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { ScrollerMotion } from "scroller-motion";
import PreLoader from "./animations/PreLoader/PreLoader";
import { initialBlobityOptions } from "./utils/BlobityConfig";
import NavBar from "./navbar/NavBar";

const Work = dynamic(() => import("./work-section/Work"));
const About = dynamic(() => import("./about-section/About"));
const Blog = dynamic(() => import("./blog-section/BlogGrid"));
const Contact = dynamic(() => import("./contact-section/Contact"));
const Footer = dynamic(() => import("./footer/Footer"));

export default function Home() {
  const blobityInstance = useRef<any>(null); // Prevents re-renders

  useEffect(() => {
    // Dynamically import blobity on the client-side
    import("blobity").then((Blobity) => {
      blobityInstance.current = new Blobity.default(initialBlobityOptions);
      window.blobity = blobityInstance.current; // For debugging
    }).catch((err) => console.error("Failed to load Blobity:", err));
  }, []); // Runs only once on mount

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <>
      <PreLoader />
      <NavBar />
      <main className="flex flex-col items-center justify-center">
        <Hero />
        <Work />
        <About />
        <Blog />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
