'use client'

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Quando recebo os volumes após a compra?",
    answer: "Você receberá os 3 volumes diretamente no seu e-mail em até 5 minutos após o pagamento.",
  },
  {
    question: "Preciso ter experiência na cozinha para aproveitar?",
    answer: "Não! As técnicas são explicadas de forma prática e acessível até para iniciantes.",
  },
  {
    question: "Qual é a garantia?",
    answer: "Você tem 7 dias de garantia total. Se não gostar do conteúdo, devolvemos seu dinheiro.",
  },
  {
    question: "Como funciona o grupo VIP?",
    answer: "Após a compra, você receberá o link para entrar no grupo exclusivo com dicas semanais e suporte.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-gradient-to-r from-orange-100 to-orange-300 text-black">
      <div className="container-custom max-w-3xl mx-auto space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Dúvidas Frequentes
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-orange-300 rounded-xl bg-white/20 backdrop-blur">
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-4 text-left font-medium text-black/90"
              >
                <span>{faq.question}</span>
                <ChevronDown className={`transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-black/80 text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center text-sm text-black/60 mt-8">
          Ainda tem dúvidas? Fale com a gente pelo suporte!
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
