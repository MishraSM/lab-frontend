import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import { FaAward, FaCamera } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { BiLandscape } from "react-icons/bi";
import { JSX, Key } from "react";
import Footer from "@/components/footer";

// Category types
type Category = "Recognition" | "ResearchActivity" | "Media" | "Grant";

const categoryIcons: Record<Category, JSX.Element> = {
  Recognition: <FaAward className="text-white text-lg" />,
  ResearchActivity: <IoPeople className="text-white text-lg" />,
  Media: <FaCamera className="text-white text-lg" />,
  Grant: <BiLandscape className="text-white text-lg" />,
};

function renderTextWithLinks(text: string) {
  const linkRegex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;

  const parts: (string | JSX.Element)[] = [];
  let lastIndex = 0;

  text.replace(linkRegex, (match, label, url, index) => {
    // Push text before the link
    parts.push(text.slice(lastIndex, index));

    // Push the link
    parts.push(
      <a
        key={index}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#1282A2] underline hover:text-[#1282A2] transition-colors"
      >
        {label}
      </a>
    );

    lastIndex = index + match.length;
    return match;
  });

  // Push remaining text
  parts.push(text.slice(lastIndex));

  return parts;
}


export default function NewsPage({item}: { item: any }) {
  if (!item) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-[#FEFCFB]">
          <p className="text-[#1282A2]">News item not found.</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[100vh] flex items-center justify-center text-center">
        <Image
          src={"/images/news/hero.png"}
          alt="News Background"
          fill
          priority
          className="object-cover brightness-100"
        />

        <div className="relative z-10 px-6">
          {/* Title */}
          <h1
            className="text-3xl md:text-5xl font-bold mt-10 text-[#001F54]"
            style={{ fontFamily: "'Martel Sans', sans-serif" }}
          >
            {item.title}
          </h1>

          {/* Date + Category */}
          <div className="text-xl md:text-xl text-[#1282A2] mt-4 flex items-center justify-center gap-4">
            {/* Date */}
            <span>{new Date(item.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>

            {/* Separator */}
            <div className="w-px h-6 bg-gray-400"></div>

            {/* Category Button */}
            <div className="flex items-center gap-2 bg-[#1282A2] opacity-60 text-white px-3 py-1 rounded-full">
                {categoryIcons[item.category as Category]}
                <span className="font-medium">{item.category}</span>
            </div>
            </div>
        </div>

        {/* Scroll Icon */}
        <div className="absolute bottom-6 flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center">
            <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce duration-700"></div>
          </div>
          <span className="mt-2 text-gray-500 text-sm">Scroll Down</span>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6 md:px-40 bg-[#FEFCFB] text-center">
        {/* Centered Image */}
        <div className="mb-8">
          <div className="w-full max-w-4xl aspect-[16/9] rounded-lg overflow-hidden mx-auto relative">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>
          <p className="text-sm text-[#1282A2] mt-3 italic">
            {item.imageCaption}
          </p>
        </div>

        {/* Subtitle */}
        <h2 className="text-2xl font-bold text-[#001F54] mb-4">
          {item.subtitle}
        </h2>

        <div className="max-w-5xl mx-auto text-[#1282A2] leading-relaxed text-justify space-y-6">
          {item.content
            .split("\n\n")
            .map((paragraph: string, index: Key | null | undefined) => (
              <p key={index}>{renderTextWithLinks(paragraph)}</p>
            ))}
        </div>

        {/* Back Button */}
        <div className="mt-12">
          <Link
            href="/news"
            className="px-6 py-3 bg-[#1282A2] text-white opacity-80 rounded-full hover:bg-[#0f6a88] transition-all"
          >
            ← Back to News
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
      `${process.env.NEXT_PUBLIC_API_URL}/news/${params.id}`
    );

    if (!res.ok) {
      return { notFound: true };
    }

    const item = await res.json();

    return {
      props: { item },
    };
  } catch (error) {
    console.error(error);
    return { notFound: true };
  }
}
