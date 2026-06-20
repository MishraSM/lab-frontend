"use client";

import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";

interface HeroSectionProps {
  imageUrl: string;
  heading: string;
  subtext: string;
}

export default function HeroSection({
  imageUrl,
  heading,
  subtext
}: HeroSectionProps) {
  return (
    <section className="relative w-full h-[100vh] flex items-center justify-center text-center">
      {/* Background Image */}
      <Image
        src={imageUrl} // replace with your hero image
        alt="Background"
        fill
        priority
        className="object-cover brightness-100"
      />

      {/* Text Content */}
      <div className="relative z-10 px-6">
        <h1
          className="text-3xl md:text-5xl font-bold mt-10 text-[#001F54]"
          style={{ fontFamily: "'Martel Sans', sans-serif" }}
        >
          {heading}
        </h1>
        <p className="text-lg md:text-xl text-[#116881] mb-0 mt-4">
          {subtext}
        </p>
      </div>

      {/* Scroll Icon */}
      <div className="absolute bottom-6 flex flex-col items-center">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce duration-700"></div>
        </div>
        <span className="mt-2 text-gray-500 text-sm">Scroll Down</span>
      </div>
    </section>
  );
}