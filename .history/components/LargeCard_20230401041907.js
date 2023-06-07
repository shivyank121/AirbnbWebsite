import Image from 'next/image'
import React from 'react'

function LargeCard({ img, title, description, buttonText}) {
  return (
    <section>
        <div className='relative'>

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
