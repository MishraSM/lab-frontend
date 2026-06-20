import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Link from "next/link";
import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub, SiGooglescholar, SiOrcid, SiResearchgate, SiX } from "react-icons/si";
import { useRouter } from "next/router";

export default function TeamMemberProfile({ member }: { member: any }) {
  const router = useRouter();
  const { id } = router.query;

  const [showStatus, setShowStatus] = useState(false);

  // During first render, router.query is empty
  if (!id) {
    return null; // or a loading spinner
  }

  if (!member) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-[#FEFCFB]">
          <p className="text-[#1282A2]">Team member not found.</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="min-h-screen flex flex-col items-center justify-center bg-[#FEFCFB] mt-20 px-6 py-10">
        {/* Profile Image */}
        <div className="relative">
          <img
            src={member.image}
            alt={member.name}
            className="w-50 h-50 rounded-full object-cover shadow-md"
          />

          <div
            className="absolute bottom-1 right-6 flex items-center"
            onMouseEnter={() => setShowStatus(true)}
            onMouseLeave={() => setShowStatus(false)}
          >
            <span className="text-2xl cursor-pointer">💬</span>
            {showStatus && member.status && (
              <span className="ml-2 bg-[#1282A2] opacity-90 text-white text-xs px-3 py-1 rounded-full shadow-md whitespace-nowrap">
                {member.status}
              </span>
            )}
          </div>
        </div>

        {/* Name + Role */}
        <h1
          className="text-3xl font-bold text-[#0D2C54] mt-6"
          style={{ fontFamily: "'Martel Sans', sans-serif" }}
        >
          {member.name}
        </h1>

        <h2 className="text-xl text-[#1282A2] font-medium mt-1">
          {member.job_title}
        </h2>

        {/* LinkedIn */}
        <div className="mt-4 flex gap-4 items-center">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#0D2C54] hover:text-[#1282A2] transition-colors"
            >
              <FaLinkedin size={22} />
            </a>
          )}

          {member.googleScholar && (
            <a
              href={member.googleScholar}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Scholar"
              className="text-[#0D2C54] hover:text-[#1282A2] transition-colors"
            >
              <SiGooglescholar size={22} />
            </a>
          )}

          {member.orcid && (
            <a
              href={member.orcid}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ORCID"
              className="text-[#0D2C54] hover:text-[#1282A2] transition-colors"
            >
              <SiOrcid size={22} />
            </a>
          )}

          {member.researchGate && (
            <a
              href={member.researchGate}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ResearchGate"
              className="text-[#0D2C54] hover:text-[#1282A2] transition-colors"
            >
              <SiResearchgate size={22} />
            </a>
          )}

          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[#0D2C54] hover:text-[#1282A2] transition-colors"
            >
              <SiGithub size={22} />
            </a>
          )}

          {member.X && (
            <a
              href={member.X}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="text-[#0D2C54] hover:text-[#1282A2] transition-colors"
            >
              <SiX size={22} />
            </a>
          )}
        </div>

        {member.bio && (
          <div className="mt-8 max-w-5xl text-[#1282A2] leading-relaxed text-justify text-md space-y-4">
            {renderBio(member.bio)}
          </div>
        )}

        {/* Back Button */}
        <div className="mt-12">
          <Link
            href="/team"
            className="px-6 py-3 bg-[#1282A2] text-white opacity-80 rounded-full hover:bg-[#0f6a88] transition-all"
          >
            ← Back to Team
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

function renderBio(content: string) {
  const blocks = content.trim().split(/\n\s*\n/);

  return blocks.map((block, i) => {
    // Bullet list
    if (block.trim().startsWith("- ")) {
      const items = block
        .split("\n")
        .map((line) => line.replace(/^\s*-\s+/, "").trim());

      return (
        <ul key={i} className="list-disc list-inside pl-6 space-y-2">
          {items.map((item, j) => (
            <li key={j}>{renderInline(item)}</li>
          ))}
        </ul>
      );
    }

    // Normal paragraph
    return (
      <p key={i}>
        {renderInline(block.trim())}
      </p>
    );
  });
}

function renderInline(text: string) {
  const parts: React.ReactNode[] = [];
  let remaining = text;

  const linkRegex = /\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/;
  const italicRegex = /\*([^*]+)\*/;

  while (remaining.length > 0) {
    const linkMatch = remaining.match(linkRegex);
    const italicMatch = remaining.match(italicRegex);

    if (
      linkMatch &&
      (!italicMatch || linkMatch.index! < italicMatch.index!)
    ) {
      // Text before link
      if (linkMatch.index! > 0) {
        parts.push(remaining.slice(0, linkMatch.index));
      }

      parts.push(
        <a
          key={parts.length}
          href={linkMatch[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-[#0f6a88]"
        >
          {linkMatch[1]}
        </a>
      );

      remaining = remaining.slice(
        linkMatch.index! + linkMatch[0].length
      );
    } else if (italicMatch) {
      if (italicMatch.index! > 0) {
        parts.push(remaining.slice(0, italicMatch.index));
      }

      parts.push(
        <em key={parts.length}>{italicMatch[1]}</em>
      );

      remaining = remaining.slice(
        italicMatch.index! + italicMatch[0].length
      );
    } else {
      parts.push(remaining);
      break;
    }
  }

  return <>{parts}</>;
}

export async function getServerSideProps(context: { params: { id: any; }; }) {
  const { id } = context.params;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/team/${id}`
    );

    if (!res.ok) {
      return { props: { member: null } };
    }

    const member = await res.json();

    return {
      props: { member },
    };
  } catch (error) {
    console.error(error);

    return {
      props: { member: null },
    };
  }
}
