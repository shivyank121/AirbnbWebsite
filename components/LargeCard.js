import Image from "next/image";
import React from "react";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="relative py-16 cursor-pointer hover:scale-105 transform transition ease-out duration-300">
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
        <button className="text-sm text-white bg-gray-900 py-2 px-4 rounded-lg mt-5">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
