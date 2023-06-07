import Image from 'next/image'
import React from 'react'

function SmallCard({img, location, distance}) {
  return (
    <div>

     {/* {left} */}
     <Image
     src={img}
     fill
      />


     {/* right */}

    </div>
  )
}

export default SmallCard
