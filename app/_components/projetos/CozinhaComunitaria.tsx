import fotoCozinha from "@/app/public/fotoCozinhaComunitaria1.webp";
import fotoCozinha2 from "@/app/public/fotoCozinhaComunitaria2.webp";
import fotoCozinha3 from "@/app/public/fotoCozinhaComunitaria3.webp";
import { Beef, Salad, ThumbsUp } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function CozinhaComunitaria() {
  const images = [fotoCozinha, fotoCozinha2, fotoCozinha3];
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

  const cozinhaComunitariaTag = [
    {
      title: "Mais de 140 refeições diárias servidas na Vila Esperança",
      logo: <Beef className="w-12 h-12 text-white" />,
    },
    {
      title: "Muitos não tinham acesso a legumes e frutas",
      logo: <Salad className="w-12 h-12 text-white" />,
    },
    {
      title:
        "Oferecemos uma alimentação de qualidade para as famílias atendidas",
      logo: <ThumbsUp className="w-12 h-12 text-white" />,
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center py-16 bg-[#3E529D] px-4 lg:px-0">
      <div className="w-full max-w-7xl">
        {/* Título */}
        <div className="mb-12">
          <h1 className="w-full text-center text-3xl md:text-4xl lg:text-5xl font-bold text-white px-4 mb-6">
            COZINHA COMUNITÁRIA: ALIMENTANDO CORPOS E CORAÇÕES
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
                Na <span className="font-semibold">Vila Esperança</span>, a transformação vai além da moradia, ela chegou também à mesa. Através da <span className="font-semibold">Cozinha Comunitária</span>, garantíamos <span className="font-semibold text-white">mais de 140 refeições diárias</span> para as famílias atendidas, promovendo saúde, dignidade e cuidado em cada prato.
              </p>
              <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed text-justify mb-4">
                Antes do projeto, <span className="font-semibold">muitas dessas famílias não tinham acesso regular a legumes, frutas ou refeições completas</span>. Hoje, oferecemos uma alimentação equilibrada, preparada com carinho e pensada para atender as necessidades nutricionais de crianças.
              </p>
              <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed text-justify mb-4">
                Oferecemos <span className="font-semibold">alimentos frescos e nutritivos</span>, contribuindo para o bem-estar e o desenvolvimento saudável de todos.
              </p>
              <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed text-justify">
                A Cozinha Comunitária é mais do que um espaço de alimentação, é um lugar de <span className="font-semibold">acolhimento, partilha e esperança</span>.
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
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {cozinhaComunitariaTag.map((item, index) => (
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
