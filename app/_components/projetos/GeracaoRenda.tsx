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
      logo: <User className="w-12 h-12" />,
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center py-16 bg-white px-4 lg:px-0">
      <div className="w-full max-w-7xl">
        {/* Título */}
        <div className="mb-12">
          <h1 className="w-full text-center text-3xl md:text-4xl lg:text-5xl font-bold text-[#3E529D] px-4 mb-6">
            GERAÇÃO DE RENDA: AUTONOMIA QUE TRANSFORMA VIDAS
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
                Na <span className="font-semibold text-[#3E529D]">Vila Esperança</span>, acreditamos que a transformação verdadeira acontece quando oferecemos oportunidades para que as pessoas se tornem <span className="font-semibold">protagonistas de suas próprias histórias</span>.
              </p>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed text-justify mb-4">
                Por meio de <span className="font-semibold text-[#3E529D]">oficinas profissionalizantes</span>, capacitamos <span className="font-semibold">mulheres e moradores da comunidade</span> em atividades como <span className="font-semibold">artesanato e produção de materiais</span> para comercialização. Além de aprenderem um ofício, os participantes ganham <span className="font-semibold">autoestima, independência financeira</span> e a possibilidade de sonhar mais alto.
              </p>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed text-justify mb-4">
                Essas ações não apenas geram renda, mas também fortalecem o sentimento de <span className="font-semibold">pertencimento, colaboração e dignidade</span>.
              </p>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed text-justify">
                Com trabalho e criatividade, estamos construindo um futuro mais <span className="font-semibold text-[#3E529D]">justo, sustentável e cheio de esperança</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Cards de Informações */}
        <div className="w-full grid grid-cols-1 md:grid-cols-1 gap-6 mt-8 max-w-2xl mx-auto">
          {arteTag.map((item, index) => (
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
