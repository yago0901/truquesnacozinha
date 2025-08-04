'use client'

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Kit75Truques from "../assets/kit75truques.png";
import Image from "next/image";

const EbookHero = () => {
  return (
    <section id="home" className="section-padding pt-20 bg-gradient-to-br from-primary/5 to-orange-100/20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto space-y-2">
          {/* Badge */}
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            🔥 OFERTA LIMITADA - 3 VOLUMES COMPLETOS
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-gradient">75 SEGREDOS </span> PARA SE DAR BEM NA COZINHA
          </h1>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="space-y-6 md:w-[55%]">
              <p className="text-xl text-muted-foreground max-w-3xl">
                Pare de sofrer na cozinha! Descubra os 3 segredos proibidos que os chefs não revelam o #2 vai te chocar!
              </p>

              {/* Benefícios principais */}
              <div className="grid md:grid-cols-1 gap-6 my-12">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="font-medium">DOMINE 75 TÉCNICAS DE COZINHA EM POUCOS DIAS!</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="font-medium">Economize evitando disperdício de alimentos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="font-medium">Resultados profissionais em casa</span>
                </div>
              </div>
            </div>

            {/* Imagem à direita */}
            <div className="md:w-[45%] flex justify-center">
              <Image
                src={Kit75Truques}
                alt="Livro de receitas"
                className="max-w-full h-auto"
                width={550}
                height={450}
                priority
              />
            </div>
          </div>

          {/* Preço e CTA */}
          <div className="bg-card p-8 rounded-3xl shadow-lg max-w-md mx-auto">
            <div className="text-center space-y-4">
              <div>
                <span className="text-3xl font-bold text-primary">R$ 49,90</span>
                <span className="text-muted-foreground line-through ml-2">R$ 143,70</span>
              </div>
              <p className="text-sm text-muted-foreground">3 volumes completos • 75 técnicas • Acesso imediato</p>
              <Button
                variant="food"
                size="lg"
                className="w-full text-lg py-4 bg-orange-400 text-white cursor-pointer"
                onClick={() => {
                  // Adicione aqui qualquer lógica de pré-redirecionamento
                  // Ex: Analytics, validações, etc.
                  window.open('https://mpago.la/1Er6XxF', '_blank', 'noopener,noreferrer');
                }}
              >
                🛒 QUERO APRENDER AGORA
              </Button>
              <p className="text-xs text-muted-foreground">⚡ Oferta válida por tempo limitado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EbookHero;
