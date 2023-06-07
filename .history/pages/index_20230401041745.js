import { Banner } from "@/components/Banner";
import Header from "@/components/Header";
import LargeCard from "@/components/LargeCard";
import MediumCard from "@/components/MediumCard";
import SmallCard from "@/components/SmallCard";
import Head from "next/head";

export default function Home({ exploreData, CardsData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Baner */}

      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16 ">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5 ">Explore Nearby</h2>

          {/* {Pull some data from a server-API endpoints} */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2
          lg:grid-cols-3 xl:grid-cols-4"
          >
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>

        <section>
        <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
      <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3
      -ml-3 ">
        
      {CardsData?.map(({ img, title }) => (
          <MediumCard key={img} img={img} title={title} />
        ))}
      </div>

        </section>

      
      <LargeCard 
      img="https://links.papareact.com/4cj"
      title="The Greatest Outdoors"
      description="Wishlists curated by Airbnb"
      buttonText="Get Inspired"
      />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://www.jsonkeeper.com/b/4G1G");
  const exploreData = await res.json();

  // const CardsData = await fetch("https://www.jsonkeeper.com/b/zp1");

  const CardsData = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
      CardsData,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}
