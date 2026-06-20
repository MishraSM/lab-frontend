"use client";

import React from "react";
import Marquee from "react-fast-marquee";

type MediaItem = {
  id: number;
  title: string;
  image: string;
  caption: string;
};

export default function MediaTicker({ mediaItems = [] }: { mediaItems: MediaItem[] }) {
  return (
    <>
      <div className="py-5 px-6 md:px-30 bg-[#FEFCFB]">
        <h3 className="text-xl font-bold text-left mb-4 text-[#116881]">
          Behind the Scenes
        </h3>
        <h2
          className="relative text-3xl font-bold text-left text-[#001F54] mb-8"
          style={{ fontFamily: "'Martel Sans', sans-serif" }}
        >
          Gallery
        </h2>
      </div>

      <div className="w-full py-2 overflow-hidden bg-[#FEFCFB] pb-22">
        <Marquee pauseOnHover gradient={false} speed={40}>
          {mediaItems.map((item) => (
            <div
              key={item.id}
              className="relative group h-58 flex-shrink-0 overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute bottom-0 left-0 w-full bg-[#d5dfecdf] text-[#001F54] text-sm px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.caption}
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </>
  );
}