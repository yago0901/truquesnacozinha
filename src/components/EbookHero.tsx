'use client'

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Kit75Truques from "../assets/kit75truques.png";
import Image from "next/image";
import { useRouter } from 'next/navigation';

const EbookHero = () => {
  const router = useRouter();

  return (
    <section id="home" className="section-padding pt-20 bg-gradient-to-br from-primary/5 to-orange-100/20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto space-y-2">
          {/* Badge */}
          <div className="hidden md:inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            🔥 OFERTA LIMITADA - Restam poucas unidades
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-gradient">PARE DE SOFRER NA COZINHA: </span> 75 Truques que Facilitam Sua Vida!
          </h1>

          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="space-y-6 md:w-[55%]">
              <p className="text-xl text-muted-foreground max-w-3xl">
                Descubra os truques que mais de 2.500 pessoas utlizam em casa!
              </p>

              {/* Benefícios principais */}
              <div className="hidden md:grid md:grid-cols-1 gap-6 my-12">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="font-medium">CONHEÇA TÉCNICAS DE COZINHA EM POUCOS DIAS!</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="font-medium">ECONOMIZE TEMPO EVITANDO DISPERDÍCIOS</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="font-medium">TÉCNICAS QUE VÃO TE SURPREENDER</span>
                </div>
              </div>
            </div>

            {/* Imagem à direita */}
            <div className="w-[85%] md:w-[45%] flex justify-center">
              <Image
                src={Kit75Truques}
                alt="Livro de receitas"
                className="max-w-full h-auto"
                width={450}
                height={350}
                priority
              />
            </div>
          </div>

          {/* Preço e CTA */}
          <div className="bg-card p-8 rounded-3xl shadow-lg max-w-md mx-auto">
            <div className="text-center space-y-2">
              <div className='hidden md:flex md:justify-center'>
                <span className="text-3xl font-bold text-primary">R$ 39,90</span>
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
                  router.push("/checkout");
                }}
              >
                QUERO DESCOBRIR
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
