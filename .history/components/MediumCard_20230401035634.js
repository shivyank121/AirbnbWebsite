import Image from 'next/image'
import React from 'react'

function MediumCard({img,title}) {
  return (
    <div className='flex'>
      
   <Image
   src={img}

   />
    </div>
  )
}

export default MediumCard
