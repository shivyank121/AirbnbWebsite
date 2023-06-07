
import { Banner } from '@/components/Banner'
import Header from '@/components/Header'
import Head from 'next/head'


export default function Home() {
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

      <main>
        <section>
          <h2 className='text-4xl font-semibold pb-5 '>Explore Nearby</h2>
        </section>
      </main>
    </div>
  )
}
