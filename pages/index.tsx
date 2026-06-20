import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/navbar";
import Head from "next/head";
import Hero from "../components/hero";
import NewsGrid from "../components/news_grid_main";
import LaySummaryGrid from "../components/summay_grid_main";
import CollaboratorSlider from "../components/collab_slider";
import Footer from "../components/footer";
import TeamGrid from "../components/team_grid_main";
import Contact from "@/components/contact";
import Media from "../components/media";

export default function Home({ team, news, lay, mediaItems }: { team: any, news: any, lay: any, mediaItems: any }) {
  return(
    <div className="bg-[#FEFCFB] min-h-screen">
      <Head>
        <title>Mishra Lab</title>
        <meta name="description" content="Mishra Lab Website" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jura:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <Hero />
      <NewsGrid newsItems={news} />
      <LaySummaryGrid laySummary={lay} />
      <TeamGrid team={team} />
      <Media mediaItems={mediaItems} />
      <Footer />
    </div>
  )
}
export async function getServerSideProps() {
  try {
    const base = process.env.NEXT_PUBLIC_API_URL;

    const [teamRes, newsRes, layRes, mediaRes] = await Promise.all([
      fetch(`${base}/team?limit=5`),
      fetch(`${base}/news?limit=3`),
      fetch(`${base}/summary?limit=3`),
      fetch(`${base}/media`),
    ]);

    const [team, news, lay, mediaItems] = await Promise.all([
      teamRes.ok ? teamRes.json() : [],
      newsRes.ok ? newsRes.json() : [],
      layRes.ok ? layRes.json() : [],
      mediaRes.ok ? mediaRes.json() : [],
    ]);

    return {
      props: {
        team: team.filter((member: { role: string; }) => member.role !== 'Alumni').slice(0, 5),
        news: news.slice(0, 3),
        lay: lay.sort((a: { date: string | number | Date; }, b: { date: string | number | Date; }) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3),
        mediaItems,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      props: {
        team: [],
        news: [],
        lay: [],
        mediaItems: [],
      },
    };
  }
}