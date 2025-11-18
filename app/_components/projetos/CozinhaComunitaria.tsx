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
    <div className="w-full h-screen flex flex-col justify-center items-center pb-6">
      <div className="pt-6">
        <h1 className="w-full text-center text-2xl font-semibold">
          Cozinha Comunitária: Alimentando Corpos e Corações na Vila Esperança
        </h1>
        <div className="w-full flex justify-center items-center">
          <div className="w-20 border-b-2 border-corRetratos mt-3"></div>
        </div>
      </div>
      <div className=" w-[80%] h-full flex mt-5 shadow-xl">
        <div className="flex-1 border-2 rounded-l-xl border-corRetratos p-4 text-justify flex justify-center items-start">
          Na Vila Esperança, a transformação vai além da moradia, ela chegou também à mesa. Através da Cozinha Comunitária, garantíamos mais de 140 refeições diárias para as famílias atendidas, promovendo saúde, dignidade e cuidado em cada prato.
          <br />
          Antes do projeto, muitas dessas famílias não tinham acesso regular a legumes, frutas ou refeições completas. Hoje, oferecemos uma alimentação equilibrada, preparada com carinho e pensada para atender as necessidades nutricionais de crianças.
          <br />
          Oferecemos alimentos frescos e nutritivos, contribuindo para o bem-estar e o desenvolvimento saudável de todos.
          <br />
          A Cozinha Comunitária é mais do que um espaço de alimentação, é um lugar de acolhimento, partilha e esperança.
        </div>
        <div
          className="flex-1 relative rounded-r-xl overflow-hidden border-2 border-corRetratos"
          ref={imageRef}
        >
          <Image alt="Foto do carrossel" src={images[currentImageIndex]} fill objectFit="cover" />
        </div>
      </div>
      <div className="w-[80%] mt-3 flex space-x-2">
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
