import Image from "next/image";
import Maria from "../assets/maria.png";
import Ana from "../assets/ana.png";
import Joao from "../assets/joao.png";

const EbookTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "Incrível! Em apenas 2 semanas aplicando as técnicas do Volume 1, já reduzi pela metade o tempo que passo na cozinha. O truque da cebola sem lágrimas mudou minha vida!",
      name: "Maria Silva",
      title: "Mãe de 3 filhos",
      avatar: Maria,
      rating: 5,
    },
    {
      id: 2,
      quote:
        "Sempre tive medo de cozinhar para visitas. Depois dos 3 volumes, sirvo jantares que parecem de restaurante. Meus amigos não acreditam que eu fiz!",
      name: "João Santos",
      title: "Advogado",
      avatar: Joao,
      rating: 5,
    },
    {
      id: 3,
      quote:
        "Economizei mais de R$ 300 por mês só evitando desperdício! As técnicas de conservação do Volume 1 são ouro puro. Recomendo para toda família!",
      name: "Ana Costa",
      title: "Professora",
      avatar: Ana,
      rating: 5,
    },
  ];

  const stats = [
    { number: "15.000+", label: "Pessoas Transformadas" },
    { number: "4.9/5", label: "Avaliação Média" },
    { number: "50%", label: "Menos Tempo na Cozinha" },
    { number: "100%", label: "Satisfação Garantida" },
  ];

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mais de <span className="text-gradient">15.000 Pessoas</span> Já Transformaram Suas Cozinhas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Veja o que nossos leitores estão dizendo sobre os resultados que conseguiram:
          </p>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Depoimentos */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-card rounded-3xl p-6 card-hover">
              <div className="space-y-4">
                {/* Rating */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ⭐
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-muted-foreground leading-relaxed">"{testimonial.quote}"</blockquote>

                {/* Author */}
                <div className="flex items-center space-x-3 pt-4 border-t border-border">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                    width={300}
                    height={200}
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-muted-foreground text-sm">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Garantia */}
        <div className="mt-16 text-center">
          <div className="bg-green-50 border-2 border-green-200 rounded-3xl p-8 max-w-2xl mx-auto">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-2xl font-bold text-green-700 mb-4">TESTE E APROVE</h3>
            <p className="text-green-600">
              Se os Truques na Cozinha não te ajudarem no processo de cozinhar do dia-a-dia e em 7 dias você não estiver
              satisfeito, devolvemos 100% do seu investimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EbookTestimonials;
