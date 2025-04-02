import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import foto from "@/app/public/fotosGeracaoRenda.jpg";
import foto1 from "@/app/public/fotosGeracaoRenda2.jpg";
import foto2 from "@/app/public/fotosGeracaoRenda3.jpg";
import { User } from "lucide-react";

export default function GeracaoRenda() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [foto, foto1, foto2];
  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 }
      );
    }
  }, [currentImageIndex]);

  const arteTag = [
    {
      title:
        "Por meio de oficinas profissionalizantes para as mulheres e moradores da vila esperança, estimulamos a produção de artesanatos e materiais para comercialização.",
      logo: <User className="w-10 h-10" />,
    },
  ];

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center pb-6 ">
      <div className="pt-6">
        <h1 className="w-full text-center text-2xl font-semibold">
          Geração de renda
        </h1>
        <div className="w-full flex justify-center items-center">
          <div className="w-20 border-b-2 border-corRetratos mt-3"></div>
        </div>
      </div>
      <div className="w-[80%] h-full flex mt-5 shadow-xl">
        <div className="flex-1 border-2 rounded-l-xl border-corRetratos">
          texto falando sobre
        </div>
        <div
          className="flex-1 relative rounded-r-xl overflow-hidden"
          ref={imageRef} // Referência para a animação
        >
          <Image
            alt="Foto do carrossel"
            src={images[currentImageIndex]}
            fill
            objectFit="cover"
          />
        </div>
      </div>
      <div className="w-[80%] mt-3 flex space-x-2">
        {arteTag.map((item, index) => (
          <div
            key={index}
            className="flex flex-col space-y-2 items-center mt-2 rounded-xl overflow-hidden p-2 flex-1"
          >
            <div>{item.logo}</div>
            <h1 className="text-center">{item.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
