"use client";
import Image from "next/image";

import data1 from "@/app/public/empresasParceiras1.jpg";
import data2 from "@/app/public/empresasParceiras2.jpg";
import data3 from "@/app/public/empresasParceiras3.jpg";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ChevronsDown } from "lucide-react";
import { getData } from "@/app/api/notion";
import { DataNotion } from "@/app/_lib/notionTypes";

export default function Page() {
  const image1 = useRef<HTMLDivElement | null>(null);
  const image2 = useRef<HTMLDivElement | null>(null);
  const image3 = useRef<HTMLDivElement | null>(null);
  const logo = useRef<HTMLDivElement[]>([]);

  const handleMouseEnter1 = () => {
    gsap.to(image1.current, {
      scale: 1.1,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleMouseLeave1 = () => {
    gsap.to(image1.current, {
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleMouseEnter2 = () => {
    gsap.to(image2.current, {
      scale: 1.1,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleMouseLeave2 = () => {
    gsap.to(image2.current, {
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleMouseEnter3 = () => {
    gsap.to(image3.current, {
      scale: 1.1,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleMouseLeave3 = () => {
    gsap.to(image3.current, {
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleMouseEnter4 = (index: number) => {
    gsap.to(logo.current[index], {
      scale: 1.1,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleMouseLeave4 = (index: number) => {
    gsap.to(logo.current[index], {
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const [data, setData] = useState<DataNotion[]>([]);
  const [loading, setLoading] = useState(true);
  const sectionSession1 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const dados = await getData();
      return dados;
    };
    fetchData()
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });

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
  }, []);

  return (
    <div className="w-full h-auto flex flex-col items-center pt-16 lg:pt-0">
      <div className="w-full min-h-screen lg:h-screen flex flex-col items-center relative px-4 lg:px-0">
        <div className="w-full md:w-[90%] lg:w-[80%] h-[70vh] md:h-[90%] flex flex-col md:flex-row overflow-hidden gap-1 mt-12 md:mt-24">
          <div
            className="flex-1 relative rounded-xl overflow-hidden min-h-[200px] md:min-h-0"
            ref={image1}
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
          >
            <Image alt="foto1" src={data1} fill className="object-cover" />
          </div>
          <div className="flex flex-col flex-1 gap-1">
            <div
              className="relative flex-1 rounded-xl overflow-hidden min-h-[200px] md:min-h-0"
              ref={image2}
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
            >
              <Image alt="foto2" src={data2} fill className="object-cover" />
            </div>
            <div
              className="relative flex-1 rounded-xl overflow-hidden min-h-[200px] md:min-h-0"
              ref={image3}
              onMouseEnter={handleMouseEnter3}
              onMouseLeave={handleMouseLeave3}
            >
              <Image alt="foto3" src={data3} fill className="object-cover" />
            </div>
          </div>
        </div>
        <h1 className="text-sm md:text-lg absolute top-12 md:top-24 bg-white py-2 px-4 rounded-xl shadow-xl text-center max-w-[90%] md:max-w-none">
          Torne-se uma empresa amiga e transforme vidas! <br /> Juntos, podemos
          levar esperança e oportunidades para quem mais precisa.
        </h1>
        <span className="text-sm md:text-base text-center flex justify-center animate-pulse mt-4">
          Rolar <ChevronsDown />
        </span>
      </div>
      <div className="w-full md:w-[90%] lg:w-[80%] px-4 lg:px-0">
        <div>
          <h1 className="w-full text-center text-xl md:text-2xl font-semibold mt-10">
            Empresas Amigas
          </h1>
          <div className="w-full flex justify-center items-center">
            <div className="w-20 border-b-2 border-corRetratos mt-3"></div>
          </div>
        </div>
        <div className="w-full mt-8" ref={sectionSession1}>
          {loading ? (
            <div className="w-full h-10 flex justify-center items-center">
              Carregando...
              <span className="w-6 h-6 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></span>
            </div>
          ) : null}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center">
            {Array.isArray(data) &&
              data.map((item, index) => (
                <div
                  key={item.Title}
                  className="mb-4 bg-white border-2 border-slate-100 p-2 w-full max-w-64 h-40 rounded-2xl shadow-2xl flex flex-col justify-center items-center"
                  ref={(el) => {
                    if (el) {
                      logo.current[index] = el;
                    }
                  }}
                  onMouseEnter={() => handleMouseEnter4(index)}
                  onMouseLeave={() => handleMouseLeave4(index)}
                >
                  {item.Image && (
                    <Image
                      src={item.Image}
                      alt={item.Title || ""}
                      className="w-32 h-32 object-cover"
                      width={100}
                      height={100}
                    />
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
