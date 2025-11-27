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
import whatsapp from "@/app/public/whatsLogo.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-center">
        <Image
          alt="background"
          src={foto}
          fill
          objectFit="cover"
          className="opacity-50"
        />
        <div className="absolute inset-0 bg-[#3E529D]/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-56">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            DOE E TRANSFORME VIDAS
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white mb-12 max-w-3xl drop-shadow-lg leading-relaxed">
            Seu gesto de solidariedade pode transformar vidas – doe e faça a diferença!
          </p>
          <span className="absolute bottom-0 animate-bounce text-white cursor-pointer">
            <ChevronsDown size={40} />
          </span>
        </div>
      </div>
      {/* Seção: Como Ajudar - Apadrinhe */}
      <div
        className="w-full min-h-screen flex flex-col items-center px-4 lg:px-0 bg-white py-16"
        ref={sectionSession1}
      >
        <div className="w-full max-w-6xl">
          <h1 className="w-full text-center text-3xl md:text-4xl lg:text-5xl font-bold text-[#3E529D] mb-6">
            COMO AJUDAR: APADRINHE E TRANSFORME VIDAS
          </h1>
          <div className="w-full flex justify-center items-center mb-12">
            <div className="w-32 border-b-4 border-[#3E529D]"></div>
          </div>

          <div className="bg-[#3E529D]/5 rounded-lg p-8 md:p-12 mb-12">
            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed text-justify mb-6">
              Apadrinhar é mais do que um gesto de generosidade, é uma verdadeira demonstração de amor e solidariedade. Ao apadrinhar um projeto, você contribui diretamente para a manutenção e continuidade das ações que estão transformando vidas nas comunidades atendidas, especialmente na Vila Esperança.
            </p>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed text-justify mb-6">
              O apadrinhamento é uma forma de garantir que as famílias e as crianças possam ter acesso a moradia digna, educação, saúde, alimentação e oportunidades. Com o seu apoio, podemos manter as iniciativas de educação, saúde, geração de renda, cultura e infraestrutura, garantindo que vidas e realidades continuem a ser transformadas de forma constante.
            </p>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed text-justify mb-6 font-semibold">
              Apadrinhe. Apadrinhar é amar.
            </p>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed text-justify">
              Juntos, podemos continuar semeando esperança, dignidade e oportunidades para aqueles que mais precisam.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="https://fraternidadesemfronteiras.colabore.org/apadrinheretratos/single_step" target="_blank">
              <Button className="bg-[#3E529D] hover:bg-[#3E529D]/90 text-white px-8 py-6 text-lg font-semibold">
                Apadrinhe Pessoa Física
              </Button>
            </Link>
            <Link href="https://fraternidadesemfronteiras.colabore.org/apadrinhepjretratos/single_step" target="_blank">
              <Button className="bg-[#3E529D] hover:bg-[#3E529D]/90 text-white px-8 py-6 text-lg font-semibold">
                Apadrinhe Pessoa Jurídica
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Seção: Doação Avulsa */}
      <div className="w-full bg-[#3E529D] py-16 px-4 lg:px-0">
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="w-full text-center text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            DOAÇÃO AVULSA
          </h2>
          <div className="w-full flex justify-center items-center mb-12">
            <div className="w-32 border-b-4 border-white"></div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-12 mb-12">
            <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed text-justify mb-6">
              Qualquer valor é sempre bem-vindo e é fundamental para continuarmos o nosso trabalho e mantermos os projetos vivos e em constante transformação. Sua ajuda, ajuda a garantir acesso à educação, saúde, moradia e dignidade para as famílias da Vila Esperança e outras comunidades atendidas.
            </p>
            <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed text-justify">
              Se você deseja que sua doação seja destinada a uma área específica, como educação, saúde, geração de renda ou infraestrutura, basta informar sua preferência ao preencher o formulário de doação.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
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
                className="bg-white rounded-lg shadow-xl overflow-hidden"
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
      </div>

      {/* Seção: Doação de Materiais */}
      <div className="w-full bg-white py-16 px-4 lg:px-0">
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="w-full text-center text-3xl md:text-4xl lg:text-5xl font-bold text-[#3E529D] mb-6">
            DOAÇÃO DE MATERIAIS E INSUMOS
          </h2>
          <div className="w-full flex justify-center items-center mb-12">
            <div className="w-32 border-b-4 border-[#3E529D]"></div>
          </div>

          <div className="bg-[#3E529D]/5 rounded-lg p-8 md:p-12 mb-8">
            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed text-justify mb-4">
              Além de doações financeiras, também aceitamos qualquer outro tipo de contribuição que possa fazer a diferença na vida de quem mais precisa. Você pode doar:
            </p>
            <ul className="list-disc list-inside text-base md:text-lg lg:text-xl text-gray-700 space-y-2 mb-6 ml-4">
              <li>Roupas e calçados</li>
              <li>Materiais escolares</li>
              <li>Brinquedos</li>
              <li>Cestas básicas</li>
              <li>Produtos de higiene pessoal, entre outros.</li>
            </ul>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed text-justify">
              Se você tem algo a oferecer, entre em contato conosco! Juntos, encontraremos a melhor maneira de garantir que sua doação chegue até quem precisa.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href={"/contato"}>
              <Button className="bg-[#3E529D] hover:bg-[#3E529D]/90 text-white px-8 py-6 text-lg font-semibold">
                Entre em contato
              </Button>
            </Link>
            <Link href={"/contato"}>
              <Button className="bg-[#3E529D] hover:bg-[#3E529D]/90 text-white px-8 py-6 text-lg font-semibold flex items-center gap-2">
                <Image src={whatsapp} alt="whatsapp" width={24} height={24} />
                Whatsapp
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {/* Seção: Conta */}
      <div
        className="w-full bg-[#3E529D] py-16 px-4 lg:px-0"
        ref={sectionSession2}
      >
        <div className="w-full max-w-6xl mx-auto">
          <h1 className="w-full text-center text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            CONTA
          </h1>
          <div className="w-full flex justify-center items-center mb-12">
            <div className="w-32 border-b-4 border-white"></div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-12">
            <div className="flex justify-center items-center bg-white p-6 rounded-lg shadow-xl">
              <Image
                src={qrcode}
                alt="qrCode Conta"
                width={300}
                height={300}
                className="w-full max-w-[300px]"
              />
            </div>
            <div className="flex-1 flex flex-col justify-center text-white space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <p className="text-lg md:text-xl lg:text-2xl mb-2">
                  <span className="font-bold">Pix:</span> teste@teste.com.br
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <p className="text-lg md:text-xl lg:text-2xl mb-2">
                  <span className="font-bold">Agência:</span> xxxx-x
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <p className="text-lg md:text-xl lg:text-2xl">
                  <span className="font-bold">Conta:</span> xxxxx-xx
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col items-center text-base md:text-lg lg:text-xl pb-10 text-center break-words px-4 bg-white/10 backdrop-blur-sm rounded-lg p-8 overflow-hidden">
            <p className="text-white mb-4">
              <span className="font-bold">Razão social:</span> xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </p>
            <p className="text-white">
              <span className="font-bold">CNPJ:</span> xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </p>
          </div>
        </div>
      </div>
      {/* Seção: Outras Formas de Ajudar */}
      <div className="w-full bg-white py-16 px-4 lg:px-0">
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center">
          <h1 className="w-full text-center text-3xl md:text-4xl lg:text-5xl font-bold text-[#3E529D] mb-6">
            OUTRAS FORMAS DE AJUDAR
          </h1>
          <div className="w-full flex justify-center items-center mb-12">
            <div className="w-32 border-b-4 border-[#3E529D]"></div>
          </div>
          <Link href={"/contato"}>
            <Button className="bg-[#3E529D] hover:bg-[#3E529D]/90 text-white px-12 py-6 text-lg font-semibold">
              Clique aqui
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
