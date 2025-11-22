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
    <div className="w-full min-h-screen lg:h-screen flex flex-col justify-center items-center pb-6 bg-corRetratos bg-opacity-20 px-4 lg:px-0">
      <div className="pt-6">
        <h1 className="w-full text-center text-xl lg:text-2xl font-semibold px-4">
          Vila Esperança: Onde a Dignidade Recomeça
        </h1>
        <div className="w-full flex justify-center items-center">
          <div className="w-20 border-b-2 border-corRetratos mt-3"></div>
        </div>
      </div>
      <div className="w-full lg:w-[80%] min-h-[60vh] lg:h-[90vh] grid grid-cols-1 lg:flex mt-5 shadow-xl">
        <div className="flex-1 border-2 rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none border-corRetratos p-4 text-justify flex justify-center items-center text-sm lg:text-base bg-white">
          A Vila Esperança é um símbolo vivo de transformação e solidariedade. O projeto nasceu em 2019, na cidade de Canudos (BA), com o objetivo de resgatar a dignidade de famílias que viviam em condições extremamente precárias.
          <br />
          Na época, mais de 20 famílias sobreviviam em casebres insalubres de pau a pique, sem acesso a água potável e em completa vulnerabilidade. Cada família dispunha de apenas 20 litros de água por mês, coletados após uma longa caminhada de mais de 3 quilômetros.
          <br />
          Com a força da união e parcerias fundamentais com a Fraternidade sem Fronteiras e o Instituto Alok e a Coup de Pouce Humanitaire (Organização Francesa) demos início a uma verdadeira revolução social.
          <br />
          Hoje, todas as moradias de taipa foram substituídas por 36 casas de alvenaria, oferecendo conforto, segurança e um novo sentido de pertencimento às famílias. Além disso, foi realizado um grande avanço no acesso à água: perfuramos um poço artesiano, dessalinizamos a água e construímos reservatórios que garantem 80 litros de água potável por dia para cada família.
          <br />
          Mas o sonho não para por aqui.
          Uma nova Vila Esperança está sendo finalizada em Jacobina (BA). E, para que essa nova etapa se concretize, levando esperança e dignidade a ainda mais pessoas, precisamos da sua ajuda.
          <br />
          Junte-se a nós e seja parte dessa transformação.
          Cada doação, cada gesto de apoio, é um passo rumo a um Brasil mais justo, humano e esperançoso.texto falando sobre
        </div>
        <div
          className="flex-1 relative rounded-b-xl lg:rounded-r-xl lg:rounded-bl-none overflow-hidden border-2 border-corRetratos min-h-[300px]"
          ref={imageRef} // Referência para a animação
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
            <Image alt="Foto do carrossel" src={images[currentImageIndex]} fill objectFit="cover" />
          )}
        </div>
      </div>
      <div className="w-full lg:w-[80%] mt-3 flex flex-col justify-center items-center px-4">
        <h2 className="text-lg lg:text-xl font-semibold text-center">Seja um padrinho ou madrinha da Vila Esperança</h2>
        <div className="flex justify-center items-center sm:flex-row gap-2 mt-3 w-full sm:w-auto">
          <Link href="https://fraternidadesemfronteiras.colabore.org/apadrinheretratos/single_step" target="_blank">
            <Button className="bg-corRetratos hover:bg-corRetratos/80 text-white">
              Pessoa física
            </Button>
          </Link>
          <Link href="https://fraternidadesemfronteiras.colabore.org/apadrinhepjretratos/single_step" target="_blank">
            <Button className="bg-corRetratos hover:bg-corRetratos/80 text-white">
              Pessoa jurídica
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
