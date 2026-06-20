"use client";

import { JSX, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaAward, FaCamera } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { BiLandscape } from "react-icons/bi";

type Category = "Recognition" | "ResearchActivity" | "Media" | "Grant";

// interface NewsItem {
//   id: string;
//   title: string;
//   description: string;
//   image: string;
//   category: Category;
// }

const categoryIcons: Record<Category, JSX.Element> = {
  Recognition: <FaAward className="text-white text-lg" />,
  ResearchActivity: <IoPeople className="text-white text-lg" />,
  Media: <FaCamera className="text-white text-lg" />,
  Grant: <BiLandscape className="text-white text-xl" />,
};

const ITEMS_PER_PAGE = 9;

export default function NewsPage({ news }: { news: any[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  // Filter news
  const filteredNews = selectedCategory
    ? news.filter((n) => n.category === selectedCategory)
    : news;


  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);

  const paginatedNews = filteredNews.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Reset to page 1 when category changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <section className="py-20 px-6 md:px-30 bg-[#FEFCFB]">
      {/* Filter Dropdown */}
      <div className="flex justify-left mb-10">
        <select
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
          className="px-4 py-2 rounded-xl bg-[#d5dfecb3] shadow-sm text-[#001F54] focus:outline-none focus:ring-1 focus:ring-[#1282A2]"
        >
          <option value="">All Categories</option>
          <option value="Recognition">Recognition</option>
          <option value="ResearchActivity">Research Team Activity</option>
          <option value="Media">Media</option>
          <option value="Grant">Grant</option>
        </select>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
        {paginatedNews.map((item) => (
          <Link
            href={`/news/${item.id}`}
            key={item.id}
            className="block h-full"
          >
            <div
              className="h-full rounded-2xl p-4 transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
              style={{ backgroundColor: "#d5dfecb3" }}
            >
              {item.image && (
                <div className="mb-4 rounded-xl overflow-hidden aspect-[16/9] relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-xl"
                  />
                  <div className="absolute top-2 right-2 bg-[#034078] bg-opacity-60 p-2 rounded-full z-10">
                    {categoryIcons[item.category as Category]}
                  </div>
                </div>
              )}

              <h3 className="text-lg font-semibold text-[#001F54] text-center mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[#1282A2] mb-4 ml-4 mr-4 text-justify">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-12 flex-wrap">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-2xl bg-[#1282A2] text-white disabled:bg-gray-400"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-2 rounded-2xl ${
                currentPage === i + 1
                  ? "bg-[#1282A2] text-white font-bold"
                  : "bg-gray-200 text-[#001F54] hover:bg-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-2xl bg-[#1282A2] text-white disabled:bg-gray-400"
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}
