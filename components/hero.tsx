"use client";

import { a } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center px-6 md:flex-row bg-[#FEFCFB] font-jura pt-40 md:pt-28 relative">
      {/* Left Section */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2 space-y-6">
        {/* Logo + Heading Row */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 md:ml-20 -mt-10">
          {/* Logo image */}
          <div className="w-65 h-65 relative">
            <Image
              src="/images/mishra-lab-hero-logo.png"
              alt="Blob Logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>

          {/* Text beside logo */}
          <div className="text-[#001F54] mt-4 md:mt-5">
            <h1
              className="text-3xl md:text-4xl font-bold mb-1"
              style={{ fontFamily: "'Martel Sans', sans-serif" }}
            >
              Research Group
            </h1>

            <p className="text-xl md:text-2xl leading-tight font-semibold">
              in Mathematical Modeling <br />
              and Program Science
            </p>

            {/* Affiliations */}
            <div className="flex items-center justify-center md:justify-start gap-3 mt-4 opacity-90">
              <Image
                src="/images/logo_collab/UofT.png"
                alt="University of Toronto"
                width={90}
                height={42}
                className="object-contain"
              />
              <Image
                src="/images/logo_collab/MAP.png"
                alt="MAP Centre for Urban Health Solutions"
                width={80}
                height={42}
                className="object-contain"
              />
              <Image
                src="/images/logo_collab/unityhealth.png"
                alt="Unity Health Toronto"
                width={90}
                height={42}
                className="object-contain"
              />
              <Image
                src="/images/logo_collab/ices.png"
                alt="ICES"
                width={37}
                height={42}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-10 md:mt-20 md:ml-40 w-full max-w-md">
          <Link href="/research">
            <button className="w-full bg-[#D5DFEC] text-[#001F54] font-semibold py-2 rounded-full shadow-sm hover:shadow-md hover:bg-[#d3e5f3] transition">
              Explore Our Research
            </button>
          </Link>
          <Link href="/summary">
            <button className="w-full bg-[#D5DFEC] text-[#001F54] font-semibold py-2 rounded-full shadow-sm hover:shadow-md hover:bg-[#d3e5f3] transition">
              View Lay Summaries
            </button>
          </Link>

          {/* w-full bg-[#D5DFEC] text-[#001F54] font-semibold py-2 rounded-full shadow-sm hover:shadow-md hover:bg-[#d3e5f3] transition */}
          <Link href="/team">
            <button className="w-full bg-[#D5DFEC] text-[#001F54] font-semibold py-2 rounded-full shadow-sm hover:shadow-md hover:bg-[#d3e5f3] transition">
              Meet The Team
            </button>
          </Link>
          <Link href="/opportunity">
            <button className="w-full bg-[#D5DFEC] text-[#001F54] font-semibold py-2 rounded-full shadow-sm hover:shadow-md hover:bg-[#d3e5f3] transition">
              Join Our Team
            </button>
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div className="mt-12 md:mt-24 md:w-1/2 flex justify-center">
        <Image
          src="/hero-illustration.png"
          alt="Lab Illustration"
          width={1000}
          height={500}
          className="max-w-full h-auto"
        />
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
