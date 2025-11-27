import Image, { StaticImageData } from "next/image";
import React from "react";
import { Button } from "../ui/button";

type Props = {
  image: string | StaticImageData;
  title: string;
  desc: string;
  valor: string;
  onDonateClick: () => void;
};

export default function CardDoacoes({
  desc,
  image,
  title,
  valor,
  onDonateClick,
}: Props) {
  return (
    <div className="border-2 border-[#3E529D] rounded-xl grid justify-items-center overflow-hidden w-full bg-white shadow-lg">
      <div className="relative w-full h-48 md:h-72">
        <Image alt={title} src={image} fill objectFit="cover" />
      </div>
      <div className="p-6 w-full">
        <h1 className="text-xl md:text-2xl my-3 font-bold px-2 text-center text-[#3E529D]">{title}</h1>
        <p className="text-sm md:text-base mb-4 px-2 text-center text-gray-700 leading-relaxed">{desc}</p>
        <p className="mb-4 text-2xl md:text-3xl text-[#3E529D] font-bold text-center">R$ {valor}</p>
        <Button 
          className="mb-3 bg-[#3E529D] hover:bg-[#3E529D]/90 text-white w-full px-6 py-3 font-semibold" 
          onClick={onDonateClick}
        >
          DOE AGORA
        </Button>
      </div>
    </div>
  );
}
