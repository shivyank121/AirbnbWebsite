import Image from 'next/image'
import React from 'react'

function LargeCard({ img, title, description, buttonText}) {
  return (
    <section>
        <div className='relative h-96 min-w-[300px]'>

      <Image
      src={img}
      fill
      alt='largercard'
      style={{
        objectFit: "cover",
      }} />
        </div>

        <div>

        </div>

    </section>
  )
}

export default LargeCard
