"use client";

import Image from "next/image";
import Link from "next/link";
import { FC, JSX } from "react";
import { AiFillDollarCircle } from "react-icons/ai";
import {
  FaAward,
  FaCamera,
} from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { BiLandscape } from "react-icons/bi";

// Define category types and map to icons
type Category = "Recognition" |  "ResearchActivity" |  "Media" | "Grant";

interface NewsItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: Category;
}

const categoryIcons: Record<Category, JSX.Element> = {
  Recognition: <FaAward className="text-white text-lg" />,
  ResearchActivity: <IoPeople className="text-white text-lg" />,
  Media: <FaCamera className="text-white text-lg" />,
  Grant: <BiLandscape className="text-white text-xl" />,
};

const NewsGrid: FC<{ newsItems: NewsItem[] }> = ({ newsItems }) => {
  return (
    <section id="news" className="py-20 px-6 md:px-30 bg-[#FEFCFB]">
      <div>
        <h3 className="text-xl md:text-xl font-bold text-left mb-4 text-[#116881]">
          Latest Achievements and Announcements
        </h3>
        <Link href="/news" className="group inline-block">
          <h2
            className="relative text-3xl md:text-3xl font-bold text-left mb-12 text-[#001F54]"
            style={{ fontFamily: "'Martel Sans', sans-serif" }}
          >
            News And Highlights →
            {/* Underline animation */}
            <span
              className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#001F54] transition-all duration-600 group-hover:w-full"
            />
          </h2>
        </Link>
        {/* <Link href="/news">
          <h2 className="text-3xl md:text-3xl font-bold text-left mb-12 text-[#001F54] hover:underline" style={{ fontFamily: "'Martel Sans', sans-serif" }}>
          News and Highlights →
          </h2>
        </Link> */}
        
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
        {newsItems.map((item) => (
          <Link href={`/news/${item.id}`} key={item.id} className="block h-full">
            <div
              className="h-full rounded-2xl p-4 transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
              style={{ backgroundColor: "#d5dfecb3" }}
            >
              {/* Image */}
              {item.image && (
                <div className="mb-4 rounded-xl overflow-hidden aspect-[16/9] relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                  />
                  <div className="absolute top-2 right-2 bg-[#034078] bg-opacity-60 p-2 rounded-full z-10">
                    { categoryIcons[item.category]}
                  </div>
                </div>
              )}

              {/* Title */}
              <div className="flex items-center justify-center gap-2 mb-2">
                <h3 className="text-lg font-semibold text-[#001F54] text-center">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-[#1282A2] mb-4 ml-4 mr-4 text-justify">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>

    </section>
  );
};

export default NewsGrid;
