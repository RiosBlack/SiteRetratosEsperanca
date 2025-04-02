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
    <div className="border-2 rounded-xl grid justify-items-center overflow-hidden">
      <div className="relative w-full h-72">
        <Image alt={title} src={image} fill objectFit="cover" />
      </div>
      <h1 className="text-2xl my-3 font-semibold">{title}</h1>
      <p className="text-base mb-3 px-2 text-center">{desc}</p>
      <p className="mb-3 text-2xl text-orange-400 font-semibold"> R$ {valor}</p>
      <Button className="mb-3 bg-red-500" onClick={onDonateClick}>
        DOE AGORA
      </Button>
    </div>
  );
}
