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
      logo: <Beef className="w-10 h-10 text-corRetratos" />,
    },
    {
      title: "Muitos não tinha acesso a legumes e frutas",
      logo: <Salad className="w-10 h-10" />,
    },
    {
      title:
        "Oferecemos uma alimentação de qualidade para as famílias atendidas",
      logo: <ThumbsUp className="w-10 h-10 text-corRetratos" />,
    },
  ];

  return (
    <div className="w-full min-h-screen lg:h-screen flex flex-col justify-center items-center pb-6 px-4 lg:px-0">
      <div className="pt-6">
        <h1 className="w-full text-center text-xl lg:text-2xl font-semibold px-4">
          Cozinha Comunitária: Alimentando Corpos e Corações na Vila Esperança
        </h1>
        <div className="w-full flex justify-center items-center">
          <div className="w-20 border-b-2 border-corRetratos mt-3"></div>
        </div>
      </div>
      <div className="w-full lg:w-[80%] min-h-[60vh] lg:h-[90vh] grid grid-cols-1 lg:flex mt-5 shadow-xl">
        <div className="flex-1 border-2 rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none border-corRetratos p-4 text-justify flex justify-center items-start text-sm lg:text-base bg-corRetratos/20">
          Na Vila Esperança, a transformação vai além da moradia, ela chegou também à mesa. Através da Cozinha Comunitária, garantíamos mais de 140 refeições diárias para as famílias atendidas, promovendo saúde, dignidade e cuidado em cada prato.
          <br />
          Antes do projeto, muitas dessas famílias não tinham acesso regular a legumes, frutas ou refeições completas. Hoje, oferecemos uma alimentação equilibrada, preparada com carinho e pensada para atender as necessidades nutricionais de crianças.
          <br />
          Oferecemos alimentos frescos e nutritivos, contribuindo para o bem-estar e o desenvolvimento saudável de todos.
          <br />
          A Cozinha Comunitária é mais do que um espaço de alimentação, é um lugar de acolhimento, partilha e esperança.
        </div>
        <div
          className="flex-1 relative rounded-b-xl lg:rounded-r-xl lg:rounded-bl-none overflow-hidden border-2 border-corRetratos min-h-[300px]"
          ref={imageRef}
        >
          <Image alt="Foto do carrossel" src={images[currentImageIndex]} fill objectFit="cover" />
        </div>
      </div>
      <div className="w-full lg:w-[80%] mt-3 grid grid-cols-1 lg:flex lg:space-x-2 gap-4 lg:gap-0 px-4 lg:px-0">
        {cozinhaComunitariaTag.map((item, index) => (
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
