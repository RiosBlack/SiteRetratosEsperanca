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
  const sectionSession3 = useRef<HTMLDivElement | null>(null);

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

    gsap.fromTo(
      sectionSession3.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionSession3.current,
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
        <div className="relative flex justify-center items-center min-h-screen px-4 py-8 z-10">
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
              className="rounded-2xl"
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
          className="opacity-30 z-0"
        />
      </div>
      {/* Seção: Quem Somos */}
      <div
        className="w-full flex flex-col items-center text-base lg:text-lg px-4 bg-white py-16"
        ref={sectionSession1}
      >
        <div className="w-full max-w-6xl">
          <h1 className="w-full text-center text-3xl md:text-4xl lg:text-5xl font-bold text-[#3E529D] mb-6">
            QUEM SOMOS?
          </h1>
          <div className="w-full flex justify-center items-center mb-12">
            <div className="w-32 border-b-4 border-[#3E529D]"></div>
          </div>

          <div className="bg-[#3E529D]/5 rounded-lg p-8 md:p-12 mb-12">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#3E529D] mb-6 text-center">
              Há 10 anos, nossa organização vem transformando vidas no sertão da Bahia, promovendo ações que fazem a diferença em comunidades que enfrentam graves desafios de vulnerabilidade social.
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed text-justify mb-6">
              Somos uma organização não governamental (ONG) sem fins lucrativos, com a missão de contribuir para a transformação de vidas e despertar humanidade, amor, compaixão e empatia. Nosso trabalho é focado em ações comunitárias nas áreas de assistência social, educação e saúde, sempre com o compromisso de atender às necessidades mais urgentes daquelas que mais precisam.
            </p>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed text-justify">
              Nosso objetivo é promover o desenvolvimento sustentável e garantir condições dignas de vida, acesso à educação de qualidade, e cuidados de saúde para as comunidades atendidas, sempre com o coração aberto para a transformação e o cuidado com o próximo.
            </p>
          </div>

          {/* Seção Bismark - Layout Moderno com Foto Sobreposta */}
          <div className="relative mb-20 overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center">
              {/* Foto do Bismark - Lado Esquerdo com Sobreposição */}
              <div className="relative w-full lg:w-2/5 flex justify-center lg:justify-start z-10">
                <div className="relative w-full max-w-md h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
                  <Image
                    alt="Bismarck Araújo"
                    src={bismarck}
                    fill
                    objectFit="cover"
                    className="object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3E529D]/30 via-transparent to-transparent"></div>
                  {/* Badge decorativo */}
                  <div className="absolute top-6 left-6 bg-[#3E529D] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Fundador
                  </div>
                </div>
              </div>

              {/* Texto sobre Bismark - Lado Direito */}
              <div className="w-full lg:w-3/5 flex flex-col justify-center space-y-6 relative z-20">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-10 shadow-xl border-l-4 border-[#3E529D]">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3E529D] mb-4">
                    Bismark Araújo
                  </h3>
                  <div className="w-24 border-b-4 border-[#3E529D] mb-6"></div>
                  <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-4">
                    Em 2015, o fotógrafo <span className="font-semibold text-[#3E529D]">Bismark Araújo</span> deu início a um projeto transformador, usando a arte fotográfica como uma poderosa ferramenta de mobilização social. Através de suas imagens, ele começou a retratar as histórias e realidades excludentes de crianças, adolescentes, adultos e idosos que vivem em situações de vulnerabilidade extrema no sertão da Bahia e outras regiões.
                  </p>
                  <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-4">
                    Suas fotografias não são apenas imagens, elas são testemunhos vivos de lutas diárias, mas também de esperança e resistência. Com essas imagens, Bismark iniciou um movimento mais amplo, realizando palestras e exposições que buscavam mobilizar o espírito de solidariedade de pessoas, instituições públicas e privadas, incentivando todos a contribuir para a transformação social.
                  </p>
                  <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                    O trabalho de Bismark não só denuncia a pobreza e a miséria, mas também convida à ação, combatendo desigualdades e promovendo um olhar mais humano e atento às questões sociais que precisam ser enfrentadas com urgência.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Galeria de Fotos - Layout Moderno em Grid Assimétrico */}
          <div className="mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-[#3E529D] text-center mb-4">
              Nossas Ações em Imagens
            </h3>
            <div className="w-full flex justify-center items-center mb-12">
              <div className="w-32 border-b-4 border-[#3E529D]"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Foto 1 - Destaque com Texto Sobreposto */}
              <div className="relative w-full h-96 md:h-[450px] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500 group cursor-pointer">
                <Image
                  alt="Foto sobre nós"
                  src={foto1}
                  fill
                  objectFit="cover"
                  className="object-center group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E529D]/90 via-[#3E529D]/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-0 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-lg font-semibold mb-2">Transformação Social</p>
                  <p className="text-sm opacity-90">Ações que transformam vidas</p>
                </div>
              </div>

              {/* Foto 2 - Layout Vertical */}
              <div className="relative w-full h-96 md:h-[450px] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500 group cursor-pointer">
                <Image
                  alt="Foto sobre nós"
                  src={foto3}
                  fill
                  objectFit="cover"
                  className="object-center group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E529D]/90 via-[#3E529D]/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-0 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-lg font-semibold mb-2">Comunidade</p>
                  <p className="text-sm opacity-90">Juntos fazemos a diferença</p>
                </div>
              </div>

              {/* Foto 3 - Destaque Maior */}
              <div className="relative w-full h-96 md:h-[450px] lg:row-span-1 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500 group cursor-pointer">
                <Image
                  alt="Foto sobre nós"
                  src={foto2}
                  fill
                  objectFit="cover"
                  className="object-center group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E529D]/90 via-[#3E529D]/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-0 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-lg font-semibold mb-2">Esperança</p>
                  <p className="text-sm opacity-90">Construindo um futuro melhor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Seção: Missão e Valores */}
      <div
        className="w-full flex items-center justify-center py-16 bg-[#3E529D] text-base lg:text-lg px-4"
        ref={sectionSession2}
      >
        <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-12 lg:gap-16" id="missao">
          <div className="flex flex-col flex-1 justify-center items-center bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-12">
            <h1 className="w-full text-center text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 flex items-center justify-center">
              MISSÃO <Target className="ml-3 text-white" size={32} />
            </h1>
            <div className="w-full flex justify-center items-center mb-8">
              <div className="w-24 border-b-4 border-white"></div>
            </div>
            <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed text-justify">
              Nossa missão é contribuir para a construção de um mundo mais solidário e justo, por meio de ações de combate à pobreza, com o objetivo de garantir o direito à moradia digna e a formação humana integral das pessoas em situação de vulnerabilidade.
              <br />
              <br />
              Estamos comprometidos com a realização de ações socioeducativas e com a construção de moradias dignas, oferecendo oportunidades de transformação para populações que enfrentam risco social e exclusão. Acreditamos que, por meio da solidariedade e do apoio mútuo, podemos construir um futuro mais justo, humano e igualitário para todos.
            </p>
          </div>
          <div className="flex flex-col flex-1 justify-center items-center bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-12">
            <h1 className="w-full text-center text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 flex items-center justify-center">
              VALORES <Heart className="ml-3 text-white" size={32} />
            </h1>
            <div className="w-full flex justify-center items-center mb-8">
              <div className="w-24 border-b-4 border-white"></div>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <li className="flex items-center text-white text-base md:text-lg">
                <Dot className="text-white mr-2" size={24} />
                Respeito
              </li>
              <li className="flex items-center text-white text-base md:text-lg">
                <Dot className="text-white mr-2" size={24} />
                Amor
              </li>
              <li className="flex items-center text-white text-base md:text-lg">
                <Dot className="text-white mr-2" size={24} />
                Compaixão
              </li>
              <li className="flex items-center text-white text-base md:text-lg">
                <Dot className="text-white mr-2" size={24} />
                Dignidade
              </li>
              <li className="flex items-center text-white text-base md:text-lg">
                <Dot className="text-white mr-2" size={24} />
                Fraternidade
              </li>
              <li className="flex items-center text-white text-base md:text-lg">
                <Dot className="text-white mr-2" size={24} />
                Solidariedade
              </li>
              <li className="flex items-center text-white text-base md:text-lg">
                <Dot className="text-white mr-2" size={24} />
                Sustentabilidade
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Seção: Cidades e ODS */}
      <div className="w-full flex items-center justify-center py-16 bg-white text-base lg:text-lg px-4" ref={sectionSession3}>
        <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex flex-col flex-1 justify-center items-center bg-[#3E529D]/5 rounded-lg p-8 md:p-12">
            <h1 className="w-full text-center text-2xl md:text-3xl lg:text-4xl font-bold text-[#3E529D] mb-6 flex items-center justify-center">
              ESTAMOS NA BAHIA NAS CIDADES: <Building2 className="ml-3 text-[#3E529D]" size={32} />
            </h1>
            <div className="w-full flex justify-center items-center mb-8">
              <div className="w-24 border-b-4 border-[#3E529D]"></div>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <li className="flex items-center text-gray-700 text-base md:text-lg">
                <Dot className="text-[#3E529D] mr-2" size={24} />
                Canudos
              </li>
              <li className="flex items-center text-gray-700 text-base md:text-lg">
                <Dot className="text-[#3E529D] mr-2" size={24} />
                Retirolândia
              </li>
              <li className="flex items-center text-gray-700 text-base md:text-lg">
                <Dot className="text-[#3E529D] mr-2" size={24} />
                Valente
              </li>
              <li className="flex items-center text-gray-700 text-base md:text-lg">
                <Dot className="text-[#3E529D] mr-2" size={24} />
                Jacobina
              </li>
            </ul>
          </div>
          <div className="flex flex-col flex-1 justify-center items-center bg-[#3E529D]/5 rounded-lg p-8 md:p-12">
            <h1 className="w-full text-center text-2xl md:text-3xl lg:text-4xl font-bold text-[#3E529D] mb-6 flex items-center justify-center">
              ODS <Earth className="ml-3 text-[#3E529D]" size={32} />
            </h1>
            <div className="w-full flex justify-center items-center mb-8">
              <div className="w-24 border-b-4 border-[#3E529D]"></div>
            </div>
            <ul className="grid grid-cols-1 gap-4 w-full">
              <li className="flex items-start text-gray-700 text-base md:text-lg">
                <Dot className="text-[#3E529D] mr-2 mt-1 flex-shrink-0" size={24} />
                <span>Agenda 2030 (estamos de acordo com os objetivos da ONU)</span>
              </li>
              <li className="flex items-start text-gray-700 text-base md:text-lg">
                <Dot className="text-[#3E529D] mr-2 mt-1 flex-shrink-0" size={24} />
                <span>Colaboramos e lutamos para um desenvolvimento mais Sustentável</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
