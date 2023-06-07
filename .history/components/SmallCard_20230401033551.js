import Image from 'next/image'
import React from 'react'

function SmallCard({img, location, distance}) {
  return (
    <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl
    cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-100'>

     {/* {left} */}
     <div className='relative h-16 w-16'>

     <Image
     src={img}
     fill
       className='rounded-lg'
      />
     </div>


     {/* right */}
     <div>
        <h2 className='font-bold'>{location}</h2>
        <h3>{distance}</h3>
     </div>

    </div>
  )
}

export default SmallCard
