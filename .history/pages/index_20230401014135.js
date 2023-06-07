import { Banner } from "@/components/Banner";
import Header from "@/components/Header";
import Head from "next/head";

export default function Home({ posts }) {
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
          {posts.map((post) => (
          <li key={post.id}>
            <Link href="/projects/[id]" as={`/projects/${project.id}`}>
              <a>{project.location}</a>
            </Link>
          </li>
        ))}

        </section>
      </main>
    </div>
  );
}

// export async function getStaticsProps() {
//   const projects = await fetch("https://links.papareact.com/pyp").
//   then(
//     (res) => res.json()
//   );
//   return {
//     props: {
//       projects,
//     },
//   };
// }

export async function getStaticProps() {
  const res = await fetch('https://links.papareact.com/pyp')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }
}