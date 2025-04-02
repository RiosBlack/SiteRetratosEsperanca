"use client";

import { useState } from "react";
import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { Textarea } from "@/app/_components/ui/textarea";
import { Label } from "@/app/_components/ui/label";

export default function Form() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const res = await fetch("/api/submit-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setForm({ nome: "", email: "", telefone: "", mensagem: "" });
      setSuccess(true);
    }

    setLoading(false);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex justify-center items-center w-[80%]">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 p-4 border rounded-lg max-w-md flex-1"
        >
          <div>
            <Label htmlFor="nome">Nome</Label>
            <Input
              id="nome"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="telefone">Telefone</Label>
            <Input
              id="telefone"
              name="telefone"
              value={form.telefone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="mensagem">Mensagem</Label>
            <Textarea
              id="mensagem"
              name="mensagem"
              value={form.mensagem}
              onChange={handleChange}
              required
            />
          </div>
          <Button type="submit" disabled={loading}>
            {loading ? "Enviando..." : "Enviar"}
          </Button>
          {success && <p className="text-green-500">Enviado com sucesso!</p>}
        </form>
        <div className="flex-1 space-y-6 p-5 h-full w-full">
          <h1 className=" text-xl text-center">
            PARA ASSUNTOS GERAIS VOCÊ PODE TAMBÉM ENVIAR UMA MENSAGEM PARA NÓS
          </h1>
          <h2 className="text-center">
            NOSSO TIME ESTÁ À DISPOSIÇÃO PARA RESPONDER SUAS DÚVIDAS, RECEBER
            SUGESTÕES, ENTRE OUTROS ASSUNTOS.
          </h2>
        </div>
      </div>
    </div>
  );
}
