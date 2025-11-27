"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { Textarea } from "@/app/_components/ui/textarea";
import { Label } from "@/app/_components/ui/label";
import Image from "next/image";
import imagem from "@/app/public/empresasParceiras3.jpg";
import { ChevronsDown } from "lucide-react";

// Schema de validação com Zod
const formSchema = z.object({
  nome: z.string().min(2, "O nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  telefone: z.string().min(10, "Telefone inválido"),
  mensagem: z.string().min(10, "A mensagem deve ter pelo menos 10 caracteres"),
});

type FormData = z.infer<typeof formSchema>;

export default function Form() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setSuccess(false);
    setError(null);

    try {
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        reset();
        setSuccess(true);
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError(result.error || "Erro ao enviar mensagem. Tente novamente.");
      }
    } catch {
      setError("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen pt-16 lg:pt-0">
      {/* Hero Section */}
      <div className="w-full h-screen relative flex items-center justify-center">
        <Image
          src={imagem}
          alt="Background"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-[#3E529D]/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            ENTRE EM CONTATO
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white max-w-3xl drop-shadow-lg leading-relaxed mb-12">
            Estamos prontos para ouvir você e responder suas dúvidas
          </p>
          <span className="absolute bottom-0 animate-bounce text-white cursor-pointer">
            <ChevronsDown size={40} />
          </span>
        </div>
      </div>

      {/* Seção de Conteúdo */}
      <div className="w-full bg-white py-16 px-4 lg:px-0">
        <div className="w-full max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-center items-start gap-8 lg:gap-12">
            {/* Formulário */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 p-8 md:p-10 rounded-2xl w-full lg:w-1/2 shadow-xl bg-[#3E529D]/5 border-2 border-[#3E529D]/20"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#3E529D] mb-6 text-center">
                Envie sua Mensagem
              </h2>

              <div>
                <Label htmlFor="nome" className="text-base font-semibold text-gray-700 mb-2 block">
                  Nome
                </Label>
                <Input
                  id="nome"
                  {...register("nome")}
                  className={`h-12 ${errors.nome ? "border-red-500" : "border-gray-300"} focus:border-[#3E529D] focus:ring-[#3E529D]`}
                  placeholder="Seu nome completo"
                />
                {errors.nome && (
                  <p className="text-red-500 text-sm mt-1">{errors.nome.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email" className="text-base font-semibold text-gray-700 mb-2 block">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  className={`h-12 ${errors.email ? "border-red-500" : "border-gray-300"} focus:border-[#3E529D] focus:ring-[#3E529D]`}
                  placeholder="seu@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="telefone" className="text-base font-semibold text-gray-700 mb-2 block">
                  Telefone
                </Label>
                <Input
                  id="telefone"
                  {...register("telefone")}
                  className={`h-12 ${errors.telefone ? "border-red-500" : "border-gray-300"} focus:border-[#3E529D] focus:ring-[#3E529D]`}
                  placeholder="(00) 00000-0000"
                />
                {errors.telefone && (
                  <p className="text-red-500 text-sm mt-1">{errors.telefone.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="mensagem" className="text-base font-semibold text-gray-700 mb-2 block">
                  Mensagem
                </Label>
                <Textarea
                  id="mensagem"
                  {...register("mensagem")}
                  className={`min-h-[120px] ${errors.mensagem ? "border-red-500" : "border-gray-300"} focus:border-[#3E529D] focus:ring-[#3E529D]`}
                  rows={5}
                  placeholder="Escreva sua mensagem aqui..."
                />
                {errors.mensagem && (
                  <p className="text-red-500 text-sm mt-1">{errors.mensagem.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-[#3E529D] hover:bg-[#3E529D]/90 text-white h-12 text-lg font-semibold"
              >
                {loading ? "Enviando..." : "Enviar Mensagem"}
              </Button>

              {success && (
                <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                  <p className="text-sm">Mensagem enviada com sucesso!</p>
                </div>
              )}

              {error && (
                <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                  <p className="text-sm">{error}</p>
                </div>
              )}
            </form>

            <div className="flex-1 space-y-6 p-5 h-full w-full text-center lg:text-left bg-white/95 backdrop-blur-sm rounded-lg shadow-lg">
              <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">
                PARA ASSUNTOS GERAIS VOCÊ PODE TAMBÉM ENVIAR UMA MENSAGEM PARA NÓS
              </h1>
              <h2 className="text-base md:text-lg lg:text-xl text-gray-700">
                NOSSO TIME ESTÁ À DISPOSIÇÃO PARA RESPONDER SUAS DÚVIDAS, RECEBER
                SUGESTÕES, ENTRE OUTROS ASSUNTOS.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
