import Navbar from "../../components/navbar";
import Head from "next/head";
import Footer from "../../components/footer";
import TeamGrid from "@/components/team_main";
import HeroSection from "../../components/hero_pages";

export default function Team({ team }: { team: any }) {
  return (
    <>
      <div className="bg-[#FEFCFB] min-h-screen">
        <Head>
          <title>Mishra Lab</title>
          <meta name="Team Section" content="Mishra Lab - Team" />
          <link
            href="https://fonts.googleapis.com/css2?family=Jura:wght@400;600&display=swap"
            rel="stylesheet"
          />
        </Head>

        <Navbar />

        <HeroSection
          imageUrl={"/images/team-hero.png"}
          heading={"Meet the Team"}
          subtext={"Learn more about the individuals powering our research"}
        />

        <TeamGrid team={team} />

        <Footer />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/team`);
  const team = await res.json();

  return {
    props: {
      team,
    },
  };
}

// import Navbar from "../../components/navbar";
// import Head from "next/head";
// import NewsGrid from "../../components/news_grid_main";
// import Footer from "../../components/footer";
// import NewsPage from "../../components/news_main";
// import TeamGrid from "@/components/team_main";
// import HeroSection from "../../components/hero_pages";
// import { teamData } from "@/lib/teamdata";

// export default function Team(){
//   return(
//     <>
//     <div className="bg-[#FEFCFB] min-h-screen">
//       <Head>
//         <title>Mishra Lab</title>
//         <meta name="Team Section" content="Mishra Lab - Team" />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Jura:wght@400;600&display=swap"
//           rel="stylesheet"
//         />
//       </Head>
//       <Navbar />
//       <HeroSection imageUrl={"/images/team-hero.png"} heading={"Meet the Team"} subtext={"Learn more about the individuals powering our research"} />
//       <TeamGrid team={teamData}/>
//       <Footer />
//     </div>
//     </>
//   )
// }
