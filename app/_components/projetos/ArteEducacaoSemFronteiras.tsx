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
      logo: <Book className="w-10 h-10 text-corRetratos" />,
    },
    {
      title:
        "Com acesso a uma educação de qualidade as crianças têm a possibilidade de sonhar e acreditar em um futuro melhor.",
      logo: <BookHeart className="w-10 h-10" />,
    },
    {
      title:
        "Oferecemos reforço escolar, aulas de música, de capoeira, práticas de esporte, oficinas de artes entre outros.",
      logo: <Music className="w-10 h-10 text-corRetratos" />,
    },
    {
      title:
        "Hoje 3 moradores da comunidade estão cursando o ensino superior, com o apoio do projeto. Eles são os primeiros de uma geração a ingressarem em um universidade.",
      logo: <GraduationCap className="w-10 h-10" />,
    },
  ];

  return (
    <div className="w-full min-h-screen lg:h-screen flex flex-col justify-center items-center pb-6 px-4 lg:px-0">
      <div className="pt-6">
        <h1 className="w-full text-center text-xl lg:text-2xl font-semibold px-4">
          Arte e Educação Sem Fronteiras: Onde o Conhecimento Encontra a Esperança
        </h1>
        <div className="w-full flex justify-center items-center">
          <div className="w-20 border-b-2 border-corRetratos mt-3"></div>
        </div>
      </div>
      <div className="w-full lg:w-[80%] min-h-[60vh] lg:h-[90vh] grid grid-cols-1 lg:flex mt-5 shadow-xl">
        <div className="flex-1 border-2 rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none border-corRetratos p-4 text-justify flex justify-center items-start text-sm lg:text-base bg-corRetratos/20">
          Na Vila Esperança, acreditamos que a educação é a chave para quebrar ciclos de pobreza e abrir portas para um futuro com mais oportunidades. Por isso, o projeto Arte e Educação Sem Fronteiras atua diariamente com ações educativas que transformam vidas desde a infância até a fase adulta.
          <br />
          Oferecemos reforço escolar contínuo para crianças, jovens e adultos, promovendo o acesso ao aprendizado de qualidade, um direito básico muitas vezes negado em comunidades vulneráveis.
          <br />
          Além das aulas de reforço, o projeto também oferece:
          <br />
          - Aulas de música
          <br />
          - Capoeira e práticas esportivas
          <br />
          - Oficinas de arte e atividades culturais
          <br />
          Essas atividades não apenas fortalecem o desenvolvimento acadêmico, mas também trabalham a autoestima, disciplina e criatividade dos participantes.
          <br />
          Hoje, celebramos uma grande conquista: um morador da Vila Esperança ingressou no ensino superior, o primeiro de sua geração a entrar na universidade, graças ao apoio contínuo do projeto. Um exemplo vivo de que com educação, sonhos se tornam realidade.
          Através da arte, do ensino e da inclusão, seguimos rompendo barreiras e semeando um futuro de possibilidades.
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
