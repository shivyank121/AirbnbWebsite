import Image from 'next/image'
import React from 'react'

function MediumCard({img,title}) {
  return (
    <div className='flex relative w-80 h-80'>
      
   <Image
   src={img}
 fill
 alt="cover"
 sizes="(max-width: 768px) 100vw,
(max-width: 1200px) 50vw,
33vw"

 style={{
   objectFit: "cover",
 }}
   />
    </div>
  )
}

export default MediumCard
