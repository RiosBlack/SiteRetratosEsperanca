import foto from "@/app/public/cinema.jpeg";
import { House, StepForward } from "lucide-react";
import Image from "next/image";

export default function CineEsperanca() {
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
    <div className="w-full h-screen flex flex-col justify-center items-center pb-6">
      <div className="pt-6">
        <h1 className="w-full text-center text-2xl font-semibold">
          Cine Esperança: Luz, Cultura e Transformação
        </h1>
        <div className="w-full flex justify-center items-center">
          <div className="w-20 border-b-2 border-corRetratos mt-3"></div>
        </div>
      </div>
      <div className=" w-[80%] h-full flex mt-5 shadow-xl">
        <div className="flex-1 border-2 rounded-l-xl border-corRetratos p-4 text-justify flex justify-center items-start">
          O Cine Esperança é um projeto de cinema social que leva muito mais do que filmes às comunidades: ele promove educação, cultura, lazer e integração para crianças do sertão baiano.
          <br />
          Semanalmente, mais de 50 crianças se reúnem na praça de comunidades rurais de Jacobina (BA) para assistir a filmes educativos, pensados especialmente para inspirar, ensinar e entreter.
          <br />
          Em regiões com pouco ou nenhum acesso a espaços culturais, o Cine Esperança se torna um momento mágico, uma experiência coletiva de aprendizado e encantamento que amplia horizontes e alimenta sonhos.
          <br />
          Cultura que transforma. Educação que inspira. Esperança que se compartilha.
        </div>
        <div className="flex-1 relative rounded-r-xl overflow-hidden border-2 border-corRetratos">
          <Image alt="Foto cozinha comunitária" src={foto} fill />
        </div>
      </div>
      <div className="w-[80%] mt-3 flex space-x-2">
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
