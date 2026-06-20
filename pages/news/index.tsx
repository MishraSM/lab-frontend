import Navbar from "../../components/navbar";
import Head from "next/head";
import NewsGrid from "../../components/news_grid_main";
import Footer from "../../components/footer";
import NewsPage from "../../components/news_main";
import HeroSection from "../../components/hero_pages";

export default function News({ news }: { news: any }) {
  return(
    <>
    <div className="bg-[#FEFCFB] min-h-screen">
      <Head>
        <title>Mishra Lab</title>
        <meta name="News Section" content="Mishra Lab - News" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jura:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <HeroSection imageUrl={"/images/news-hero.png"} heading={"News and Highlights"} subtext={"Sharing achievements, breakthroughs, and moments that matter"} />
      <NewsPage news={news} />
      <Footer />
    </div>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news`);
  const news = await res.json();

  return {
    props: { news },
  };
}