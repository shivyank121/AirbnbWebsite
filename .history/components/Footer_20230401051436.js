import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4  px-32 py-14
    bg-gray-100  text-gray-600'>
      <div className=' space-y-4 text-xs  text-gray-800'>
        <h5 className='font-bold'>ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className='space-y-4 text-xs  text-gray-800'>
        <h5 className='font-bold'>COMUNITY</h5>
        <p>Accessibility</p>
        <p>This not a real state </p>
        <p>Its a pretty awsome clone</p>
        <p>Referrals accepted</p>
        <p>Airbnb fan</p>
      </div>
      <div className='space-y-4 text-xs  text-gray-800'>
        <h5 className='font-bold'>Categoreis</h5>
        <p>Airbnb Farms</p>
        <p>Camping</p>
        <p>Private Rooms</p>
        <p>Luxe</p>
        <p>Beach Front</p>
      </div>
      <div className='space-y-4 text-xs  text-gray-800'>
        <h5 className='font-bold'>SUPPORT</h5>
        <p>Help Center</p>
        <p>Trust & Safety</p>
        <p>Easter Eggs</p>
        <p>Say Hi Youtube</p>
        <p>For the Wins</p>
      </div>
   
    
    </div>
  )
}

export default Footer
