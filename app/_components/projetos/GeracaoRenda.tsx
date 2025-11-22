import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import foto from "@/app/public/fotoGeracaoRenda1.jpg";
import foto1 from "@/app/public/fotoGeracaoRenda2.jpg";
import foto2 from "@/app/public/fotoGeracaoRenda3.jpg";
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
    <div className="w-full min-h-screen lg:h-screen flex flex-col justify-center items-center pb-6 bg-corRetratos bg-opacity-20 px-4 lg:px-0">
      <div className="pt-6">
        <h1 className="w-full text-center text-xl lg:text-2xl font-semibold px-4">
          Geração de Renda: Autonomia que Transforma Vidas
        </h1>
        <div className="w-full flex justify-center items-center">
          <div className="w-20 border-b-2 border-corRetratos mt-3"></div>
        </div>
      </div>
      <div className="w-full lg:w-[80%] min-h-[60vh] lg:h-[90vh] grid grid-cols-1 lg:flex mt-5 shadow-xl">
        <div className="flex-1 border-2 rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none border-corRetratos p-4 text-justify flex justify-center items-start text-sm lg:text-base bg-white">
          Na Vila Esperança, acreditamos que a transformação verdadeira acontece quando oferecemos oportunidades para que as pessoas se tornem protagonistas de suas próprias histórias.
          <br />
          Por meio de oficinas profissionalizantes, capacitamos mulheres e moradores da comunidade em atividades como artesanato e produção de materiais para comercialização. Além de aprenderem um ofício, os participantes ganham autoestima, independência financeira e a possibilidade de sonhar mais alto.
          <br />
          Essas ações não apenas geram renda, mas também fortalecem o sentimento de pertencimento, colaboração e dignidade.
          <br />
          Com trabalho e criatividade, estamos construindo um futuro mais justo, sustentável e cheio de esperança.
        </div>
        <div
          className="flex-1 relative rounded-b-xl lg:rounded-r-xl lg:rounded-bl-none overflow-hidden border-2 border-corRetratos min-h-[300px]"
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
      <div className="w-full lg:w-[80%] mt-3 grid grid-cols-1 lg:flex lg:space-x-2 gap-4 lg:gap-0 px-4 lg:px-0">
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
