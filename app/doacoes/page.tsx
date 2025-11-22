"use client";
import Image from "next/image";
import foto from "@/app/public/fotoBacgroundDoacoes.jpg";
import { ChevronsDown } from "lucide-react";
import CardDoacoes from "../_components/doacoes/cardDoacoes";
import foto2 from "@/app/public/bismarckFoto.jpg";
import qrcode from "@/app/public/qrCode.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "../_components/ui/button";
import Link from "next/link";

export default function Page() {
  const cardsData = [
    {
      image: foto2,
      title: "ALIMENTO",
      desc: "Ajude-nos a levar alimento para milhares de pessoas que ainda passam fome no sertão.",
      valor: "50,00",
    },
    {
      image: foto2,
      title: "CONSTRUÇÃO DE CASAS",
      desc: "6 a cada 10 pessoas vivem em casas de taipa, sem banheiro e água encanada.",
      valor: "150,00",
    },
    {
      image: foto2,
      title: "CONSTRUÇÃO DE CASAS",
      desc: "6 a cada 10 pessoas vivem em casas de taipa, sem banheiro e água encanada.",
      valor: "150,00",
    },
    {
      image: foto2,
      title: "CONSTRUÇÃO DE CASAS",
      desc: "6 a cada 10 pessoas vivem em casas de taipa, sem banheiro e água encanada.",
      valor: "150,00",
    },
  ];

  const card = useRef<HTMLDivElement[]>([]);
  const sectionSession1 = useRef<HTMLDivElement | null>(null);
  const sectionSession2 = useRef<HTMLDivElement | null>(null);

  const scrollToSection2 = () => {
    sectionSession2.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleMouseEnter4 = (index: number) => {
    gsap.to(card.current[index], {
      scale: 1.1,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleMouseLeave4 = (index: number) => {
    gsap.to(card.current[index], {
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  useEffect(() => {
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
      <div className="relative w-full h-[95vh]">
        <Image
          alt="background"
          src={foto}
          fill
          objectFit="cover"
          className=""
        />
        <div className="w-full flex justify-center">
          <h2 className="absolute bottom-10 lg:bottom-20 text-lg md:text-2xl px-3 py-2 rounded-xl bg-white text-center">
            Seu gesto de solidariedade pode transformar vidas – doe e faça a
            diferença!
          </h2>
          <span className="z-10 absolute bottom-1 animate-pulse bg-white flex p-2 rounded-xl text-sm md:text-base">
            Rolar <ChevronsDown />
          </span>
        </div>
      </div>
      <div
        className="w-full min-h-screen lg:h-screen flex flex-col items-center px-4 lg:px-0"
        ref={sectionSession1}
      >
        <h1 className="w-full text-center text-xl md:text-2xl font-semibold mt-10">
          Como Doar?
        </h1>
        <div className="w-full flex justify-center items-center">
          <div className="w-20 border-b-2 border-corRetratos mt-3"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full md:w-[90%] lg:w-[80%] gap-4 mt-10">
          {cardsData.map((item, index) => (
            <div
              ref={(el) => {
                if (el) {
                  card.current[index] = el;
                }
              }}
              key={item.title}
              onMouseEnter={() => handleMouseEnter4(index)}
              onMouseLeave={() => handleMouseLeave4(index)}
            >
              <CardDoacoes
                desc={item.desc}
                image={item.image}
                title={item.title}
                valor={item.valor}
                onDonateClick={scrollToSection2}
              />
            </div>
          ))}
        </div>
      </div>
      <div
        className="w-full bg-corRetratos bg-opacity-20 px-4 lg:px-0"
        ref={sectionSession2}
      >
        <h1 className="w-full text-center text-xl md:text-2xl font-semibold pt-10">
          Conta
        </h1>
        <div className="w-full flex justify-center items-center">
          <div className="w-20 border-b-2 border-corRetratos mt-3"></div>
        </div>
        <div className="flex flex-col md:flex-row w-full">
          <div className="flex flex-1 justify-center items-center my-10 md:my-20">
            <Image
              src={qrcode}
              alt="qrCode Conta"
              width={250}
              height={250}
              className="w-full max-w-[300px]"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center text-base md:text-2xl space-y-3 px-4 md:px-0">
            <h1>
              <span className="font-semibold">Pix:</span> teste@teste.com.br
            </h1>
            <p>
              <span className="font-semibold">Agência:</span> xxxx-x
            </p>
            <p>
              <span className="font-semibold">Conta:</span> xxxxx-xx
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col items-center text-sm md:text-xl lg:text-2xl pb-10 text-center break-words px-4">
          <h2>
            Razão social: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </h2>
          <h2>Cnpj: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</h2>
        </div>
      </div>
      <div className="px-4 lg:px-0 flex flex-col items-center justify-center space-y-4">
        <h1 className="w-full text-center text-xl md:text-2xl font-semibold pt-10">
          Outras Formas de ajudar
        </h1>
        <Link href={"/contato"}>
          <Button>
            Clique aqui
          </Button>
        </Link>
        <div className="w-full flex justify-center items-center pb-10">
          <div className="w-20 border-b-2 border-corRetratos mt-3"></div>
        </div>
      </div>
    </div>
  );
}
