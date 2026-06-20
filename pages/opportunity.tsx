"use client";

import Navbar from "@/components/navbar";
import Image from "next/image";
import { useState } from "react";
import Footer from "@/components/footer";
import Link from "next/link";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function GetInvolvedPage() {
  const hasOpenPositions = false;
  const [openIndex, setOpenIndex] = useState<number | null>(0); // open first by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const opportunities = [
    {
      title: "Post-Doctoral Fellow Opportunities",
      content: (
        <p className="text-[#1282A2] leading-relaxed">
          We’re not currently hiring, but always open to future collaborations.
          Feel free to reach out or check back later.
        </p>
      ),
    },
    {
      title: "Graduate Student Opportunities",
      content: (
        <p className="text-[#1282A2] leading-relaxed">
          We’re not currently hiring, but always open to future collaborations.
          Feel free to reach out or check back later.
        </p>
      ),
    },
    {
      title: "Undergraduate Student Opportunities",
      content: (
        <p className="text-[#1282A2] leading-relaxed">
          We’re not currently hiring. Please check back later.
        </p>
      ),
    },
    {
      title: "Research Staff Opportunities",
      content: (
        <p className="text-[#1282A2] leading-relaxed">
          We’re not currently hiring. Please check back later.
        </p>
      ),
    },
  ];

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative w-full h-[100vh] flex flex-col items-center justify-center text-center bg-white overflow-hidden">
        <Image
          src="/images/hero-involved.png"
          alt="Get Involved Background"
          fill
          priority
          className="object-cover brightness-100"
        />
        <div className="relative z-10 px-6">
          <h1
            className="text-3xl md:text-5xl font-bold text-[#001F54]"
            style={{ fontFamily: "'Martel Sans', sans-serif" }}
          >
            Opportunities
          </h1>
          <p className="text-lg md:text-xl text-[#1282A2] mt-4 max-w-2xl mx-auto">
            We do not have any open positions at this time. Please check back later for future opportunities.
          </p>
        </div>

        {/* Scroll Down Icon */}
        <div className="absolute bottom-6">
          {hasOpenPositions ? (
            /* Scroll Down Icon */
            <div className="flex flex-col items-center">
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center">
                <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce duration-700"></div>
              </div>
              <span className="mt-2 text-gray-500 text-sm">Scroll Down</span>
            </div>
          ) : (
            /* Back Button */
            <Link
              href="/"
              className="px-6 py-3 bg-[#1282A2] text-white opacity-90 rounded-full hover:bg-[#0f6a88] transition-all"
            >
              ← Back to Home
            </Link>
          )}
        </div>
      </section>

      {/* OPPORTUNITIES SECTION */}
      {hasOpenPositions && (<section className="py-20 px-6 md:px-32 bg-[#FEFCFB]">
        <div className="max-w-6xl mx-auto space-y-6">
          {opportunities.map((opp, index) => (
            <div
              key={index}
              className="border border-[#d0e8e2] rounded-xl shadow-sm"
              style={{ backgroundColor: "rgba(213, 223, 236, 0.70)" }}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-[#001F54] font-semibold text-lg hover:shadow-lg rounded-t-xl"
              >
                {opp.title}
                {openIndex === index ? (
                  <FaChevronUp className="text-[#1282A2]" />
                ) : (
                  <FaChevronDown className="text-[#1282A2]" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-[#1282A2] leading-relaxed">
                  {opp.content}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="px-6 py-3 bg-[#1282A2] text-white opacity-80 rounded-full hover:bg-[#0f6a88] transition-all"
          >
            ← Back to Home
          </Link>
        </div>
      </section>)}

      <Footer />
    </>
  );
}
