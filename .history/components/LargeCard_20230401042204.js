import Image from "next/image";
import React from "react";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px] ">
        <Image
          src={img}
          fill
          alt="largercard"
          style={{
            objectFit: "cover",
          }}
          className="rounded-2xl"
        />
      </div>

      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>
        <button>{buttonText}</button>
      </div>
    </section>
  );
}

export default LargeCard;
