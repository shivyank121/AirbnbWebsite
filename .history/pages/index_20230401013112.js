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
        
        { exploreData?.map((c) => (
    <FilterColor color = {c} key = {c} />
  ))}

   
        </section>
      </main>
    </div>
  );
}

export async function getStaticsProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").
  then(
    (res) => res.json()
  );
  return {
    props: {
      exploreData,
    },
  };
}
