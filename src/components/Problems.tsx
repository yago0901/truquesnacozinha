"use client";

import { Clock, DollarSign, Heart, Users } from "lucide-react";
import { Button } from "./ui/button";

const Problems = () => {
  const problems = [
    {
      icon: <Clock className="w-8 h-8 text-red-500" />,
      title: "Perdendo Tempo Demais",
      description: "Horas na cozinha preparando refeições simples, sem saber os atalhos que os chefs usam.",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-red-500" />,
      title: "Desperdiçando Comida",
      description: "Ingredientes estragando, alimentos mal aproveitados e dinheiro jogado fora.",
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Resultados Frustrantes",
      description: "Pratos que não saem como esperado, texturas erradas e sabores sem graça.",
    },
    {
      icon: <Users className="w-8 h-8 text-red-500" />,
      title: "Vergonha de Cozinhar",
      description: "Evitando cozinhar para visitas por medo de errar ou não impressionar.",
    },
  ];

  const solutions = [
    {
      icon: <Clock className="w-8 h-8 text-green-500" />,
      title: "Economize 50% do Tempo",
      description: "Técnicas que aceleram cada etapa do preparo, da organização ao prato pronto.",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-500" />,
      title: "Zero Desperdício",
      description: "Aproveite 100% dos alimentos com métodos de conservação e reutilização inteligentes.",
    },
    {
      icon: <Heart className="w-8 h-8 text-green-500" />,
      title: "Resultados Profissionais",
      description: "Texturas perfeitas, sabores equilibrados e apresentação que impressiona.",
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: "Confiança Total",
      description: "Cozinhe com segurança, sabendo que o resultado será sempre excepcional.",
    },
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Quantas Horas Você Já <span className="text-gradient">Perdeu</span> na Cozinha?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pare de se frustrar com problemas que têm solução simples. Veja como os nossos ebooks vão transformar sua
            experiência:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Problemas */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-red-600 mb-4">❌ ANTES</h3>
              <p className="text-muted-foreground">Os problemas que você enfrenta hoje:</p>
            </div>
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start space-x-4 bg-red-50 p-4 rounded-xl">
                  {problem.icon}
                  <div>
                    <h4 className="font-bold text-red-700 mb-1">{problem.title}</h4>
                    <p className="text-red-600 text-sm">{problem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soluções */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-green-600 mb-4">✅ DEPOIS</h3>
              <p className="text-muted-foreground">Sua nova realidade na cozinha:</p>
            </div>
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start space-x-4 bg-green-50 p-4 rounded-xl">
                  {solution.icon}
                  <div>
                    <h4 className="font-bold text-green-700 mb-1">{solution.title}</h4>
                    <p className="text-green-600 text-sm">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Urgência */}
        <div className="flex flex-wrap justify-center gap-4 mt-16 px-4 w-full">
          {/* Card 1 */}
          <div className="border-2 border-orange-300 rounded-3xl p-6 w-full max-w-xs">
            <h3 className="text-xl font-bold mb-3">🔪 Truque: Não Chorar ao Cortar Cebola</h3>
            <p className="text-sm text-muted-foreground mb-4">
              &quot;Congele a cebola por 15 minutos antes de cortar!&quot; - Volume 1
            </p>
            <Button
              size="sm"
              className="w-full bg-orange-100 hover:bg-orange-200 text-orange-700 border border-orange-300"
              onClick={() => window.open("https://mpago.la/1Er6XxF", "_blank")}
            >
              Adquirir Agora
            </Button>
          </div>

          {/* Card 2 */}
          <div className="border-2 border-amber-300 rounded-3xl p-6 w-full max-w-xs">
            <h3 className="text-xl font-bold mb-3">🍰 Truque: Teste do Bolo Perfeito</h3>
            <p className="text-sm text-muted-foreground mb-4">
              &quot;Use palito de dente - se sair limpo está pronto!&quot; - Volume 2
            </p>
            <Button
              size="sm"
              className="w-full bg-amber-100 hover:bg-amber-200 text-amber-700 border border-amber-300"
              onClick={() => window.open("https://mpago.la/1Er6XxF", "_blank")}
            >
              Acesso Imediato
            </Button>
          </div>

          {/* Card 3 */}
          <div className="border-2 border-red-300 rounded-3xl p-6 w-full max-w-xs">
            <h3 className="text-xl font-bold mb-3">🍯 Truque: Caramelo Perfeito</h3>
            <p className="text-sm text-muted-foreground mb-4">&quot;Não mexa até dourar - segredo dos chefs!&quot; - Volume 3</p>
            <Button
              size="sm"
              className="w-full bg-red-100 hover:bg-red-200 text-red-700 border border-red-300"
              onClick={() => window.open("https://mpago.la/1Er6XxF", "_blank")}
            >
              Quero Todos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;
