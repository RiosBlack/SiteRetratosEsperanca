"use client";

import * as React from "react";

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

export function Header() {
  return (
    <NavigationMenu className="absolute z-50 top-2 bg-white rounded-lg">
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
