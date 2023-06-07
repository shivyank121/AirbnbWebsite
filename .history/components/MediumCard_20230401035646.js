import Image from 'next/image'
import React from 'react'

function MediumCard({img,title}) {
  return (
    <div className='flex'>
      
   <Image
   src={img}
 fill
 
   />
    </div>
  )
}

export default MediumCard
