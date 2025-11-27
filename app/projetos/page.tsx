"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import villa from "@/app/public/fotoSobreNós1.jpeg";

import { ChevronsDown } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CozinhaComunitaria from "../_components/projetos/CozinhaComunitaria";
import FrutosEsperanca from "../_components/projetos/FrutosEsperanca";
import CineEsperanca from "../_components/projetos/CineEsperanca";
import GeracaoRenda from "../_components/projetos/GeracaoRenda";
import ArteEducacaoSemFronteiras from "../_components/projetos/ArteEducacaoSemFronteiras";
import VilaEsperanca from "../_components/projetos/VilaEsperanca";
import Caravanas from "../_components/projetos/Caravanas";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const session1 = useRef<HTMLDivElement | null>(null);
  const session2 = useRef<HTMLDivElement | null>(null);
  const session3 = useRef<HTMLDivElement | null>(null);
  const session4 = useRef<HTMLDivElement | null>(null);
  const session5 = useRef<HTMLDivElement | null>(null);
  const session6 = useRef<HTMLDivElement | null>(null);
  const session7 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.location.hash === "#frutosEsperanca") {
      session3.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (window.location.hash === "#CineEsperanca") {
      session4.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (window.location.hash === "#GeracaoRenda") {
      session5.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (window.location.hash === "#ArteEducacaoSemFronteiras") {
      session6.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (window.location.hash === "#VilaEsperanca") {
      session7.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (window.location.hash === "#Caravanas") {
      session7.current?.scrollIntoView({ behavior: "smooth" });
    }
    gsap.fromTo(
      session1.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
      }
    );

    gsap.fromTo(
      session2.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: session2.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      session3.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: session3.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      session4.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: session4.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      session5.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: session5.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      session6.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: session6.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="pt-16 lg:pt-0">
      {/* Hero Section */}
      <div className="w-full h-screen relative flex items-center justify-center" ref={session1}>
        <Image
          alt="background projetos"
          src={villa}
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-[#3E529D]/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            PROJETOS
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white mb-12 max-w-3xl drop-shadow-lg leading-relaxed">
            Conheça nossas iniciativas que transformam vidas e semeiam esperança
          </p>
          <span className="absolute bottom-0 animate-bounce text-white cursor-pointer">
            <ChevronsDown size={40} />
          </span>
        </div>
      </div>
      <div ref={session7}>
        <VilaEsperanca />
      </div>
      <div ref={session2}>
        <CozinhaComunitaria />
      </div>
      <div ref={session3}>
        <FrutosEsperanca />
      </div>
      <div ref={session4}>
        <CineEsperanca />
      </div>
      <div ref={session5}>
        <GeracaoRenda />
      </div>
      <div ref={session6}>
        <ArteEducacaoSemFronteiras />
      </div>
      <div ref={session7}>
        <Caravanas />
      </div>
    </div>
  );
}
