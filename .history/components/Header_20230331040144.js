import Image from "next/image";
import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/solid";
import { MagnifyingGlassPlusIcon } from "@heroicons/24/outline";

<MagnifyingGlassPlusIcon class="h-6 w-6 text-gray-500" />


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
      <div>
        <input type="text" placeholder="search" />

        <MagnifyingGlassIcon class="h-6 w-6 text-gray-500" />
      </div>
      {/* Right */}
      <div></div>
    </header>
  );
}

export default Header;
