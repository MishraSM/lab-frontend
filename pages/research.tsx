"use client";

import Navbar from "@/components/navbar";
import Image from "next/image";
import { useState } from "react";
import Footer from "@/components/footer";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function ResearchPage({ researchAreas = [] }: { researchAreas: any[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const researchData = researchAreas.length > 0 ? researchAreas : [];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[100vh] flex flex-col items-center justify-center text-center bg-white overflow-hidden">
        {/* Background Molecules */}
        <Image
          src="/images/hero-research.png"
          alt="Molecule Left"
          fill
          priority
            className="object-cover brightness-100"
        />

        {/* Hero Text */}
        <div className="relative z-10 px-6">
          <h1
            className="text-3xl md:text-5xl font-bold text-[#001F54]"
            style={{ fontFamily: "'Martel Sans', sans-serif" }}
          >
            Research Focus Areas
          </h1>
          <p className="text-lg md:text-xl text-[#1282A2] mt-4 max-w-2xl mx-auto">
            Research rooted in community, collaboration, and impact
          </p>
        </div>

        {/* Scroll Down Icon */}
        <div className="absolute bottom-6 flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center">
            <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce duration-700"></div>
          </div>
          <span className="mt-2 text-gray-500 text-sm">Scroll Down</span>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="py-20 px-6 md:px-40 bg-[#FEFCFB] text-left">
        <div className="max-w-5xl mx-auto space-y-6">
          {researchData.map((section, index) => (
            <div
              key={index}
              className="border border-[#d0e8e2] rounded-xl shadow-sm"
              style={{ backgroundColor: "rgba(213, 223, 236, 0.70)" }}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-[#001F54] font-semibold text-lg hover:shadow-lg rounded-t-xl"
              >
                {section.title}
                {openIndex === index ? (
                  <FaChevronUp className="text-[#1282A2]" />
                ) : (
                  <FaChevronDown className="text-[#1282A2]" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-[#1282A2] leading-relaxed whitespace-pre-line">
                  <div
                   dangerouslySetInnerHTML={{
                        __html: section.content
                        // Handle markdown links first
                        .replace(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g,
                            '<a href="$2" target="_blank" class="text-[#0f6a88] underline hover:text-[#001F54]">$1</a>')
                        // Then bold and italic
                        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                        .replace(/\*(.*?)\*/g, "<em>$1</em>")
                        // Bullets
                        .replace(/- /g, "• ")
                        // Finally line breaks
                        .replace(/\n/g, "<br/>"),
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <a
            href="/"
            className="px-6 py-3 bg-[#1282A2] text-white opacity-80 rounded-full hover:bg-[#0f6a88] transition-all"
          >
            ← Back to Home
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}


export async function getServerSideProps() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/research-areas`);

    const researchAreas = res.ok ? await res.json() : [];

    return {
      props: {
        researchAreas,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      props: {
        researchAreas: [],
      },
    };
  }
}