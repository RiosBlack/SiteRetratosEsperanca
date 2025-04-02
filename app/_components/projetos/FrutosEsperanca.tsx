import { Citrus, Leaf, Shrub, Sprout } from "lucide-react";
import Image from "next/image";
import foto from "@/app/public/fotosBackground2.jpg";

export default function FrutosEsperanca() {
  const frutosEsperancaTag = [
    {
      title: "Plantando o futuro cuidando do presente",
      logo: <Sprout className="w-10 h-10" />,
    },
    {
      title: "Trazer vida a partir daquilo que nos dá a vida",
      logo: <Shrub className="w-10 h-10" />,
    },
    {
      title:
        "Temos o objetivo de educar, ensinar, transformar e conscientizar sobre a importância da conservação da natureza por meio de práticas de reflorestamento em viveiros",
      logo: <Leaf className="w-10 h-10" />,
    },
    {
      title:
        "Atuamos com a construção de hortas comunitárias para o desenvolvimento sustentável das comunidades e reeducação alimentar com hábitos saudáveis",
      logo: <Citrus className="w-10 h-10" />,
    },
  ];

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center pb-6 bg-corRetratos bg-opacity-20">
      <div className="pt-6">
        <h1 className="w-full text-center text-2xl font-semibold">
          Frutos de Esperança
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
          <Image alt="Foto cozinha comunitária" src={foto} fill />
        </div>
      </div>
      <div className="w-[80%] mt-3 flex space-x-2">
        {frutosEsperancaTag.map((item, index) => (
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
