import fotoCine1 from "@/app/public/fotoCaravana1.jpg";
import fotoCine2 from "@/app/public/fotoCaravana2.jpg";
import fotoCine3 from "@/app/public/fotoCaravana3.jpg";
import { House, StepForward } from "lucide-react";
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
  const cineTag = [
    {
      title:
        "Exibição de filmes educativos para as crianças levando cultura, educação, lazer e integração.",
      logo: <StepForward className="w-10 h-10 text-corRetratos" />,
    },
    {
      title:
        "Mais de 50 crianças se reúnem semanalmente na praça de comunidades rurais de Jacobina.",
      logo: <House className="w-10 h-10" />,
    },
  ];

  return (
    <div className="w-full min-h-screen lg:h-screen flex flex-col justify-center items-center pb-6 px-4 lg:px-0 bg-corRetratos/20">
      <div className="pt-6">
        <h1 className="w-full text-center text-xl lg:text-2xl font-semibold px-4">
          Caravanas para o Sertão: Uma Jornada de Amor e Transformação
        </h1>
        <div className="w-full flex justify-center items-center">
          <div className="w-20 border-b-2 border-corRetratos mt-3"></div>
        </div>
      </div>
      <div className="w-full lg:w-[80%] min-h-[60vh] lg:h-[90vh] grid grid-cols-1 lg:flex mt-5 shadow-xl">
        <div className="flex-1 border-2 rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none border-corRetratos p-4 text-justify flex justify-center items-start text-sm lg:text-base bg-white">
          As Caravanas para o Sertão são muito mais do que uma visita, são 5 dias de imersão e vivência profunda junto à comunidade da Vila Esperança, onde voluntários de todo o Brasil se conectam com uma realidade marcada por desafios, mas também por superação e esperança.
          <br />
          Durante esse período, os participantes têm a oportunidade de conhecer de perto a transformação promovida pelos projetos sociais e sentir, de forma direta, o impacto do amor e da solidariedade na vida das famílias atendidas.
          <br />
          É uma experiência intensa e transformadora, marcada por:
          <br />
          - Atendimentos médicos e odontológicos
          <br />
          - Oficinas e atividades com crianças
          <br />
          - Momentos de escuta, troca e conexão com toda a comunidade
          <br />
          Cada caravana é uma oportunidade única de servir com o coração, criar laços verdadeiros e voltar para casa com um novo olhar sobre a vida, o outro e o mundo.
        </div>
        <div
          className="flex-1 relative rounded-b-xl lg:rounded-r-xl lg:rounded-bl-none overflow-hidden border-2 border-corRetratos min-h-[300px]"
          ref={imageRef}
        >
          <Image alt="Foto do carrossel" src={images[currentImageIndex]} fill objectFit="cover" />
        </div>
      </div>
      <div className="w-full lg:w-[80%] mt-3 grid grid-cols-1 lg:flex lg:space-x-2 gap-4 lg:gap-0 px-4 lg:px-0">
        {cineTag.map((item, index) => (
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
