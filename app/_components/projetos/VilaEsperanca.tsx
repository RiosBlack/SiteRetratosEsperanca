import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import foto from "@/app/public/fotoVilaEsperanca1.jpg";
import foto1 from "@/app/public/fotoSobreNós1.jpeg";
import foto2 from "@/app/public/fotoVilaEsperanca2.jpg";
import { Button } from "../ui/button";
import Link from "next/link";

export default function VilaEsperanca() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [videoEnded, setVideoEnded] = useState(false);
  const images = [foto, foto1, foto2];
  const imageRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Só inicia o carrossel após o vídeo terminar
    if (!videoEnded) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length, videoEnded]);

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 }
      );
    }
  }, [currentImageIndex]);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoElement.play();
          } else {
            videoElement.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(videoElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center py-16 bg-white px-4 lg:px-0">
      <div className="w-full max-w-7xl">
        {/* Título */}
        <div className="mb-12">
          <h1 className="w-full text-center text-3xl md:text-4xl lg:text-5xl font-bold text-[#3E529D] px-4 mb-6">
            VILA ESPERANÇA: ONDE A DIGNIDADE RECOMEÇA
          </h1>
          <div className="w-full flex justify-center items-center">
            <div className="w-32 border-b-4 border-[#3E529D]"></div>
          </div>
        </div>

        {/* Layout Principal - Foto à esquerda, Texto à direita */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
          {/* Seção de Mídia (Vídeo/Imagem) - Lado Esquerdo */}
          <div
            className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
            ref={imageRef}
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              playsInline
              onEnded={() => setVideoEnded(true)}
              style={{ display: videoEnded ? 'none' : 'block' }}
            >
              <source src="/vilaEsperanca.mp4" type="video/mp4" />
              Seu navegador não suporta a reprodução de vídeos.
            </video>
            {videoEnded && (
              <Image
                alt="Foto do carrossel"
                src={images[currentImageIndex]}
                fill
                objectFit="cover"
                className="object-center"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-br from-[#3E529D]/20 via-transparent to-transparent"></div>
          </div>

          {/* Seção de Texto - Lado Direito */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="bg-[#3E529D]/5 rounded-2xl p-6 md:p-8 lg:p-10 border-l-4 border-[#3E529D]">
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed text-justify mb-4">
                A <span className="font-semibold text-[#3E529D]">Vila Esperança</span> é um símbolo vivo de transformação e solidariedade. O projeto nasceu em <span className="font-semibold">2019</span>, na cidade de <span className="font-semibold">Canudos (BA)</span>, com o objetivo de resgatar a dignidade de famílias que viviam em condições extremamente precárias.
              </p>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed text-justify mb-4">
                Na época, <span className="font-semibold">mais de 20 famílias</span> sobreviviam em casebres insalubres de <span className="font-semibold">pau a pique</span>, sem acesso a água potável e em completa vulnerabilidade. Cada família dispunha de apenas <span className="font-semibold">20 litros de água por mês</span>, coletados após uma longa caminhada de mais de <span className="font-semibold">3 quilômetros</span>.
              </p>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed text-justify mb-4">
                Com a força da união e parcerias fundamentais com a <span className="font-semibold text-[#3E529D]">Fraternidade sem Fronteiras</span> e o <span className="font-semibold text-[#3E529D]">Instituto Alok</span> e a <span className="font-semibold text-[#3E529D]">Coup de Pouce Humanitaire</span> (Organização Francesa) demos início a uma verdadeira revolução social.
              </p>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed text-justify mb-4">
                Hoje, todas as moradias de taipa foram substituídas por <span className="font-semibold text-[#3E529D]">36 casas de alvenaria</span>, oferecendo conforto, segurança e um novo sentido de pertencimento às famílias. Além disso, foi realizado um grande avanço no acesso à água: <span className="font-semibold">perfuramos um poço artesiano, dessalinizamos a água</span> e construímos <span className="font-semibold">reservatórios</span> que garantem <span className="font-semibold text-[#3E529D]">80 litros de água potável por dia</span> para cada família.
              </p>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed text-justify">
                Mas o sonho não para por aqui. Uma <span className="font-semibold text-[#3E529D]">nova Vila Esperança</span> está sendo finalizada em <span className="font-semibold">Jacobina (BA)</span>. E, para que essa nova etapa se concretize, levando esperança e dignidade a ainda mais pessoas, precisamos da sua ajuda.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="w-full flex flex-col justify-center items-center px-4 bg-[#3E529D] rounded-2xl p-8 md:p-10 shadow-xl">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white text-center mb-2">
            Junte-se a nós e seja parte dessa transformação
          </h2>
          <p className="text-base md:text-lg text-white/90 text-center mb-6">
            Cada doação, cada gesto de apoio, é um passo rumo a um Brasil mais justo, humano e esperançoso.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto">
            <Link href="https://fraternidadesemfronteiras.colabore.org/apadrinheretratos/single_step" target="_blank">
              <Button className="bg-white hover:bg-gray-100 text-[#3E529D] px-8 py-6 text-lg font-semibold shadow-lg">
                Seja Padrinho/Madrinha - Pessoa Física
              </Button>
            </Link>
            <Link href="https://fraternidadesemfronteiras.colabore.org/apadrinhepjretratos/single_step" target="_blank">
              <Button className="bg-white hover:bg-gray-100 text-[#3E529D] px-8 py-6 text-lg font-semibold shadow-lg">
                Seja Padrinho/Madrinha - Pessoa Jurídica
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
