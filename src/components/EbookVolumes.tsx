'use client'

import { Button } from "@/components/ui/button";
import { Book } from "lucide-react";
import { useRouter } from 'next/navigation';

const EbookVolumes = () => {
  const router = useRouter();
  const volumes = [
    {
      id: 1,
      pack: 'INICIANTE',
      title: "VOLUME 1: TRUQUES NA COZINHA",
      subtitle: "25 Técnicas Essenciais para uma Cozinha Mais Prática",
      description: "O guia definitivo que vai revolucionar sua rotina na cozinha!",
      color: "bg-green-100 text-green-700",
      icon: "📘",
      chapters: [
        "Dominando Ingredientes Difíceis (5 técnicas)",
        "Limpeza Inteligente (6 técnicas)",
        "Economia de Tempo (5 técnicas)",
        "Conservação Perfeita (4 técnicas)",
        "Cortes e Manuseio (5 técnicas)",
      ],
      highlights: [
        "Descascar alho em segundos",
        "Cebola sem lágrimas",
        "Ovos cozidos perfeitos",
        "Panelas sem gordura em 3 min",
      ],
    },
    {
      id: 2,
      pack: 'AJUDANTE',
      title: "VOLUME 2: TRUQUES NA COZINHA",
      subtitle: "25 Técnicas para Economizar Tempo e Evitar Sujeira",
      description: "Para quem quer elevar o nível e dominar técnicas de cozinha!",
      color: "bg-orange-100 text-orange-700",
      icon: "📗",
      chapters: [
        "Carnes e Ovos (5 técnicas)",
        "Grãos e Massas (5 técnicas)",
        "Ervas e Temperos (5 técnicas)",
        "Doces e Sobremesas (5 técnicas)",
        "Soluções Inteligentes (5 técnicas)",
      ],
      highlights: [
        "Omelete fofo de hotel",
        "Arroz soltinho garantido",
        "Cheesecake sem rachadura",
        "Consertar comida salgada demais",
      ],
    },
    {
      id: 3,
      pack: 'CHEF',
      title: "VOLUME 3: TRUQUES NA COZINHA",
      subtitle: "25 Técnicas para uma Refeição Saborosa e de Qualidade",
      description: "Faça seu tempo preciso na cozinha valer a pena e ser reconhecido",
      color: "bg-purple-100 text-purple-700",
      icon: "📙",
      chapters: [
        "Proteínas e Pontos Perfeitos (5 técnicas)",
        "Massas e Pães Artesanais (5 técnicas)",
        "Molhos e Bases Clássicas (5 técnicas)",
        "Sobremesas e Acabamentos (5 técnicas)",
        "Toques de Chef e Apresentação (5 técnicas)",
      ],
      highlights: [
        "Selar carnes suculentas",
        "Pão caseiro com casca crocante",
        "Molho holandês estável",
        "Montagem de pratos profissional",
      ],
    },
  ];

  return (
    <section id="volumes" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Conheça os <span className="text-gradient">3 Volumes</span> Completos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Uma jornada completa por diversas técnicas para seu dia-a-dia na cozinha. Cada volume foi cuidadosamente elaborado para elevar suas
            habilidades na cozinha te monstrando o passo a passo prático.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {volumes.map((volume) => (
            <div key={volume.id} className="bg-card rounded-3xl p-8 card-hover">
              <div className="space-y-6">
                {/* Header */}
                <div className="text-center space-y-4">
                  <div
                    className={`inline-flex items-center ${volume.color} px-4 py-2 rounded-full text-sm font-medium`}
                  >
                    <span className="mr-2 text-lg">{volume.icon}</span>
                    {volume.pack}
                  </div>
                  <h3 className="text-xl font-bold">{volume.title}</h3>
                  <p className="text-primary font-medium">{volume.subtitle}</p>
                  <p className="text-muted-foreground text-sm">{volume.description}</p>
                </div>

                {/* Capítulos */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm uppercase tracking-wide">Capítulos:</h4>
                  <ul className="space-y-2">
                    {volume.chapters.map((chapter, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm">
                        <Book className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{chapter}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Destaques */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm uppercase tracking-wide">Você vai aprender:</h4>
                  <ul className="space-y-1">
                    {volume.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Não Perca Mais Tempo na Cozinha!</h3>
            <p className="text-muted-foreground mb-6">
              Tenha acesso aos 3 volumes completos com 75 técnicas que vão transformar sua experiência na cozinha para
              sempre.
            </p>
            <Button
              variant="food"
              size="lg"
              className="px-12 bg-orange-400 text-white"
              onClick={() => router.push("/checkout")}
            >
              GARANTIR MEUS VOLUMES
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EbookVolumes;
