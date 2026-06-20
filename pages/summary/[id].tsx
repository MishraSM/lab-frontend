"use client";

import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import { JSX, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from "react";

function renderInlineTextWithLinks(text: string) {
  const linkRegex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
  const parts: (string | JSX.Element)[] = [];

  let lastIndex = 0;

  text.replace(linkRegex, (match, label, url, index) => {
    parts.push(text.slice(lastIndex, index));

    parts.push(
      <a
        key={`${url}-${index}`}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#1282A2] underline underline-offset-2 hover:text-[#0f6a88]"
      >
        {label}
      </a>
    );

    lastIndex = index + match.length;
    return match;
  });

  parts.push(text.slice(lastIndex));
  return parts;
}

function renderAnswerWithParagraphsAndBullets(text: string) {
  const lines = text.split("\n").map(l => l.trim());
  const blocks: JSX.Element[] = [];

  let bulletBuffer: string[] = [];

  const flushBullets = (key: number) => {
    if (bulletBuffer.length === 0) return null;

    const ul = (
      <ul key={`ul-${key}`} className="list-disc pl-6 mt-3 space-y-2">
        {bulletBuffer.map((item, i) => (
          <li key={i} className="text-[#1282A2]">
            {renderInlineTextWithLinks(item)}
          </li>
        ))}
      </ul>
    );

    bulletBuffer = [];
    return ul;
  };

  lines.forEach((line, index) => {
    // Bullet line
    if (line.startsWith("- ")) {
      bulletBuffer.push(line.replace(/^- /, ""));
      return;
    }

    // Non-bullet → flush bullets first
    const flushed = flushBullets(index);
    if (flushed) blocks.push(flushed);

    if (line.length > 0) {
      blocks.push(
        <p
          key={`p-${index}`}
          className="text-md text-[#1282A2] leading-relaxed text-justify mt-4"
        >
          {renderInlineTextWithLinks(line)}
        </p>
      );
    }
  });

  // Flush remaining bullets at end
  const flushed = flushBullets(lines.length);
  if (flushed) blocks.push(flushed);

  return blocks;
}



export default function LaySummaryPage({ laySummaryData }: { laySummaryData: any }) {
  if (!laySummaryData) {
    return <p className="text-center mt-20">Summary not found.</p>;
  }

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative w-full h-[100vh] flex flex-col items-center justify-center text-center bg-white overflow-hidden">
        {/* Background images */}
        <Image
          src={"/images/news/hero.png"}
          alt="Molecule Left"
          fill
          priority
          className="object-cover brightness-100"
        />
        {/* Main Content */}
        <div className="relative z-10 px-6">
          <h1
            className="text-3xl md:text-5xl font-bold text-[#001F54]"
            style={{ fontFamily: "'Martel Sans', sans-serif" }}
          >
            {laySummaryData.title}
          </h1>

          {/* Date and Tags */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
            <span className="text-[#1282A2] text-lg">
              {new Date(laySummaryData.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>

            {laySummaryData.tags.map((tag: { id: Key | null | undefined; tag: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => (
              <span
                key={tag.id}
                className="bg-[#1282A2] text-white opacity-80 px-3 py-1 rounded-full text-sm"
              >
                {tag.tag}
              </span>
            ))}
          </div>

          {/* Paper Link */}
          <div className="mt-6">
            <Link
              href={laySummaryData.paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1282A2] text-lg font-medium hover:underline flex items-center justify-center gap-1"
            >
              Access the Paper Here →
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center">
            <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce duration-700"></div>
          </div>
          <span className="mt-2 text-gray-500 text-sm">Scroll Down</span>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-20 px-6 md:px-40 bg-[#FEFCFB] text-center">
        {/* Image */}
        <div className="mb-8 max-w-5xl mx-auto">
          <div className="w-full max-w-4xl aspect-[16/9] rounded-lg overflow-hidden relative mx-auto">
            <Image
              src={laySummaryData.contentImage}
              alt="Lay Summary Visual"
              fill
              className="object-cover"
            />
          </div>

          <p className="text-sm text-[#1282A2] mt-3 italic text-center">
            {renderInlineTextWithLinks(laySummaryData.imageCaption)}
          </p>
        </div>

        {/* Section Q&A */}
        <div className="text-left max-w-5xl mx-auto space-y-12">
          {laySummaryData.sections.map((section: { question: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; answer: string; }, index: Key | null | undefined) => (
            <div key={index}>
              <h2 className="text-2xl font-semibold text-[#001F54] mb-2">
                {section.question}
              </h2>
              <div className="space-y-2">
                {/* Pass the entire section.answer straight to your formatter function */}
                {renderAnswerWithParagraphsAndBullets(section.answer)}
              </div>
            </div>
          ))}
        </div>
        {/* <div className="text-left max-w-5xl mx-auto space-y-12">
          {laySummaryData.sections.map((section: { question: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; answer: string; }, index: Key | null | undefined) => (
            <div key={index}>
              <h2 className="text-2xl font-semibold text-[#001F54] mb-2">
                {section.question}
              </h2>
              <div className="space-y-5">
                {section.answer.split("\n\n").map((paragraph: string, pIndex: Key | null | undefined) => (
                  <p
                    key={pIndex}
                    className="text-md text-[#1282A2] leading-relaxed text-justify"
                  >
                    {renderAnswerWithParagraphsAndBullets(paragraph)}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div> */}

        {/* Back Button */}
        <div className="mt-16 text-center">
          <Link
            href="/summary"
            className="px-6 py-3 bg-[#1282A2] text-white opacity-80 rounded-full hover:bg-[#0f6a88] transition-all"
          >
            ← Back to Summaries
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

export async function getServerSideProps({ params }: { params: { id: string } }) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/summary/${params.id}`
    );

    if (!res.ok) {
      return { notFound: true };
    }

    const laySummaryData = await res.json();

    return {
      props: { laySummaryData },
    };
  } catch (error) {
    console.error(error);

    return { notFound: true };
  }
}
