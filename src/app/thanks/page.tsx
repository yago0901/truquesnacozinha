'use client'

import Header from '@/components/Header';
import "../globals.css";
import { CheckCircle } from "lucide-react";
import { useEffect } from 'react';

export default function Page() {

   useEffect(() => {
    // dispara evento de compra
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Purchase", {
        value: 14.9,         // valor da compra
        currency: "BRL",     // moeda
      });
    }
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-orange-100/20">
      <Header />

      <div className="container-custom flex flex-col items-center justify-center text-center pt-32 pb-20 space-y-8">
        
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-green-100 shadow-md">
          <CheckCircle className="w-12 h-12 text-green-600" />
        </div>

        <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-800">
          🎉 Compra confirmada!
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
          Obrigado por adquirir o <span className="font-semibold text-primary">Kit 75 Truques</span>!  
          Seu acesso foi enviado para o e-mail cadastrado.
        </p>

        <div className="bg-card shadow-lg rounded-3xl p-6 md:p-10 max-w-lg w-full space-y-4">
          <p className="text-base text-gray-700">
            ✅ Acesso imediato aos 3 volumes digitais.  
          </p>
          <p className="text-base text-gray-700">
            📩 Confira seu e-mail (inclusive a caixa de spam).
          </p>
          <p className="text-base text-gray-700">
            🤝 Em caso de dúvidas, entre em contato com nossa equipe de suporte.
          </p>
        </div>

        <a
          href="https://chat.whatsapp.com/seu-grupo"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-orange-400 text-white px-8 py-4 rounded-2xl shadow-lg text-lg font-medium hover:bg-orange-500 transition-all"
        >
          👉 Entrar no grupo exclusivo
        </a>

        <p className="text-sm text-muted-foreground">
          ⚡ Aproveite ao máximo sua jornada na cozinha!
        </p>
      </div>
    </div>
  );
}
