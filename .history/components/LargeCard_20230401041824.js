import Image from 'next/image'
import React from 'react'

function LargeCard({ img, title, description, buttonText}) {
  return (
    <section>
      <Image
      src={img}
      fill
      alt='largercard'
      style={{
        objectFit: "cover",
      }} />
    </section>
  )
}

export default LargeCard
