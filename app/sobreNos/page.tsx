"use client";
import Image from "next/image";
import background from "@/app/public/SobreNosbackground.jpg";
import bismarck from "@/app/public/bismarckFoto.jpg";
import foto1 from "@/app/public/fotoSobreNós2.jpg";
import foto2 from "@/app/public/fotoSobreNós3.jpg";
import foto3 from "@/app/public/fotoSobreNós4.jpg";
import { ChevronsDown, Dot, Heart, Target, Building2, Earth } from "lucide-react";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const sectionSession1 = useRef<HTMLDivElement | null>(null);
  const sectionSession2 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.location.hash === "#missao") {
      sectionSession2.current?.scrollIntoView({ behavior: "smooth" });
    }

    gsap.fromTo(
      sectionSession1.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionSession1.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      sectionSession2.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionSession2.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="pt-16 lg:pt-0">
      <div className="min-h-screen">
        <div className="relative flex justify-center items-center min-h-screen px-4 py-8">
          <div className="w-full max-w-4xl aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/CnRH3ayds-Y?autoplay=1"
              title="Retratos de Esperança: Nossa Missão"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-2xl z-10"
            ></iframe>
          </div>
        </div>
        <span className="absolute z-10 bottom-6 w-full text-center flex justify-center animate-pulse text-sm lg:text-base">
          Rolar <ChevronsDown />
        </span>
        <Image
          alt="background"
          src={background}
          fill
          objectFit="cover"
          className="opacity-30"
        />
      </div>
      <div
        className="w-full flex flex-col items-center text-base lg:text-lg px-4"
        ref={sectionSession1}
      >
        <h1 className="w-full text-center text-xl lg:text-2xl font-semibold mt-10">
          Quem somos?
        </h1>
        <div className="w-full flex justify-center items-center">
          <div className="w-20 border-b-2 border-corRetratos mt-3"></div>
        </div>
        <div className="w-full lg:w-[80%] mt-16 flex flex-col items-center space-y-5 pb-10">
          <h2>Há 10 anos, nossa organização vem transformando vidas no sertão da Bahia, promovendo ações que fazem a diferença em comunidades que enfrentam graves desafios de vulnerabilidade social.</h2>
          <p className="text-justify">
            Somos uma organização não governamental (ONG) sem fins lucrativos, com a missão de contribuir para a transformação de vidas e despertar humanidade, amor, compaixão e empatia. Nosso trabalho é focado em ações comunitárias nas áreas de assistência social, educação e saúde, sempre com o compromisso de atender às necessidades mais urgentes daquelas que mais precisam.
            <br />
            <br />
            Nosso objetivo é promover o desenvolvimento sustentável e garantir condições dignas de vida, acesso à educação de qualidade, e cuidados de saúde para as comunidades atendidas, sempre com o coração aberto para a transformação e o cuidado com o próximo.
          </p>
          <div className="relative w-60 h-72 rounded-xl overflow-hidden border-2 border-corRetratos">
            <Image alt="background" src={bismarck} fill objectFit="cover" />
          </div>
          <p className="text-justify">
            Em 2015, o fotógrafo Bismark Araújo deu início a um projeto transformador, usando a arte fotográfica como uma poderosa ferramenta de mobilização social. Através de suas imagens, ele começou a retratar as histórias e realidades excludentes de crianças, adolescentes, adultos e idosos que vivem em situações de vulnerabilidade extrema no sertão da Bahia e outras regiões.
            <br />
            <br />
            Suas fotografias não são apenas imagens, elas são testemunhos vivos de lutas diárias, mas também de esperança e resistência. Com essas imagens, Bismark iniciou um movimento mais amplo, realizando palestras e exposições que buscavam mobilizar o espírito de solidariedade de pessoas, instituições públicas e privadas, incentivando todos a contribuir para a transformação social.
            <br />
            <br />
            O trabalho de Bismark não só denuncia a pobreza e a miséria, mas também convida à ação, combatendo desigualdades e promovendo um olhar mais humano e atento às questões sociais que precisam ser enfrentadas com urgência.
          </p>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 w-full lg:w-auto">
            <div className="relative w-full lg:w-60 h-72 rounded-xl overflow-hidden border-2 border-corRetratos">
              <Image alt="background" src={foto1} fill objectFit="cover" />
            </div>
            <div className="relative w-full lg:w-60 h-72 rounded-xl overflow-hidden border-2 border-corRetratos">
              <Image alt="background" src={foto3} fill objectFit="cover" />
            </div>
            <div className="relative w-full lg:w-60 h-72 rounded-xl overflow-hidden border-2 border-corRetratos">
              <Image alt="background" src={foto2} fill objectFit="cover" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full flex items-center justify-center pb-10 bg-corRetratos bg-opacity-20 text-base lg:text-lg px-4"
        ref={sectionSession2}
      >
        <div className="w-full lg:w-[80%] flex flex-col lg:flex-row gap-10 lg:gap-10" id="missao">
          <div className="flex flex-col flex-1 justify-center items-center">
            <h1 className="w-full text-center text-xl lg:text-2xl font-semibold mt-10 flex items-center justify-center">
              Missão <Target className="ml-2 text-corRetratos animate-pulse" />
            </h1>
            <div className="w-full flex justify-center items-center mb-12">
              <div className="w-10 border-b-2 border-corRetratos mt-3"></div>
            </div>
            <p className="text-justify">
              Nossa missão é contribuir para a construção de um mundo mais solidário e justo, por meio de ações de combate à pobreza, com o objetivo de garantir o direito à moradia digna e a formação humana integral das pessoas em situação de vulnerabilidade.
              <br />
              <br />
              Estamos comprometidos com a realização de ações socioeducativas e com a construção de moradias dignas, oferecendo oportunidades de transformação para populações que
              enfrentam risco social e exclusão. Acreditamos que, por meio da solidariedade e do apoio mútuo, podemos construir um futuro mais justo, humano e igualitário para todos.
            </p>
          </div>
          <div className="flex flex-col flex-1 justify-center items-center">
            <h1 className="w-full text-center text-xl lg:text-2xl font-semibold mt-10 flex items-center justify-center">
              Valores <Heart className="ml-2 text-corRetratos animate-pulse" />
            </h1>
            <div className="w-full flex justify-center items-center mb-12">
              <div className="w-10 border-b-2 border-corRetratos mt-3"></div>
            </div>
            <li className="grid grid-cols-2">
              <ul className="flex">
                <Dot />
                Respeito
              </ul>
              <ul className="flex">
                <Dot />
                Amor
              </ul>
              <ul className="flex">
                <Dot />
                Compaixão
              </ul>
              <ul className="flex">
                <Dot />
                Dignidade
              </ul>
              <ul className="flex">
                <Dot />
                Fraternidade
              </ul>
              <ul className="flex">
                <Dot />
                Solidariedade
              </ul>
              <ul className="flex">
                <Dot />
                Sustentabilidade
              </ul>
            </li>
          </div>
        </div>
      </div>
      <div
        className="w-full flex items-center justify-center pb-10 bg-opacity-20 text-base lg:text-lg px-4"
        ref={sectionSession2}
      >
        <div className="w-full lg:w-[80%] flex flex-col lg:flex-row gap-10 lg:gap-10" id="missao">
          <div className="flex flex-col flex-1 justify-center items-center">
            <h1 className="w-full text-center text-xl lg:text-2xl font-semibold mt-10 flex items-center justify-center">
              Estamos na Bahia nas cidades: <Building2 className="ml-2 text-corRetratos animate-pulse" />
            </h1>
            <div className="w-full flex justify-center items-center mb-12">
              <div className="w-10 border-b-2 border-corRetratos mt-3"></div>
            </div>
            <li className="grid grid-cols-2">
              <ul className="flex">
                <Dot />
                Canudos
              </ul>
              <ul className="flex">
                <Dot />
                Retirolândia
              </ul>
              <ul className="flex">
                <Dot />
                Valente
              </ul>
              <ul className="flex">
                <Dot />
                Jacobina
              </ul>
            </li>
          </div>
          <div className="flex flex-col flex-1 justify-center items-center">
            <h1 className="w-full text-center text-xl lg:text-2xl font-semibold mt-10 flex items-center justify-center">
              ODS <Earth className="ml-2 text-corRetratos animate-pulse" />
            </h1>
            <div className="w-full flex justify-center items-center mb-12">
              <div className="w-10 border-b-2 border-corRetratos mt-3"></div>
            </div>
            <li className="grid grid-cols-2">
              <ul className="flex">
                <Dot />
                Agenda 2030 (estamos de acordo com os objetivos da ONU)
              </ul>
              <ul className="flex">
                <Dot />
                Colaboramos e lutamos para um desenvolvimento mais Sustentável
              </ul>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}
