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
    } catch (err) {
      setError("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center pt-20 lg:pt-0 px-4 lg:px-0 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imagem}
          alt="Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        {/* Overlay escuro para melhorar legibilidade */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Conteúdo com z-index para ficar acima do background */}
      <div className="flex flex-col lg:flex-row justify-center items-center w-full lg:w-[80%] gap-6 lg:gap-8 relative z-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 p-6 border rounded-lg max-w-md w-full lg:flex-1 shadow-lg bg-white/95 backdrop-blur-sm"
        >
          <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-center">
            Entre em Contato
          </h2>

          <div>
            <Label htmlFor="nome">Nome</Label>
            <Input
              id="nome"
              {...register("nome")}
              className={errors.nome ? "border-red-500" : ""}
            />
            {errors.nome && (
              <p className="text-red-500 text-sm mt-1">{errors.nome.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="telefone">Telefone</Label>
            <Input
              id="telefone"
              {...register("telefone")}
              className={errors.telefone ? "border-red-500" : ""}
            />
            {errors.telefone && (
              <p className="text-red-500 text-sm mt-1">{errors.telefone.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="mensagem">Mensagem</Label>
            <Textarea
              id="mensagem"
              {...register("mensagem")}
              className={errors.mensagem ? "border-red-500" : ""}
              rows={5}
            />
            {errors.mensagem && (
              <p className="text-red-500 text-sm mt-1">{errors.mensagem.message}</p>
            )}
          </div>

          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Enviando..." : "Enviar"}
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
  );
}
