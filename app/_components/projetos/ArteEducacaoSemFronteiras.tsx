import { Book, BookHeart, GraduationCap, Music } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import foto from "@/app/public/arteEducacao1.webp";
import foto1 from "@/app/public/arteEducacaoFoto2.jpg";
import foto2 from "@/app/public/arteEducacaoFoto3.jpg";
import foto3 from "@/app/public/arteEducacao4.jpg";
import foto4 from "@/app/public/arteEducacao5.jpg";

export default function ArteEducacaoSemFronteiras() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [foto, foto1, foto2, foto3, foto4];
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
        "Diariamente oferecemos reforço escolar para crianças, jovens e adultos da Vila Esperança.",
      logo: <Book className="w-12 h-12 text-white" />,
    },
    {
      title:
        "Com acesso a uma educação de qualidade as crianças têm a possibilidade de sonhar e acreditar em um futuro melhor.",
      logo: <BookHeart className="w-12 h-12 text-white" />,
    },
    {
      title:
        "Oferecemos reforço escolar, aulas de música, de capoeira, práticas de esporte, oficinas de artes entre outros.",
      logo: <Music className="w-12 h-12 text-white" />,
    },
    {
      title:
        "Hoje 3 moradores da comunidade estão cursando o ensino superior, com o apoio do projeto. Eles são os primeiros de uma geração a ingressarem em uma universidade.",
      logo: <GraduationCap className="w-12 h-12 text-white" />,
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center py-16 bg-[#3E529D] px-4 lg:px-0">
      <div className="w-full max-w-7xl">
        {/* Título */}
        <div className="mb-12">
          <h1 className="w-full text-center text-3xl md:text-4xl lg:text-5xl font-bold text-white px-4 mb-6">
            ARTE E EDUCAÇÃO SEM FRONTEIRAS: ONDE O CONHECIMENTO ENCONTRA A ESPERANÇA
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
                Na <span className="font-semibold">Vila Esperança</span>, acreditamos que <span className="font-semibold">a educação é a chave</span> para quebrar ciclos de pobreza e abrir portas para um futuro com mais oportunidades. Por isso, o projeto <span className="font-semibold">Arte e Educação Sem Fronteiras</span> atua diariamente com ações educativas que transformam vidas desde a infância até a fase adulta.
              </p>
              <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed text-justify mb-4">
                Oferecemos <span className="font-semibold text-white">reforço escolar contínuo</span> para crianças, jovens e adultos, promovendo o acesso ao aprendizado de qualidade, um direito básico muitas vezes negado em comunidades vulneráveis.
              </p>
              <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed text-justify mb-4">
                Além das aulas de reforço, o projeto também oferece:
              </p>
              <ul className="text-base md:text-lg lg:text-xl text-white leading-relaxed space-y-2 mb-4 list-disc list-inside ml-4">
                <li><span className="font-semibold">Aulas de música</span></li>
                <li><span className="font-semibold">Capoeira e práticas esportivas</span></li>
                <li><span className="font-semibold">Oficinas de arte e atividades culturais</span></li>
              </ul>
              <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed text-justify mb-4">
                Essas atividades não apenas fortalecem o desenvolvimento acadêmico, mas também trabalham a <span className="font-semibold">autoestima, disciplina e criatividade</span> dos participantes.
              </p>
              <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed text-justify">
                Hoje, celebramos uma grande conquista: <span className="font-semibold text-white">3 moradores da Vila Esperança estão cursando o ensino superior</span>, os <span className="font-semibold">primeiros de sua geração a ingressarem em uma universidade</span>, graças ao apoio contínuo do projeto. Um exemplo vivo de que <span className="font-semibold">com educação, sonhos se tornam realidade</span>. Através da arte, do ensino e da inclusão, seguimos rompendo barreiras e semeando um futuro de possibilidades.
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
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {arteTag.map((item, index) => (
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
