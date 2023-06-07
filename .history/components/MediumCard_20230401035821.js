import Image from 'next/image'
import React from 'react'

function MediumCard({img,title}) {
  return (
    <div className='flex'>
      
   <Image
   src={img}
 fill
 alt="cover"
 fill
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
