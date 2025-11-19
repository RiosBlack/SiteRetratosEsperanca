"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import logo from "@/app/public/instagram.png";

export function InstagramLink() {
  const linkRef = useRef<HTMLAnchorElement>(null);

  const handleMouseEnter = () => {
    if (!linkRef.current) return;
    
    gsap.to(linkRef.current, {
      scale: 1.2,
      duration: 0.3,
      ease: "power2.out",
    });

    // Animação de shake/tremida
    gsap.to(linkRef.current, {
      x: -3,
      duration: 0.1,
      repeat: 5,
      yoyo: true,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    if (!linkRef.current) return;
    
    gsap.to(linkRef.current, {
      scale: 1,
      x: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <Link
      ref={linkRef}
      href="https://www.instagram.com/retratosdeesperanca/"
      target="_blank"
      className="fixed bottom-2 right-2 bg-white/50 rounded-full p-2 shadow-lg cursor-pointer z-50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image src={logo} alt="Instagram" width={30} height={30} />
    </Link>
  );
}

