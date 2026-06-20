"use client";

import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";
import collaborators from "@/lib/collaborators";


export default function CollaboratorsTicker() {
  return (
    <>
    <div className="py-5 px-6 md:px-30 bg-[#FEFCFB]">
        <h3 className="text-xl md:text-xl font-bold text-left mb-4 text-[#116881]">
            Global Partners to Advance Research
        </h3>
        <h2
            className="relative text-3xl md:text-3xl font-bold text-left mb-12 text-[#001F54] pb-13"
            style={{ fontFamily: "'Martel Sans', sans-serif" }}
        >
            Our Collaborators
            {/* Underline animation */}
        </h2>
    </div>
    <div className="w-full bg-[rgba(213,223,236,0.70)] py-4 overflow-hidden -mt-18 mb-15">
        <Marquee pauseOnHover gradient={false} speed={40}>
            {collaborators.map((collab, index) => (
                <a
                    key={index}
                    href={collab.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mx-6"
                >
                    <img
                        src={collab.logo}
                        alt={collab.name}
                        className="h-20 w-auto object-contain px-25"
                        loading="lazy" />
                </a>
            ))}
        </Marquee>
    </div>
    </>
  );
}