import Image from 'next/image'
import React from 'react'

export const Banner = () => {
  return (
    <div className='relative h-[300px]'>

<Image
src="https://links.papareact.com/0fm" alt="cover" 
fill
sizes="(max-width: 768px) 100vw,
(max-width: 1200px) 50vw,
33vw"
quality={100}
style={{
  objectFit: 'cover',
}}


/>

    </div>
  )
}
