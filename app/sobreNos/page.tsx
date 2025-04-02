"use client";
import Image from "next/image";
import background from "@/app/public/SobreNosbackground.jpg";
import bismarck from "@/app/public/bismarckFoto.jpg";
import { ChevronsDown, Dot, Heart, Target } from "lucide-react";
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
    <div>
      <div className="h-screen">
        <div className="relative flex justify-center items-center h-screen">
          <iframe
            width="1041"
            height="526"
            src="https://www.youtube.com/embed/CnRH3ayds-Y?autoplay=1"
            title="Retratos de Esperança: Nossa Missão"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-2xl z-10"
          ></iframe>
        </div>
        <span className="absolute z-10 bottom-6 w-full text-center flex justify-center animate-pulse">
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
        className="w-full flex flex-col items-center h-screen text-lg"
        ref={sectionSession1}
      >
        <h1 className="w-full text-center text-2xl font-semibold mt-10">
          Nossa História
        </h1>
        <div className="w-full flex justify-center items-center">
          <div className="w-20 border-b-2 border-corRetratos mt-3"></div>
        </div>
        <div className="w-[80%] mt-16 flex flex-col items-center space-y-5">
          <h2>Há 7 anos transformando vidas no sertão da Bahia.</h2>
          <p className="text-justify">
            Somos uma organização não governamental sem fins lucrativos com a
            finalidade de contribuir com a transformação de vidas e despertar a
            humanidade, o amor, a compaixão e empatia ao próximo por meio do
            desenvolvimento de ações comunitárias nas áreas da assistência
            social, educação e saúde em comunidades com situação de
            vulnerabilidade social.
          </p>
          <div className="relative w-60 h-72 rounded-xl overflow-hidden border-2 border-corRetratos">
            <Image alt="background" src={bismarck} fill objectFit="cover" />
          </div>
          <p className="text-justify">
            Em 2015, o fotógrafo Bismark Araújo, por meio da arte fotográfica,
            passa a retratar histórias e realidades excludentes de crianças,
            adolescentes, adultos e idosos. Por meio de palestras, passa a
            mobilizar o espírito de solidariedade de pessoas, instituições
            públicas e privadas para contribuírem com a transformação social,
            combatendo assim, a pobreza e a miséria.
          </p>
        </div>
      </div>
      <div
        className="w-full flex items-center justify-center h-[50vh] bg-corRetratos bg-opacity-20 text-lg"
        ref={sectionSession2}
      >
        <div className=" w-[80%] flex space-x-10">
          <div className="flex flex-col flex-1 justify-center items-center">
            <h1 className="w-full text-center text-2xl font-semibold mt-10 flex items-center justify-center">
              Missão <Target className="ml-2 text-corRetratos animate-pulse" />
            </h1>
            <div className="w-full flex justify-center items-center mb-12">
              <div className="w-10 border-b-2 border-corRetratos mt-3"></div>
            </div>
            <p className="text-justify">
              Contribuir com a construção de um mundo mais solidário e justo,
              por meio de ações de combate à pobreza, visando garantir o direito
              à moradia digna e formação humana integral. <br /> Contribuir com
              a construção de um mundo mais solidário e justo, por meio de ações
              socioeducativas e construção de moradias dignas para populações em
              situação de vulnerabilidade e risco social.
            </p>
          </div>
          <div className="flex flex-col flex-1 justify-center items-center">
            <h1 className="w-full text-center text-2xl font-semibold mt-10 flex items-center justify-center">
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
    </div>
  );
}
