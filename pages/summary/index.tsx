import Navbar from "../../components/navbar";
import Head from "next/head";
import NewsGrid from "../../components/news_grid_main";
import Footer from "../../components/footer";
import NewsPage from "../../components/news_main";
import HeroSection from "../../components/hero_pages";
import SummaryPage from "@/components/summary_main";

export default function Summary({ summaries }: { summaries: any[] }) {
  return(
    <>
    <div className="bg-[#FEFCFB] min-h-screen">
      <Head>
        <title>Mishra Lab</title>
        <meta name="Summary Section" content="Mishra Lab - Summary" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jura:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <HeroSection imageUrl={"/images/hero-summary.png"} heading={"Summaries For All"} subtext={"Making complex science easy to understand"} />
      <SummaryPage summaries={summaries} />
      <Footer />
    </div>
    </>
  )
}

export async function getServerSideProps() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/summary`);

    if (!res.ok) throw new Error("Failed fetch");

    const summaries = await res.json();

    return {
      props: { summaries },
    };
  } catch (error) {
    console.error(error);

    return {
      props: { summaries: [] },
    };
  }
}