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
      logo: <Sprout className="w-12 h-12" />,
    },
    {
      title: "Trazer vida a partir daquilo que nos dá a vida",
      logo: <Shrub className="w-12 h-12" />,
    },
    {
      title:
        "Temos o objetivo de educar, ensinar, transformar e conscientizar sobre a importância da conservação da natureza por meio de práticas de reflorestamento em viveiros",
      logo: <Leaf className="w-12 h-12" />,
    },
    {
      title:
        "Atuamos com a construção de hortas comunitárias para o desenvolvimento sustentável das comunidades e reeducação alimentar com hábitos saudáveis",
      logo: <Citrus className="w-12 h-12" />,
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center py-16 bg-white px-4 lg:px-0">
      <div className="w-full max-w-7xl">
        {/* Título */}
        <div className="mb-12">
          <h1 className="w-full text-center text-3xl md:text-4xl lg:text-5xl font-bold text-[#3E529D] px-4 mb-6">
            FRUTOS DE ESPERANÇA: PLANTANDO O FUTURO, CUIDANDO DO PRESENTE
          </h1>
          <div className="w-full flex justify-center items-center">
            <div className="w-32 border-b-4 border-[#3E529D]"></div>
          </div>
        </div>

        {/* Layout Principal - Foto à esquerda, Texto à direita */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
          {/* Seção de Imagem - Lado Esquerdo */}
          <div
            className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
            ref={imageRef}
          >
            <Image 
              alt="Foto do carrossel" 
              src={images[currentImageIndex]} 
              fill 
              objectFit="cover"
              className="object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#3E529D]/20 via-transparent to-transparent"></div>
          </div>

          {/* Seção de Texto - Lado Direito */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="bg-[#3E529D]/5 rounded-2xl p-6 md:p-8 lg:p-10 border-l-4 border-[#3E529D]">
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed text-justify mb-4">
                O projeto <span className="font-semibold text-[#3E529D]">Frutos de Esperança</span> nasceu com a missão de <span className="font-semibold">trazer vida por meio daquilo que nos dá a vida: a natureza</span>. Acreditamos que semeando consciência, colhemos transformação, e é exatamente isso que fazemos.
              </p>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed text-justify mb-4">
                Nosso objetivo é <span className="font-semibold text-[#3E529D]">educar, ensinar, transformar e conscientizar</span> sobre a importância da preservação ambiental, promovendo ações que unem o cuidado com o meio ambiente ao desenvolvimento sustentável das comunidades atendidas.
              </p>
              <ul className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed space-y-2 mb-4 list-disc list-inside">
                <li><span className="font-semibold">Reflorestamento em viveiros</span>, com o plantio de mudas nativas e educação ambiental;</li>
                <li><span className="font-semibold">Construção de hortas comunitárias</span>, fortalecendo a segurança alimentar e incentivando a produção local;</li>
                <li><span className="font-semibold">Reeducação alimentar</span>, com foco em hábitos saudáveis, sustentabilidade e aproveitamento dos recursos naturais.</li>
              </ul>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed text-justify">
                Ao integrar natureza, educação e alimentação saudável, o <span className="font-semibold text-[#3E529D]">Frutos de Esperança</span> ajuda a construir um presente mais consciente e um futuro mais verde para todos. Vamos juntos cultivar esperança, uma muda, uma horta, uma comunidade de cada vez.
              </p>
            </div>
          </div>
        </div>

        {/* Cards de Informações */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {frutosEsperancaTag.map((item, index) => (
            <div
              key={index}
              className="bg-[#3E529D]/5 rounded-2xl p-6 flex flex-col items-center text-center space-y-4 border-2 border-[#3E529D]/20 hover:bg-[#3E529D]/10 transition-all duration-300"
            >
              <div className="text-[#3E529D]">{item.logo}</div>
              <h2 className="text-gray-700 text-base md:text-lg font-semibold leading-relaxed">
                {item.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
