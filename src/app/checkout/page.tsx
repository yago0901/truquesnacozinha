"use client";

import Header from "@/components/Header";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { Testimonial } from "./tipes";

export default function Page() {
  const brickContainerRef = useRef(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPack, setSelectedPack] = useState(1);
  const [selectedVolume, setSelectedVolume] = useState(1);
  const [price, setPrice] = useState(14.9);
  const [productId, setProductId] = useState("A");

  // Dados de exemplo para o carrossel
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Maria Silva",
      comment: "Produto excelente, superou minhas expectativas. A qualidade é impressionante e o suporte foi incrível!",
      timeAgo: "há 2 semanas",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      name: "João Santos",
      comment:
        "Estou muito satisfeito com a qualidade. Com certeza comprarei novamente em breve! Recomendo para todos.",
      timeAgo: "há 1 mês",
      color: "from-blue-500 to-teal-400",
    },
    {
      id: 3,
      name: "Ana Costa",
      comment: "Incrível como esse produto mudou minha rotina. Fácil de usar e entregou tudo que promete!",
      timeAgo: "há 3 dias",
      color: "from-amber-500 to-orange-500",
    },
  ];

  const getPrice = (volumeId: number) => {
    switch (volumeId) {
      case 1:
        return 14.9;
      case 2:
        return 17.9;
      case 3:
        return 19.9;
      default:
        return 14.9;
    }
  };

  // Opções de volume com preços
  const volumeOptions = [
    { id: 1, label: "INICIANTE", price: getPrice(1), description: "Experimente nosso produto" },
    { id: 2, label: "AJUDANTE", price: 39.9, description: "Leve 2 com 10% de desconto" },
    { id: 3, label: "CHEF", price: 49.9, description: "Leve 3 com 15% de desconto" },
  ];

  const getProductId = (packId: number, volume: number) => {
    if (packId === 1) {
      if (volume === 1) return "A";
      if (volume === 2) return "B";
      if (volume === 3) return "C";
    }
    if (packId === 2) return "D";
    if (packId === 3) return "E";
    return "A";
  };

  useEffect(() => {
    const loadBrick = async () => {
      if (!window.MercadoPago) return;

      setIsLoading(true);
      const res = await fetch("/api/createPreference", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
      });
      const { id: preferenceId } = await res.json();

      const mp = new window.MercadoPago(process.env.NEXT_PUBLIC_MP_PUBLIC_KEY!, {
        locale: "pt-BR",
      });

      const bricksBuilder = mp.bricks();

      bricksBuilder.create("payment", "brick_container", {
        initialization: {
          amount: parseInt(price.toFixed(2)),
          preferenceId: preferenceId,
          mercadoPago: mp,
        },
        customization: {
          paymentMethods: {
            ticket: "all",
            bankTransfer: "all",
            creditCard: "all",
            prepaidCard: "all",
            debitCard: "all",
            mercadoPago: "all",
          },
        },
        callbacks: {
          onReady: () => {
            console.log("Brick pronto");
            setIsLoading(false);
          },
          onSubmit: () => {
            return;
          },
          onError: (error: unknown) => {
            console.error("Erro ao criar brick:", error);
            setIsLoading(false);
          },
        },
      });
    };

    setTimeout(loadBrick, 500);
  }, [productId, price]);

  // Efeito para atualizar o preço quando o volume muda
  useEffect(() => {
    if (selectedPack === 1) {
      setPrice(getPrice(selectedVolume)); // usa volume para aprendiz
    } else {
      const selectedOption = volumeOptions.find((option) => option.id === selectedPack);
      if (selectedOption) {
        setPrice(selectedOption.price!);
      }
    }
    setProductId(getProductId(selectedPack, selectedVolume));
  }, [selectedPack, selectedVolume]);

  // Efeito para rotacionar os depoimentos automaticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <>
      <Script
        src="https://sdk.mercadopago.com/js/v2"
        strategy="afterInteractive"
        onLoad={() => {
          console.log("Mercado Pago SDK carregado");
        }}
      />
      <div className="min-h-screen bg-gray-50">
        <Header />

        {/* Área de Checkout */}
        <div className="container mx-auto px-4 py-8 mt-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Coluna da Esquerda - Conteúdo Informativo */}
            <div className="w-full lg:w-[60%] flex flex-col gap-8">
              {/* Seção de Seleção de Volume */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Escolha o seu pacote</h2>
                <p className="text-gray-600 mb-6">Selecione a quantidade que melhor atende suas necessidades:</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {volumeOptions.map((option) => (
                    <div
                      key={option.id}
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                        selectedPack === option.id
                          ? "border-purple-500 bg-purple-50"
                          : "border-gray-200 hover:border-purple-300"
                      }`}
                      onClick={() => setSelectedPack(option.id)}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-gray-800">{option.label}</h3>
                        {option.id === 1 && (
                          <select
                            value={selectedVolume}
                            onChange={(e) => setSelectedVolume(parseInt(e.target.value))}
                            className="border border-gray-300 rounded px-2 py-1 text-sm"
                          >
                            <option value={1}>Volume 1</option>
                            <option value={2}>Volume 2</option>
                            <option value={3}>Volume 3</option>
                          </select>
                        )}
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            selectedPack === option.id ? "bg-purple-500 border-purple-500" : "border-gray-300"
                          }`}
                        >
                          {selectedPack === option.id && (
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{option.description}</p>
                      <p className="text-lg font-bold text-purple-600">
                        R$ {option.id === 1 ? getPrice(selectedVolume).toFixed(2) : option.price.toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Resumo do Pedido */}
                <div className="border-t border-gray-200 pt-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Resumo do Pedido</h3>

                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Produto</span>
                    <span className="font-medium">
                      {volumeOptions.find((o) => o.id === selectedPack)?.label}
                      {selectedPack === 1 && ` - Volume ${selectedVolume}`}
                    </span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">R$ {price.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Frete</span>
                    <span className="font-medium">Grátis</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg mt-3 pt-3 border-t border-gray-200">
                    <span>Total</span>
                    <span className="text-purple-600">R$ {price.toFixed(2)}</span>
                  </div>
                </div>

                <div className="mt-6 lg:flex gap-4">
                  <h3 className="font-semibold mb-2">Benefícios inclusos:</h3>
                  <ul className="space-y-2 flex gap-2 ">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">Garantia de 12 meses</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">Suporte 24/7</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">Entrega expressa</span>
                    </li>
                    <li className="flex items-center"></li>
                  </ul>
                </div>
              </div>

              {/* Seção de Depoimentos com Vídeos - Carrossel */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">Veja o que nossos clientes dizem</h2>

                <div className="relative">
                  <div className="overflow-hidden">
                    <div
                      className="flex transition-transform duration-500 ease-in-out"
                      style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                    >
                      {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="w-full flex-shrink-0 px-2">
                          <div className="flex flex-col md:flex-row gap-6 items-start p-4">
                            {/* Área do Vídeo (placeholder) */}
                            <div className="w-full md:w-2/5 aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                              <div className="text-center">
                                <svg
                                  className="w-12 h-12 text-gray-500 mx-auto mb-2"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                <p className="text-sm text-gray-600">Depoimento em vídeo</p>
                              </div>
                            </div>

                            {/* Texto do Depoimento (alinhado à direita) */}
                            <div className="w-full md:w-3/5">
                              <div className="flex items-center mb-4">
                                <div
                                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center mr-3`}
                                >
                                  <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                                </div>
                                <div>
                                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                                  <p className="text-sm text-gray-500">{testimonial.timeAgo}</p>
                                </div>
                              </div>
                              <p className="text-gray-700 text-lg italic">"{testimonial.comment}"</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Botões de navegação */}
                  <button
                    onClick={() =>
                      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
                    }
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
                  >
                    <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
                  >
                    <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {/* Indicadores */}
                  <div className="flex justify-center mt-6 space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-3 h-3 rounded-full ${
                          index === currentTestimonial ? "bg-purple-600" : "bg-purple-300"
                        }`}
                        aria-label={`Ir para depoimento ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna da Direita - Checkout (Brick) */}
            <div className="w-full lg:w-[40%]">
              <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Finalize seu pedido</h2>
                <p className="text-gray-600 ">Preencha os dados abaixo para concluir sua compra com segurança.</p>

                <div id="brick_container" key={productId} ref={brickContainerRef} className="min-h-[400px]">
                  {isLoading && (
                    <div className="flex flex-col items-center justify-center h-64">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mb-4"></div>
                      <p className="text-gray-600">Carregando checkout...</p>
                    </div>
                  )}
                </div>

                <div className="text-center text-sm text-gray-500">
                  <p className="flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Sua informação está protegida com criptografia
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="font-semibold text-gray-800 mb-4">Por que comprar conosco?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">Entrega rápida para todo o Brasil</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">Compra 100% segura</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">Atendimento especializado</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
