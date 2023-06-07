
import { Banner } from '@/components/Banner'
import Header from '@/components/Header'
import Head from 'next/head'


export default function Home({exploreData}) {
  return (
    <div className=''>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Baner */}

      <Banner/>

      <main className='max-w-7xl mx-auto px-8 sm:px-16 '>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5 '>Explore Nearby</h2>

          {/* {Pull some data from a server-API endpoints} */}
          <ul>
      {exploreData.map((post) => (
        <li>
          <h3>{post.filename}</h3>
          <p>{post.location}</p>
        </li>
      ))}
    </ul>
        </section>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://links.papareact.com/pyp')
  const exploreData = await res.json()

  return {
    props: {
      exploreData,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }
}
