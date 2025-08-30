"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

const FinalCTA = () => {
  const router = useRouter();
  return (
    <section className="bg-gradient-to-r from-orange-100 to-orange-300 text-black">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Pare de Perder Tempo e Dinheiro na Cozinha.{" "}
          </h2>

          <div className="space-y-6 text-lg">
            <p className="text-black/90">
              Imagine acordar amanhã sabendo exatamente como preparar qualquer prato em metade do tempo, sem desperdício
              e com resultados profissionais.
            </p>
            <p className="text-black/90">
              Seus familiares e amigos vão ficar impressionados com suas habilidades. Você terá mais tempo livre e
              economia garantida no orçamento doméstico.
            </p>
          </div>

          {/* Últimos benefícios */}
          <div className="grid md:grid-cols-3 gap-6 my-12">
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold mb-2">Acesso Imediato</h3>
              <p className="text-black/80 text-sm">Receba os 3 volumes no seu email em até 5 minutos</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="font-bold mb-2">Risco Zero</h3>
              <p className="text-black/80 text-sm">7 dias de garantia total ou seu dinheiro de volta</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="font-bold mb-2">Suporte VIP</h3>
              <p className="text-black/80 text-sm">Grupo exclusivo com dicas e apoio da comunidade</p>
            </div>
          </div>

          {/* CTA Final */}
          <div className="space-y-6">
            <div className="bg-white/30 border border-white/50 rounded-3xl p-8 backdrop-blur shadow-lg">
              <div className="space-y-6 text-center">
                <div className="text-2xl font-semibold text-black/80">
                  De <span className="line-through text-red-600">R$: 297,00</span> por
                </div>
                <div className="text-4xl font-extrabold text-yellow-500">Apenas R$ 49,90</div>

                <p className="text-black/90 text-sm">3 volumes • 75 técnicas • Bônus exclusivos • Garantia total</p>

                <Button
                  size="lg"
                  className="bg-orange-400 text-white hover:bg-black/90 text-xl py-6 px-12 w-full md:w-auto transition"
                  onClick={() => {
                   router.push("/checkout");
                  }}
                >
                  🚀 QUERO AS TÉCNICAS
                </Button>

                <p className="text-black/70 text-sm italic">
                  ⏰ Oferta expira em algumas horas • 🔒 Compra 100% segura
                </p>
              </div>
            </div>
          </div>

          {/* Último empurrão */}
          <div className="text-center space-y-4">
            <p className="text-black italic">
              &quot;A diferença entre quem tem sucesso na cozinha e quem não tem são apenas as técnicas certas. Você
              está a um clique de descobrir todas elas.&quot;
            </p>
            <div className="text-sm text-black">
              Mais de 9.000 pessoas já transformaram suas cozinhas. Seja a próxima!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
