'use client'

import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-orange-200 to-orange-500 text-black">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Pare de Perder Tempo e Dinheiro na Cozinha.{" "}
            <span className="text-yellow-200">Sua Transformação Começa Agora!</span>
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
            <div className="bg-white/20 rounded-3xl p-8 backdrop-blur">
              <div className="space-y-4">
                <div className="text-3xl font-bold">
                  De R$ 297 por <span className="text-yellow-200">apenas R$ 97</span>
                </div>
                <p className="text-white/90">3 volumes • 75 técnicas • Bônus exclusivos • Garantia total</p>
                <Button
                  size="lg"
                  className="bg-orange-400 text-primary hover:bg-white/90 text-xl py-6 px-12 w-full md:w-auto"
                  onClick={() => {
                    // Adicione aqui qualquer lógica de pré-redirecionamento
                    // Ex: Analytics, validações, etc.
                    window.open("https://mpago.la/1Er6XxF", "_blank", "noopener,noreferrer");
                  }}
                >
                  🚀 SIM, QUERO TRANSFORMAR MINHA COZINHA AGORA
                </Button>
                <p className="text-white/70 text-sm">⏰ Oferta expira em algumas horas • 🔒 Compra 100% segura</p>
              </div>
            </div>
          </div>

          {/* Último empurrão */}
          <div className="text-center space-y-4">
            <p className="text-white/80 italic">
              "A diferença entre quem tem sucesso na cozinha e quem não tem são apenas as técnicas certas. Você está a
              um clique de descobrir todas elas."
            </p>
            <div className="text-sm text-white/60">
              Mais de 15.000 pessoas já transformaram suas cozinhas. Seja a próxima!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
