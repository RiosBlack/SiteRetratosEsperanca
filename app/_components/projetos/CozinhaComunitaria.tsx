import fotoCozinha from "@/app/public/arteEducacaoFoto.png";
import { Beef, House, Salad, ThumbsUp } from "lucide-react";
import Image from "next/image";

export default function CozinhaComunitaria() {
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
    {
      title: "Mais de 140 refeições diárias servidas na Vila Esperança;",
      logo: <House className="w-10 h-10" />,
    },
  ];

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center pb-6">
      <div className="pt-6">
        <h1 className="w-full text-center text-2xl font-semibold">
          Cozinha Comunitária
        </h1>
        <div className="w-full flex justify-center items-center">
          <div className="w-20 border-b-2 border-corRetratos mt-3"></div>
        </div>
      </div>
      <div className=" w-[80%] h-full flex mt-5 shadow-xl">
        <div className="flex-1 border-2 rounded-l-xl border-corRetratos">
          texto falando sobre
        </div>
        <div className="flex-1 relative rounded-r-xl overflow-hidden">
          <Image alt="Foto cozinha comunitária" src={fotoCozinha} fill />
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
