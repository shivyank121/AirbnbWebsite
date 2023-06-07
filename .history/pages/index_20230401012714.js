import { Banner } from "@/components/Banner";
import Header from "@/components/Header";
import SmallCard from "@/components/SmallCard";
import Head from "next/head";

export default function Home({ exploreData }) {
  return (
    <div>
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

          <div container justify="center" spacing={4}>
        {exploreData && exploreData?.map((item) => (
          <div item key={item.id} location={item.location}  xs={12} sm={6} md={4} lg={3}>
        
          </div>
        ))}
      </div>
        </section>
      </main>
    </div>
  );
}

export async function getStaticsProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").
  then(
    res => res.json()
  );
  return {
    props: {
      exploreData,
    },
  };
}
