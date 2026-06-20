"use client";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface LaySummaryItem {
  id: string;
  description: string;
  date: string;
  contentImage: string;
}

interface LaySummaryProps {
  laySummary: LaySummaryItem[];
}

const LaySummaryGrid: FC<LaySummaryProps> = ({ laySummary }) => {
  return (
    <section id="summary" className="py-5 px-6 md:px-30 bg-[#FEFCFB]">
      <div>
        <h3 className="text-xl md:text-xl font-bold text-left mb-4 text-[#116881]">
          Understand Our Research
        </h3>
        <Link href="/summary" className="group inline-block">
          <h2
            className="relative text-3xl md:text-3xl font-bold text-left mb-12 text-[#001F54]"
            style={{ fontFamily: "'Martel Sans', sans-serif" }}
          >
            Summary For All →
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#001F54] transition-all duration-700 group-hover:w-full" />
          </h2>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 items-stretch">
        {laySummary.map((item) => (
          <Link href={`/summary/${item.id}`} key={item.id} className="block h-full">
            <div
              className="h-full flex flex-col justify-between rounded-2xl p-4 transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
              style={{ backgroundColor: "rgba(213, 223, 236, 0.70)" }}
            >
              {/* Top content */}
              <div>
                {item.contentImage && (
                  <div className="mb-4 rounded-xl overflow-hidden aspect-[16/9] relative">
                    <Image
                      src={item.contentImage}
                      alt={item.description}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="rounded-xl"
                    />
                  </div>
                )}

                <p className="text-sm text-[#001F54] mb-4 ml-4 mr-4 text-justify">
                  {item.description}
                </p>
              </div>

              {/* Date at the bottom */}
              <p className="text-xs text-[#1282A2] text-left ml-4 mt-auto">
                {new Date(item.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LaySummaryGrid;