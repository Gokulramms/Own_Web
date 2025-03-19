"use client";
import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";

const sections = ["home", "work", "about", "contact"];

const NavBar = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed bottom-10 left-0 right-0 z-50 mx-auto flex w-[330px] items-center justify-center gap-2 rounded-lg bg-[#07070a]/90 px-2 py-2 text-[#e4ded7] backdrop-blur-md sm:w-[400px] md:p-2 lg:w-[420px]">
      {sections.map((id) => (
        <Link key={id} href={`#${id}`} onClick={(e) => handleScroll(e, id)} aria-label={`Scroll to ${id} Section`}>
          <h4
            className={`rounded py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:py-1 md:px-4 transition-all duration-300 ${
              activeSection === id ? "text-red-400 font-bold" : "hover:text-gray-300"
            }`}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </h4>
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
