import fotoCine1 from "@/app/public/fotoCine1.jpeg";
import fotoCine2 from "@/app/public/fotoCine2.jpeg";
import fotoCine3 from "@/app/public/fotoCine3.jpeg";
import { House, StepForward } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function CineEsperanca() {
  const images = [fotoCine1, fotoCine2, fotoCine3];
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
  const cineTag = [
    {
      title:
        "Exibição de filmes educativos para as crianças levando cultura, educação, lazer e integração.",
      logo: <StepForward className="w-12 h-12 text-white" />,
    },
    {
      title:
        "Mais de 50 crianças se reúnem semanalmente na praça de comunidades rurais de Jacobina.",
      logo: <House className="w-12 h-12 text-white" />,
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center py-16 bg-[#3E529D] px-4 lg:px-0">
      <div className="w-full max-w-7xl">
        {/* Título */}
        <div className="mb-12">
          <h1 className="w-full text-center text-3xl md:text-4xl lg:text-5xl font-bold text-white px-4 mb-6">
            CINE ESPERANÇA: LUZ, CULTURA E TRANSFORMAÇÃO
          </h1>
          <div className="w-full flex justify-center items-center">
            <div className="w-32 border-b-4 border-white"></div>
          </div>
        </div>

        {/* Layout Principal - Texto à esquerda, Foto à direita */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
          {/* Seção de Texto - Lado Esquerdo */}
          <div className="flex flex-col justify-center space-y-6 order-2 lg:order-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-10 border-l-4 border-white">
              <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed text-justify mb-4">
                O <span className="font-semibold">Cine Esperança</span> é um projeto de cinema social que leva muito mais do que filmes às comunidades: ele promove <span className="font-semibold">educação, cultura, lazer e integração</span> para crianças do sertão baiano.
              </p>
              <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed text-justify mb-4">
                Semanalmente, <span className="font-semibold text-white">mais de 50 crianças</span> se reúnem na praça de comunidades rurais de <span className="font-semibold">Jacobina (BA)</span> para assistir a <span className="font-semibold">filmes educativos</span>, pensados especialmente para inspirar, ensinar e entreter.
              </p>
              <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed text-justify mb-4">
                Em regiões com pouco ou nenhum acesso a espaços culturais, o Cine Esperança se torna um <span className="font-semibold">momento mágico</span>, uma experiência coletiva de aprendizado e encantamento que amplia horizontes e alimenta sonhos.
              </p>
              <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed text-justify">
                <span className="font-semibold">Cultura que transforma. Educação que inspira. Esperança que se compartilha.</span>
              </p>
            </div>
          </div>

          {/* Seção de Imagem - Lado Direito */}
          <div
            className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2"
            ref={imageRef}
          >
            <Image 
              alt="Foto do carrossel" 
              src={images[currentImageIndex]} 
              fill 
              objectFit="cover"
              className="object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-bl from-[#3E529D]/20 via-transparent to-transparent"></div>
          </div>
        </div>

        {/* Cards de Informações */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {cineTag.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center text-center space-y-4 border-2 border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-white">{item.logo}</div>
              <h2 className="text-white text-base md:text-lg font-semibold leading-relaxed">
                {item.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
