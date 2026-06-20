"use client";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface TeamItem {
  id: string;
  name: string;
  job_title: string;
  image: string;
}

interface TeamProps {
  team: TeamItem[];
}

const TeamGrid: FC<TeamProps> = ({ team }) => {
  return (
    <section id="team" className="py-25 px-6 md:px-30 bg-[#FEFCFB]">
      <div>
        <h3 className="text-xl md:text-xl font-bold text-left mb-4 text-[#116881]">
          People behind the Science
        </h3>
        <Link href="/team" className="group inline-block">
          <h2
            className="relative text-3xl md:text-3xl font-bold text-left mb-12 text-[#001F54]"
            style={{ fontFamily: "'Martel Sans', sans-serif" }}
          >
            Meet Our Team →
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#001F54] transition-all duration-700 group-hover:w-full" />
          </h2>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 items-stretch">
        {team.map((person) => (
          <Link href={`/team/${person.id}`} key={person.id} className="block h-full">
            <div
              className="h-full flex flex-col justify-between rounded-2xl p-4 transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
              style={{ backgroundColor: "rgba(213, 223, 236, 0.70)" }}
            >
              {/* Top content */}
              <div>
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

                <p className="text-lg text-[#001F54] mb-4 ml-4 mr-4 text-center font-semibold">
                  {person.name}
                </p>
                <p className="text-md text-[#1282A2] text-center mb-4 -mt-2">
                {person.job_title}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TeamGrid;