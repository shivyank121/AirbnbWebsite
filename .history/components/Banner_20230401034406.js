import Image from "next/image";
import React from "react";

export const Banner = () => {
  return (
    <div className="relative h-[400px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        alt="cover"
        fill
        sizes="(max-width: 768px)(max-height:500px),
(max-width: 1200px) 50vw,
33vw"

        style={{
          objectFit: "cover",
        }}
      />
      <div className="absolute top-1/2 w-full text-center space-y-2 ">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect</p>

        <button className="text-purple-500 bg-white px-10 py-4 rounded-full shadow-md font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
};
