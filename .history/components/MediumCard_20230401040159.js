import Image from "next/image";
import React from "react";

function MediumCard({ img, title }) {
  return (
    <div className="cursor-pointer hover:scale-105">
      <div className="flex relative w-80 h-80">
        <Image src={img} fill alt="cover" />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
}

export default MediumCard;
