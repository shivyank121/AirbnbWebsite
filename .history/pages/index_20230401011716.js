import { Banner } from "@/components/Banner";
import Header from "@/components/Header";
import SmallCard from "@/components/SmallCard";
import Head from "next/head";

export default function Home({ products }) {
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

          {/* {Pull some data from a server-API endpoints} */}
          {exploreData && exploreData?.map((product) => (
          
          <h1>{product.location}</h1>
          // <SmallCard 
          // item key={product.id}
          // img={product.img}
          // distance={product.distance}
          // location={product.location} />
          ))}
        </section>
      </main>
    </div>
  );
}

export async function getStaticsProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    res => res.json()
  );
  return {
    props: {
      exploreData,
    },
  };
}
