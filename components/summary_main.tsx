"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SummaryPage({ summaries }: { summaries: any[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 9; // 👈 Number of items per page

  // Extract all unique tags
  const allTags = Array.from(
    new Set(summaries.flatMap((item) => item.tags.map((t: { tag: any; }) => t.tag)))
  );

  // Filtering + Sorting
  const filteredSummaries = useMemo(() => {
    let filtered = summaries;

    if (searchTerm) {
      const lower = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(lower) ||
          item.description.toLowerCase().includes(lower)
      );
    }

    if (selectedTag) {
      filtered = filtered.filter((item) =>
        item.tags.some((t: { tag: string; }) => t.tag === selectedTag)
      );
    }

    filtered = filtered.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();

      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

    return filtered;
  }, [searchTerm, selectedTag, sortOrder]);

  // Pagination logic
  const totalPages = Math.ceil(filteredSummaries.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedSummaries = filteredSummaries.slice(
    startIndex,
    startIndex + pageSize
  );

  return (
    <section className="py-20 px-6 md:px-30 bg-[#FEFCFB]">
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <input
          type="text"
          placeholder="Search summaries..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // reset to page 1
          }}
          className="px-4 py-2 rounded-xl bg-[#d5dfecb3] shadow-sm text-[#001F54] w-full md:w-1/3 focus:outline-none focus:ring-1 focus:ring-[#1282A2]"
        />

        <select
          value={selectedTag}
          onChange={(e) => {
            setSelectedTag(e.target.value);
            setCurrentPage(1);
          }}
          className="px-4 py-2 rounded-xl bg-[#d5dfecb3] shadow-sm text-[#001F54] focus:outline-none focus:ring-1 focus:ring-[#1282A2]"
        >
          <option value="">All Tags</option>
          {allTags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as "newest" | "oldest")}
          className="px-4 py-2 rounded-xl bg-[#d5dfecb3] shadow-sm text-[#001F54] focus:outline-none focus:ring-1 focus:ring-[#1282A2]"
        >
          <option value="newest">Most Recent</option>
          <option value="oldest">Least Recent</option>
        </select>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
        {paginatedSummaries.map((item) => (
          <Link href={`/summary/${item.id}`} key={item.id} className="block h-full">
            <div
              className="h-full flex flex-col justify-between rounded-2xl p-4 transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
              style={{ backgroundColor: "rgba(213, 223, 236, 0.70)" }}
            >
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
              <div className="flex flex-col mt-auto">
                <p className="text-xs text-[#1282A2] text-left ml-4">
                  {new Date(item.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
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
