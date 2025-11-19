"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import foto1 from "@/app/public/fotosBackground1.png";
import foto2 from "@/app/public/fotosBackground2.jpg";
import foto3 from "@/app/public/fotosBackground3.jpg";
import foto4 from "@/app/public/fotosBackground4.jpg";
import foto5 from "@/app/public/fotosBackground5.jpg";

export default function Section1() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [foto1, foto2, foto3, foto4, foto5];

  // Carrossel automático apenas para mobile
  useEffect(() => {
    // Verifica se está no cliente e se é mobile
    if (typeof window === "undefined") return;
    
    const checkMobile = () => window.innerWidth < 1024; // lg breakpoint
    if (!checkMobile()) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function animation(e: any) {
    const cards = document.querySelectorAll(".card");

    function reset() {
      cards.forEach((card) => {
        card.classList.remove("animation");
        card.classList.add("animationClose");
      });
    }

    if (!e.target.closest(".card")) return;
    reset();
    e.target.parentElement.classList.add("animation");
    e.target.parentElement.classList.remove("animationClose");
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function resetAnimation(e: any) {
    e.target.parentElement.classList.remove("animation");
    e.target.parentElement.classList.add("animationClose");
  }

  return (
    <div className="h-[100vh] grid place-items-center">
      {/* Desktop - mantém como estava */}
      <div className="hidden lg:flex gap-[0.15rem] p-[0.15rem]">
        <div
          className="card flex-1 h-[100vmin] cursor-pointer overflow-hidden transition delay-700"
          onMouseEnter={(event) => animation(event)}
          onMouseLeave={(event) => resetAnimation(event)}
        >
          <Image
            alt=""
            src={foto1}
            width={500}
            height={500}
            className="w-[100%] h-[100%] object-cover"
          />
        </div>
        <div
          className="card flex-1 h-[100vmin] cursor-pointer overflow-hidden transition delay-700"
          onMouseEnter={(event) => animation(event)}
          onMouseLeave={(event) => resetAnimation(event)}
        >
          <Image
            alt=""
            src={foto2}
            width={500}
            height={500}
            className="w-[100%] h-[100%] object-cover"
          />
        </div>
        <div
          className="card flex-1 h-[100vmin] cursor-pointer overflow-hidden transition delay-700"
          onMouseEnter={(event) => animation(event)}
          onMouseLeave={(event) => resetAnimation(event)}
        >
          <Image
            alt=""
            src={foto3}
            width={500}
            height={500}
            className="w-[100%] h-[100%] object-cover"
          />
        </div>
        <div
          className="card flex-1 h-[100vmin] cursor-pointer overflow-hidden transition delay-700"
          onMouseEnter={(event) => animation(event)}
          onMouseLeave={(event) => resetAnimation(event)}
        >
          <Image
            alt=""
            src={foto4}
            width={500}
            height={500}
            className="w-[100%] h-[100%] object-cover"
          />
        </div>
        <div
          className="card flex-1 h-[100vmin] cursor-pointer overflow-hidden transition delay-700"
          onMouseEnter={(event) => animation(event)}
          onMouseLeave={(event) => resetAnimation(event)}
        >
          <Image
            alt=""
            src={foto5}
            width={500}
            height={500}
            className="w-[100%] h-[100%] object-cover"
          />
        </div>
      </div>

      {/* Mobile - Carrossel em tela cheia */}
      <div className="lg:hidden w-full h-full relative overflow-hidden">
        <div className="w-full h-full relative">
          <Image
            alt="Carrossel"
            src={images[currentImageIndex]}
            fill
            className="object-cover transition-opacity duration-500"
            priority
          />
        </div>
        {/* Indicadores de slide */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImageIndex ? "bg-white w-6" : "bg-white/50"
              }`}
              aria-label={`Ir para imagem ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
