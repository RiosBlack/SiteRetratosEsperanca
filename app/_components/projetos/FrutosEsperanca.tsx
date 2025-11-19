import { Citrus, Leaf, Shrub, Sprout } from "lucide-react";
import Image from "next/image";
import foto1 from "@/app/public/fotoFrutosEsperanca1.jpg";
import foto2 from "@/app/public/fotoFrutosEsperanca2.jpg";
import foto3 from "@/app/public/fotoFrutosEsperanca3.webp";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function FrutosEsperanca() {
  const images = [foto1, foto2, foto3];
  const imageRef = useRef<HTMLDivElement | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  const frutosEsperancaTag = [
    {
      title: "Plantando o futuro cuidando do presente",
      logo: <Sprout className="w-10 h-10" />,
    },
    {
      title: "Trazer vida a partir daquilo que nos dá a vida",
      logo: <Shrub className="w-10 h-10" />,
    },
    {
      title:
        "Temos o objetivo de educar, ensinar, transformar e conscientizar sobre a importância da conservação da natureza por meio de práticas de reflorestamento em viveiros",
      logo: <Leaf className="w-10 h-10" />,
    },
    {
      title:
        "Atuamos com a construção de hortas comunitárias para o desenvolvimento sustentável das comunidades e reeducação alimentar com hábitos saudáveis",
      logo: <Citrus className="w-10 h-10" />,
    },
  ];

  return (
    <div className="w-full min-h-screen lg:h-screen flex flex-col justify-center items-center pb-6 bg-corRetratos bg-opacity-20 px-4 lg:px-0">
      <div className="pt-6">
        <h1 className="w-full text-center text-xl lg:text-2xl font-semibold px-4">
          Frutos de Esperança: Plantando o Futuro, Cuidando do Presente
        </h1>
        <div className="w-full flex justify-center items-center">
          <div className="w-20 border-b-2 border-corRetratos mt-3"></div>
        </div>
      </div>
      <div className="w-full lg:w-[80%] min-h-[60vh] lg:h-[90vh] grid grid-cols-1 lg:flex mt-5 shadow-xl">
        <div className="flex-1 border-2 rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none border-corRetratos p-4 text-justify flex justify-center items-start text-sm lg:text-base">
          O projeto Frutos de Esperança nasceu com a missão de trazer vida por meio daquilo que nos dá a vida: a natureza. Acreditamos que semeando consciência, colhemos transformação, e é exatamente isso que fazemos.
          <br />
          Nosso objetivo é educar, ensinar, transformar e conscientizar sobre a importância da preservação ambiental, promovendo ações que unem o cuidado com o meio ambiente ao desenvolvimento sustentável das comunidades atendidas.
          <br />
          - Reflorestamento em viveiros, com o plantio de mudas nativas e educação ambiental;
          <br />
          - Construção de hortas comunitárias, fortalecendo a segurança alimentar e incentivando a produção local;
          <br />
          - Reeducação alimentar, com foco em hábitos saudáveis, sustentabilidade e aproveitamento dos recursos naturais.
          <br />
          Ao integrar natureza, educação e alimentação saudável, o Frutos de Esperança ajuda a construir um presente mais consciente e um futuro mais verde para todos.
          Vamos juntos cultivar esperança, uma muda, uma horta, uma comunidade de cada vez.
        </div>
        <div className="flex-1 relative rounded-b-xl lg:rounded-r-xl lg:rounded-bl-none overflow-hidden border-2 border-corRetratos min-h-[300px]" ref={imageRef}>
          <Image alt="Foto do carrossel" src={images[currentImageIndex]} fill objectFit="cover" />
        </div>
      </div>
      <div className="w-full lg:w-[80%] mt-3 grid grid-cols-1 lg:flex lg:space-x-2 gap-4 lg:gap-0 px-4 lg:px-0">
        {frutosEsperancaTag.map((item, index) => (
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
