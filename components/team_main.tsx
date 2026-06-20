"use client";

import { useState, FC } from "react";
import Image from "next/image";
import Link from "next/link";

type Role = "ResearchTeam" | "GradPostDoc" | "Trainee" | "Alumni";

interface TeamItem {
  id: string;
  name: string;
  job_title: string;
  image: string;
  role: Role;
}

interface TeamProps {
  team: TeamItem[];
}

const ITEMS_PER_PAGE = 15;

const TeamGrid: FC<TeamProps> = ({ team }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedGroup, setSelectedGroup] = useState<"Team" | "Alumni">("Team");

// Filter team
const filteredTeam =
  selectedGroup === "Alumni"
    ? team.filter((p) => p.role === "Alumni")
    : team.filter((p) => p.role !== "Alumni");

  const totalPages = Math.ceil(filteredTeam.length / ITEMS_PER_PAGE);

  const paginatedTeam = filteredTeam.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <section id="team" className="py-25 px-6 md:px-30 bg-[#FEFCFB]">
      {/* Filter Dropdown */}
      <div className="flex justify-left mb-10">
        <select
          value={selectedGroup}
          onChange={(e) => {
            setSelectedGroup(e.target.value as "Team" | "Alumni");
            setCurrentPage(1);
          }}
          className="px-4 py-2 rounded-xl bg-[#d5dfecb3] shadow-sm text-[#001F54] focus:outline-none focus:ring-1 focus:ring-[#1282A2]"
        >
          <option value="Team">Team</option>
          <option value="Alumni">Alumni</option>
        </select>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 items-stretch">
        {paginatedTeam.map((person) => (
          <Link
            href={`/team/${person.id}`}
            key={person.id}
            className="block h-full"
          >
            <div
              className="h-full flex flex-col justify-between rounded-2xl p-4 transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
              style={{ backgroundColor: "rgba(213, 223, 236, 0.70)" }}
            >
              {/* Image */}
              {person.image && (
                <div className="mb-4 mt-2 rounded-full overflow-hidden w-40 h-40 relative mx-auto item-center">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              )}

              {/* Name & Title */}
              <p className="text-lg text-[#001F54] mb-4 ml-4 mr-4 text-center font-semibold">
                {person.name}
              </p>
              <p className="text-md text-[#1282A2] text-center mb-4 -mt-2">
                {person.job_title}
              </p>
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
};

export default TeamGrid;
