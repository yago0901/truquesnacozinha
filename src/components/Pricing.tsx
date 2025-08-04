"use client";

import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

const Pricing = () => {
  const bonuses = [
    {
      title: "🎁 BÔNUS: Acesso ao Shakes com Way",
      value: "R$ 49,90",
      description: "Receitas exclusivas de shakes para complementar sua dieta",
    },
    {
      title: "🎁 BÔNUS: Grupo VIP WhatsApp",
      value: "R$ 49,90",
      description: "Acesso ao grupo exclusivo com suporte direto",
    },
  ];

  const comparison = [
    { feature: "Técnicas profissionais", included: [true, true, true] },
    { feature: "Acesso imediato", included: [true, true, true] },
    { feature: "Garantia de 30 dias", included: [true, true, true] },
    { feature: "Bônus exclusivos", included: [false, false, true] },
    { feature: "Grupo VIP WhatsApp", included: [false, false, true] },
    { feature: "Todos os volumes", included: [false, true, true] },
  ];

  const packages = [
    {
      name: "Aprendiz",
      description: "(Low Ticket - Gatilho de Entrada)",
      price: "R$ 14,90",
      originalPrice: "R$ 47,90",
      discount: "69% OFF",
      installments: "ou 2x de R$ 7,45",
      cta: "QUERO APENAS 1 VOLUME",
      featured: false,
      includes: "✅ Volume 1 (Técnicas Básicas)",
    },
    {
      name: "Combo Intermediário",
      description: "(Upsell 1 - Melhor Custo-Benefício)",
      price: "R$ 49,90",
      originalPrice: "R$ 143,70",
      discount: "65% OFF",
      installments: "ou 2x de R$ 24,95",
      cta: "QUERO OS 3 VOLUMES",
      featured: true,
      includes: "✅ Volumes 1 + 2 + 3 (Básico + Intermediário + Avançado)",
    },
    {
      name: "Combo Premium",
      description: "(Upsell 2 - Oferta Irrecusável)",
      price: "R$ 79,90",
      originalPrice: "R$ 297,00",
      discount: "73% OFF",
      installments: "ou 2x de R$ 39,95",
      cta: "QUERO TUDO COM BÔNUS",
      featured: false,
      includes: "✅ Volumes 1+2+3 + Acesso Shakes com Way + Grupo VIP WhatsApp",
    },
  ];

  return (
    <section id="pricing" className="section-padding bg-gradient-to-br from-primary/5 to-orange-100/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Escolha o Melhor Pacote para <span className="text-gradient">Você</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Quanto mais completo, maior sua economia e melhores resultados você terá!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`bg-card rounded-3xl p-6 shadow-xl border-2 ${
                pkg.featured ? "border-primary/50 relative" : "border-transparent"
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold">
                    🏆 MAIS POPULAR
                  </div>
                </div>
              )}

              <div className="text-center space-y-4">
                <h3 className="text-xl font-bold">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground">{pkg.description}</p>

                <div className="space-y-2 pt-2">
                  <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                  <div className="text-muted-foreground">
                    <span className="line-through text-sm">{pkg.originalPrice}</span>
                    <span className="ml-2 text-green-600 font-semibold text-sm">{pkg.discount}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{pkg.installments}</p>
                </div>

                <div className="py-4 border-y my-4">
                  <p className="text-sm font-medium">{pkg.includes}</p>
                </div>
              </div>

              {/* Comparação */}
              <div className="space-y-3 my-6">
                {comparison.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="text-sm">{item.feature}</span>
                    {item.included[index] ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <X className="w-4 h-4 text-red-500" />
                    )}
                  </div>
                ))}
              </div>

              <Button
                variant={pkg.featured ? "food" : "outline"}
                size="lg"
                className={`w-full ${pkg.featured ? "py-6 text-lg" : "py-4"} bg-orange-400 text-white cursor-pointer`}
                onClick={() => {
                  if (!pkg.cta) return;

                  if (pkg.cta === "QUERO APENAS 1 VOLUME") {
                    window.open("https://mpago.la/1Yx4XC5", "_blank", "noopener,noreferrer");
                  } else if (pkg.cta === "QUERO OS 3 VOLUMES") {
                    window.open("https://mpago.la/1Er6XxF", "_blank", "noopener,noreferrer");
                  } else if (pkg.cta === "QUERO TUDO COM BÔNUS") {
                    window.open("https://mpago.la/1H87DiT", "_blank", "noopener,noreferrer");
                  }
                }}
              >
                {pkg.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Bônus */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">
              Bônus Exclusivos <span className="text-gradient">para o Combo Premium</span>
            </h3>
            <p className="text-muted-foreground">
              Apenas quem escolhe o pacote completo recebe estes presentes especiais:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bonuses.map((bonus, index) => (
              <div key={index} className="bg-card rounded-xl p-5 border border-primary/20">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-sm">{bonus.title}</h4>
                  <span className="text-primary font-bold text-sm">{bonus.value}</span>
                </div>
                <p className="text-muted-foreground text-xs">{bonus.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Urgência */}
        <div className="text-center mt-16">
          <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-red-700 mb-3">⏰ Oferta por Tempo Limitado!</h3>
            <p className="text-red-600 mb-3 text-sm">
              Esses preços promocionais estão disponíveis apenas por pouco tempo. Não perca essa chance!
            </p>
            <div className="text-xl font-bold text-red-500 mb-4">⚠️ Vagas Limitadas!</div>
            <Button
              variant="food"
              size="lg"
              className="w-full text-lg py-4 bg-orange-400 text-white cursor-pointer"
              onClick={() => {
                // Adicione aqui qualquer lógica de pré-redirecionamento
                // Ex: Analytics, validações, etc.
                window.open("https://mpago.la/1Er6XxF", "_blank", "noopener,noreferrer");
              }}
            >
              🛒 QUERO OS 3 VOLUMES AGORA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
