import Navbar from "@/components/navbar";
import Image from "next/image";
import { useState } from "react";
import Footer from "@/components/footer";
import Link from "next/link";
import type { GetServerSideProps } from "next";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

type JobType = "Research" | "PostDoc" | "Grad" | "Undergrad";

type Opportunity = {
  id: number | string;
  title: string;
  description: string;
  descriptionpdf: string;
  applyLink: string;
  jobType: JobType;
  createdAt: string;
};

type GetInvolvedPageProps = {
  opportunities: Opportunity[];
  fetchError: boolean;
};

const jobTypeLabels: Record<JobType, string> = {
  PostDoc: "Post-Doctoral Fellow Opportunities",
  Grad: "Graduate Student Opportunities",
  Undergrad: "Undergraduate Student Opportunities",
  Research: "Research Staff Opportunities",
};

const jobTypeOrder: JobType[] = ["PostDoc", "Grad", "Undergrad", "Research"];

export const getServerSideProps: GetServerSideProps<
  GetInvolvedPageProps
> = async () => {
  try {
    const baseUrl =
      process.env.API_BASE_URL ||
      process.env.NEXT_PUBLIC_API_URL ||
      "https://lab-website-backend.vercel.app";

    const cleanBaseUrl = baseUrl.replace(/\/$/, "");

    const response = await fetch(`${cleanBaseUrl}/oppurtunity`);

    if (!response.ok) {
      console.error("Failed to fetch opportunities:", response.status);

      return {
        props: {
          opportunities: [],
          fetchError: true,
        },
      };
    }

    const opportunities = await response.json();

    return {
      props: {
        opportunities,
        fetchError: false,
      },
    };
  } catch (error) {
    console.error("Error fetching opportunities:", error);

    return {
      props: {
        opportunities: [],
        fetchError: true,
      },
    };
  }
};

export default function GetInvolvedPage({
  opportunities,
  fetchError,
}: GetInvolvedPageProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const groupedOpportunities = jobTypeOrder
    .map((jobType) => ({
      jobType,
      title: jobTypeLabels[jobType],
      items: opportunities.filter((opp) => opp.jobType === jobType),
    }))
    .filter((group) => group.items.length > 0);

  const hasOpenPositions = opportunities.length > 0;

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const heroMessage = fetchError
    ? "Unable to load opportunities right now. Please check back later."
    : hasOpenPositions
      ? "Explore current opportunities to work, train, and collaborate with our team."
      : "We do not have any open positions at this time. Please check back later for future opportunities.";

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative w-full h-[100vh] flex flex-col items-center justify-center text-center bg-white overflow-hidden">
        <Image
          src="/images/hero-involved.png"
          alt="Get Involved Background"
          fill
          priority
          className="object-cover brightness-100"
        />

        <div className="relative z-10 px-6">
          <h1
            className="text-3xl md:text-5xl font-bold text-[#001F54]"
            style={{ fontFamily: "'Martel Sans', sans-serif" }}
          >
            Opportunities
          </h1>

          <p className="text-lg md:text-xl text-[#1282A2] mt-4 max-w-2xl mx-auto">
            {heroMessage}
          </p>
        </div>

        {/* Scroll Down Icon or Back Button */}
        <div className="absolute bottom-6">
          {hasOpenPositions ? (
            <div className="flex flex-col items-center">
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center">
                <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce duration-700"></div>
              </div>
              <span className="mt-2 text-gray-500 text-sm">Scroll Down</span>
            </div>
          ) : (
            <Link
              href="/"
              className="px-6 py-3 bg-[#1282A2] text-white opacity-90 rounded-full hover:bg-[#0f6a88] transition-all"
            >
              ← Back to Home
            </Link>
          )}
        </div>
      </section>

      {/* OPPORTUNITIES SECTION */}
      {hasOpenPositions && (
        <section className="py-20 px-6 md:px-32 bg-[#FEFCFB]">
          <div className="max-w-6xl mx-auto space-y-6">
            {groupedOpportunities.map((group, index) => (
              <div
                key={group.jobType}
                className="border border-[#d0e8e2] rounded-xl shadow-sm"
                style={{ backgroundColor: "rgba(213, 223, 236, 0.70)" }}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center px-6 py-4 text-[#001F54] font-semibold text-lg hover:shadow-lg rounded-t-xl"
                >
                  {group.title}

                  {openIndex === index ? (
                    <FaChevronUp className="text-[#1282A2]" />
                  ) : (
                    <FaChevronDown className="text-[#1282A2]" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6 text-[#1282A2] leading-relaxed space-y-6">
                    {group.items.map((opp) => (
                      <div
                        key={opp.id}
                        className="bg-white/70 rounded-lg p-5 shadow-sm"
                      >
                        <h3 className="text-[#001F54] text-xl font-semibold mb-2">
                          {opp.title}
                        </h3>

                        <p className="text-[#1282A2] leading-relaxed mb-4">
                          {opp.description}
                        </p>

                        <div className="flex flex-wrap gap-3">
                          {opp.descriptionpdf && (
                            <a
                              href={opp.descriptionpdf}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-5 py-2 rounded-full border border-[#1282A2] text-[#1282A2] hover:bg-[#1282A2] hover:text-white transition-all"
                            >
                              View Details
                            </a>
                          )}

                          {opp.applyLink && (
                            <a
                              href={opp.applyLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-5 py-2 rounded-full bg-[#1282A2] text-white hover:bg-[#0f6a88] transition-all"
                            >
                              Apply Now
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Back Button */}
          <div className="mt-12 text-center">
            <Link
              href="/"
              className="px-6 py-3 bg-[#1282A2] text-white opacity-80 rounded-full hover:bg-[#0f6a88] transition-all"
            >
              ← Back to Home
            </Link>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
