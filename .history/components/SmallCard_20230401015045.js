import Image from 'next/image'
import React from 'react'

function SmallCard({img, location, distance}) {
  return (
    <div>

     {/* {left} */}
     <div className='relative h-16 w-16'>

     <Image
     src={img}
     fill
     width={100}
     height={100}
      />
     </div>


     {/* right */}

    </div>
  )
}

export default SmallCard
