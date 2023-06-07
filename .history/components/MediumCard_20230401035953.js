import Image from "next/image";
import React from "react";

function MediumCard({ img, title }) {
  return (
    <div className="flex relative w-80 h-80">
      <Image src={img} fill alt="cover" />
    </div>
  );
}

export default MediumCard;
