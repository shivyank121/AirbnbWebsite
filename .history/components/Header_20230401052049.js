import Image from "next/image";
import React from "react";
import { 

  Bars3Icon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
  



} from "@heroicons/react/24/solid";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white/95 shadow-md p-5 backdrop-blur-md backdrop-brightness-200 backdrop-opacity-10 md:backdrop-blur-lg md:px-10">
      {/* left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          alt="logo"
          width={100}
          height={40}
        />
      </div>
      {/* Middle */}
      <div className="flex  items-center md:border-2 rounded-full py-2 md:shadow-sm ">
        <input type="text" className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400" placeholder="Start your search" />

        <MagnifyingGlassIcon className="h-8 w-8 hidden md:inline-flex text-white bg-red-400 rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* Right */}

      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer hover:bg-gray-100">Airbnb your home </p>
        <GlobeAltIcon className="h-8 cursor-pointer hover:bg-gray-100 bg-white p-1  rounded-full" />

        <div className="flex space-x-2 border-2  items-center rounded-full p-2 hover:shadow-md">
        <Bars3Icon className="h-6"/>
        <UserCircleIcon className="h-6" />

        </div>
        {/* <UsersIcon /> */}
      </div>
    </header>
  );
}

export default Header;
