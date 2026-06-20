"use client";

import Navbar from "@/components/navbar";
import Image from "next/image";
import { useState } from "react";
import Footer from "@/components/footer";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";


const filterOptions = [
  "All",
  "Peer Reviewed Publications",
  "Pre Prints",
  "Presentations",
  "Books & Reports",
];

export default function PublicationsPage({ publications }: { publications: any[] }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 12; // 👈 Number of publications per page

  // Filtered data
  const categoryMap: Record<string, string> = {
    "Peer Reviewed Publications": "PeerReviewed",
    "Pre Prints": "Preprint",
    "Presentations": "Presentation",
    "Books & Reports": "Brief",
  };

  const buttonLabelMap: Record<string, string> = {
    PeerReviewed: "View Publication",
    Preprint: "View Preprint",
    Presentation: "View Presentation",
    Brief: "View Report",
  };

  const filteredPublications =
    activeFilter === "All"
      ? publications
      : publications.filter((p: { category: string; }) => p.category === categoryMap[activeFilter]);

  // Pagination logic
  const totalPages = Math.ceil(filteredPublications.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedPublications = filteredPublications.slice(
    startIndex,
    startIndex + pageSize
  );

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll back to top
  };

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative w-full h-[100vh] flex flex-col items-center justify-center text-center bg-white overflow-hidden">
        <Image
          src="/images/hero-publications.png"
          alt="Publications Hero Background"
          fill
          priority
          className="object-cover brightness-100"
        />

        <div className="relative z-10 px-6">
          <h1
            className="text-3xl md:text-5xl font-bold text-[#001F54]"
            style={{ fontFamily: "'Martel Sans', sans-serif" }}
          >
            Our Publications
          </h1>
          <p className="text-lg md:text-xl text-[#1282A2] mt-4">
            Transforming data into knowledge
          </p>
        </div>

        <div className="absolute bottom-6 flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center">
            <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce duration-700"></div>
          </div>
          <span className="mt-2 text-gray-500 text-sm">Scroll Down</span>
        </div>
      </section>

      {/* PUBLICATIONS SECTION */}
      <section className="py-20 px-6 md:px-32 bg-[#FEFCFB]">
        <div className="max-w-7xl mx-auto">

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setCurrentPage(1); // reset to first page
                }}
                className={`px-4 py-2 rounded-full border ${
                  activeFilter === filter
                    ? "bg-[#1282A2] text-white border-[#1282A2]"
                    : "bg-white text-[#1282A2] border-[#1282A2]"
                } transition-all hover:bg-[#0f6a88] hover:text-white`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Filter Collapse (for mobile) */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-[#1282A2] mb-4 md:hidden"
          >
            Filters <FaChevronDown className="text-sm" />
          </button>

          {/* Publications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedPublications.map((pub, index) => (
              <div
                key={index}
                className="bg-[#D5DFEC]/70 rounded-xl shadow-sm border border-[#d0e8e2] p-6 flex flex-col justify-between transition-transform duration-200 hover:scale-[1.02] hover:shadow-md"
              >
                <div>
                  <h3 className="text-lg font-semibold text-[#001F54] mb-2">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-[#1282A2] mb-1">
                    {pub.year}
                  </p>

                  <p className="text-sm text-[#1282A2] mb-4 italic">
                    {pub.journal || pub.preprintserver || pub.presentedAt || pub.category}
                  </p>
                </div>


                {pub.link && (
                  <Link
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-[#1282A2] text-white rounded-full text-sm font-medium hover:bg-[#0f6a88] transition-all text-center"
                  >
                    {buttonLabelMap[pub.category] || "View Resource"}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Pagination (Lay Summary style) */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12 flex-wrap">
              {/* Prev */}
              <button
                onClick={() => goToPage(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-2xl bg-[#1282A2] text-white disabled:bg-gray-400"
              >
                Prev
              </button>

              {getVisiblePages(currentPage, totalPages).map((page, i) =>
                page === "..." ? (
                  <span
                    key={`ellipsis-${i}`}
                    className="px-3 py-2 text-[#001F54]"
                  >
                    …
                  </span>
                ) : (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`px-3 py-2 rounded-2xl ${
                      currentPage === page
                        ? "bg-[#1282A2] text-white font-bold"
                        : "bg-gray-200 text-[#001F54] hover:bg-gray-300"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}

              {/* Next */}
              <button
                onClick={() => goToPage(Math.min(currentPage + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-2xl bg-[#1282A2] text-white disabled:bg-gray-400"
              >
                Next
              </button>
            </div>
          )}

        </div>
      </section>

      <Footer />
    </>
  );
}

function getVisiblePages(
  current: number,
  total: number,
  delta = 1
): (number | "...")[] {
  const pages: (number | "...")[] = [];

  const range: (number | "...")[] = [];
  for (
    let i = Math.max(2, current - delta);
    i <= Math.min(total - 1, current + delta);
    i++
  ) {
    range.push(i);
  }

  if (current - delta > 2) {
    range.unshift("...");
  }
  if (current + delta < total - 1) {
    range.push("...");
  }

  pages.push(1, ...range, total);

  return pages;
}


export async function getServerSideProps() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/publications`);

    if (!res.ok) {
      return { props: { publications: [] } };
    }

    const publications = await res.json();

    return {
      props: { publications },
    };
  } catch (error) {
    console.error(error);
    return {
      props: { publications: [] },
    };
  }
}
