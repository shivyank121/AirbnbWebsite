import Image from "next/image";
import React from "react";
import { SearchIcon } from '@heroicons/react'

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 backdrop-blur-sm md:px-10" >
      {/* left */}
      <div className='relative flex items-center h-10 cursor-pointer my-auto'>
        <Image
          src="https://links.papareact.com/qd3" alt="logo"
         width={100} height={40}
        
        />
      </div>
      {/* Middle */}
      <div>
  <input type="text" placeholder="search" />
  <SearchIcon />
      </div>
      {/* Right */}
      <div></div>
    </header>
  );
}

export default Header;
