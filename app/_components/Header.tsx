"use client";

import * as React from "react";
import { useState } from "react";

import { cn } from "@/app/_lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/app/_components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/public/Logo.png";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Menu Desktop - mantém como estava */}
      <NavigationMenu className="absolute z-50 top-2 bg-white rounded-lg hidden lg:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Sobre nós</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-[200px] gap-3 p-4 md:w-[300px] md:grid-cols-2 lg:w-[400px] ">
                <ListItem href="/sobreNos" title="Nossa História">
                  • Conheça nossa história e propósito.
                </ListItem>
                <ListItem href="/sobreNos#missao" title="Missão">
                  • Conheça nossa missão e valores.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Projetos</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-[200px] gap-3 p-4 md:w-[300px] md:grid-cols-2 lg:w-[400px] ">
                <ListItem
                  href="/projetos#VilaEsperanca"
                  title="Vila Esperança"
                >
                  • Onde a Dignidade Recomeça
                </ListItem>
                <ListItem
                  href="/projetos#cozinhaComunitaria"
                  title="Cozinha Comunitária"
                >
                  • Oferecemos uma alimentação de qualidade para as famílias
                  atendidas.
                </ListItem>
                <ListItem
                  href="/projetos#frutosEsperanca"
                  title="Frutos de Esperança"
                >
                  • Plantando o futuro cuidando do presente.
                </ListItem>
                <ListItem href="/projetos#CineEsperanca" title="Cine Esperança">
                  • Exibição de filmes educativos.
                </ListItem>
                <ListItem href="/projetos#GeracaoRenda" title="Geração de Renda">
                  • Oficinas para moradores.
                </ListItem>
                <ListItem
                  href="/projetos#ArteEducacaoSemFronteiras"
                  title="Arte e Educação sem Fronteiras"
                >
                  • Reforço escolar para crianças, jovens e adultos.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Apadrinhamento</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-[200px] gap-3 p-4 md:w-[300px] md:grid-cols-2 lg:w-[400px] ">
                <ListItem
                  href="https://fraternidadesemfronteiras.colabore.org/apadrinheretratos/single_step"
                  title="Apadrinhe como Pessoa Física"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  • Seja um padrinho como pessoa física.
                </ListItem>
                <ListItem
                  href="https://fraternidadesemfronteiras.colabore.org/apadrinhepjretratos/single_step"
                  title="Apadrinhe como Pessoa Jurídica"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  • Seja um padrinho como pessoa jurídica.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <div>
            <Link href={"/"}>
              <Image src={logo} alt="Logo" width={100} height={50} />
            </Link>
          </div>
          <NavigationMenuItem>
            <Link
              href="/docs"
              target="_blank"
              rel="noopener noreferrer"
              legacyBehavior
              passHref
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Transparência
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/empresasParceiras" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Empresas parceiras
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/doacoes" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Doações
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contato" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contato
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Menu Mobile - hamburger */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="flex items-center justify-between p-4">
          <Link href={"/"} onClick={() => setIsMenuOpen(false)}>
            <Image src={logo} alt="Logo" width={80} height={40} />
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Mobile Expandido */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg max-h-[calc(100vh-80px)] overflow-y-auto">
            <div className="p-4 space-y-4">
              {/* Sobre nós */}
              <div>
                <h3 className="font-semibold text-lg mb-2">Sobre nós</h3>
                <Link href="/sobreNos" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={() => setIsMenuOpen(false)}>
                  Nossa História
                </Link>
                <Link href="/sobreNos#missao" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={() => setIsMenuOpen(false)}>
                  Missão
                </Link>
              </div>

              {/* Projetos */}
              <div>
                <h3 className="font-semibold text-lg mb-2">Projetos</h3>
                <Link href="/projetos#VilaEsperanca" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={() => setIsMenuOpen(false)}>
                  Vila Esperança
                </Link>
                <Link href="/projetos#cozinhaComunitaria" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={() => setIsMenuOpen(false)}>
                  Cozinha Comunitária
                </Link>
                <Link href="/projetos#frutosEsperanca" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={() => setIsMenuOpen(false)}>
                  Frutos de Esperança
                </Link>
                <Link href="/projetos#CineEsperanca" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={() => setIsMenuOpen(false)}>
                  Cine Esperança
                </Link>
                <Link href="/projetos#GeracaoRenda" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={() => setIsMenuOpen(false)}>
                  Geração de Renda
                </Link>
                <Link href="/projetos#ArteEducacaoSemFronteiras" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={() => setIsMenuOpen(false)}>
                  Arte e Educação sem Fronteiras
                </Link>
              </div>

              {/* Apadrinhamento */}
              <div>
                <h3 className="font-semibold text-lg mb-2">Apadrinhamento</h3>
                <a href="https://fraternidadesemfronteiras.colabore.org/apadrinheretratos/single_step" target="_blank" rel="noopener noreferrer" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={() => setIsMenuOpen(false)}>
                  Pessoa Física
                </a>
                <a href="https://fraternidadesemfronteiras.colabore.org/apadrinhepjretratos/single_step" target="_blank" rel="noopener noreferrer" className="block py-2 px-4 hover:bg-gray-100 rounded" onClick={() => setIsMenuOpen(false)}>
                  Pessoa Jurídica
                </a>
              </div>

              {/* Links diretos */}
              <Link href="/docs" target="_blank" rel="noopener noreferrer" className="block py-2 px-4 hover:bg-gray-100 rounded font-semibold" onClick={() => setIsMenuOpen(false)}>
                Transparência
              </Link>
              <Link href="/empresasParceiras" className="block py-2 px-4 hover:bg-gray-100 rounded font-semibold" onClick={() => setIsMenuOpen(false)}>
                Empresas parceiras
              </Link>
              <Link href="/doacoes" className="block py-2 px-4 hover:bg-gray-100 rounded font-semibold" onClick={() => setIsMenuOpen(false)}>
                Doações
              </Link>
              <Link href="/contato" className="block py-2 px-4 hover:bg-gray-100 rounded font-semibold" onClick={() => setIsMenuOpen(false)}>
                Contato
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
