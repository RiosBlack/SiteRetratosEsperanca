import fotoCine1 from "@/app/public/fotoCaravana1.jpg";
import fotoCine2 from "@/app/public/fotoCaravana2.jpg";
import fotoCine3 from "@/app/public/fotoCaravana3.jpg";
import { Heart, Users, Stethoscope, HandHeart } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Caravanas() {
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
  
  const caravanasTag = [
    {
      title:
        "5 dias de imersão e vivência profunda junto à comunidade da Vila Esperança.",
      logo: <Heart className="w-12 h-12" />,
    },
    {
      title:
        "Atendimentos médicos e odontológicos para a comunidade.",
      logo: <Stethoscope className="w-12 h-12" />,
    },
    {
      title:
        "Oficinas e atividades com crianças, momentos de escuta, troca e conexão.",
      logo: <Users className="w-12 h-12" />,
    },
    {
      title:
        "Uma oportunidade única de servir com o coração e criar laços verdadeiros.",
      logo: <HandHeart className="w-12 h-12" />,
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center py-16 bg-white px-4 lg:px-0">
      <div className="w-full max-w-7xl">
        {/* Título */}
        <div className="mb-12">
          <h1 className="w-full text-center text-3xl md:text-4xl lg:text-5xl font-bold text-[#3E529D] px-4 mb-6">
            CARAVANAS PARA O SERTÃO: UMA JORNADA DE AMOR E TRANSFORMAÇÃO
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
                As <span className="font-semibold text-[#3E529D]">Caravanas para o Sertão</span> são muito mais do que uma visita, são <span className="font-semibold">5 dias de imersão e vivência profunda</span> junto à comunidade da <span className="font-semibold">Vila Esperança</span>, onde voluntários de todo o Brasil se conectam com uma realidade marcada por desafios, mas também por superação e esperança.
              </p>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed text-justify mb-4">
                Durante esse período, os participantes têm a oportunidade de <span className="font-semibold">conhecer de perto a transformação</span> promovida pelos projetos sociais e sentir, de forma direta, o impacto do <span className="font-semibold text-[#3E529D]">amor e da solidariedade</span> na vida das famílias atendidas.
              </p>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed text-justify mb-4">
                É uma experiência intensa e transformadora, marcada por:
              </p>
              <ul className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed space-y-2 mb-4 list-disc list-inside ml-4">
                <li><span className="font-semibold">Atendimentos médicos e odontológicos</span></li>
                <li><span className="font-semibold">Oficinas e atividades com crianças</span></li>
                <li><span className="font-semibold">Momentos de escuta, troca e conexão com toda a comunidade</span></li>
              </ul>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed text-justify">
                Cada caravana é uma oportunidade única de <span className="font-semibold text-[#3E529D]">servir com o coração</span>, criar laços verdadeiros e voltar para casa com um novo olhar sobre a vida, o outro e o mundo.
              </p>
            </div>
          </div>
        </div>

        {/* Cards de Informações */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {caravanasTag.map((item, index) => (
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
