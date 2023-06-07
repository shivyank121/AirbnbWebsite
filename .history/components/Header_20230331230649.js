import Image from "next/image";
import React from "react";
import { 
  Bars2Icon,
  Bars3Icon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
  UsersIcon,



} from "@heroicons/react/24/solid";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 backdrop-blur-sm md:px-10">
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

        <MagnifyingGlassIcon class="h-8 w-8 hidden md:inline-flex text-white bg-red-400 rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* Right */}

      <div className="flex space-x-4 items-center justify-end">
        <p>Become a host </p>
        <GlobeAltIcon className="h-6" />
        <Bars3Icon/>
        <UserCircleIcon />
        <UsersIcon />
      </div>
    </header>
  );
}

export default Header;
