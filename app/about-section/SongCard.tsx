import React from "react";
import Image from "next/image";
import { SongProps } from "./songDetails";
import Link from "next/link";


const SongCard: React.FC<SongProps> = ({ title, artist, image, link }) => {
  return (
    <Link href={link} target="_blank" aria-label={`Check out ${title} by ${artist} on Spotify`}>
      <div className="relative flex h-[138px] w-[195px] items-center justify-center overflow-hidden rounded-xl py-0 sm:h-[140px] sm:w-[200px] md:h-[160px] md:w-[250px] lg:h-[190px] lg:w-[270px]">
        <Image
          src={image}
          alt={title}
          width={270} // Provide explicit width & height for optimization
          height={190}
          className="w-full h-full object-cover rounded-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>

        <div className="absolute bottom-3 left-5">
          <p className="text-[14px] text-white">{artist}</p>
          <h4 className="text-[18px] font-bold text-white">{title}</h4>
        </div>
      </div>
    </Link>
  );
};

export default SongCard;
