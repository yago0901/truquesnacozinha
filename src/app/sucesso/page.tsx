"use client";

import Header from "@/components/Header";
import "../globals.css";
import { CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { PaymentData } from './tipes';


export default function Page() {
  const searchParams = useSearchParams();
  const paymentId = searchParams.get("id");

  const [payment, setPayment] = useState<PaymentData | null>(null);
 
  const [loading, setLoading] = useState(false);

  // 🔍 Consulta os detalhes do pagamento
  useEffect(() => {
    if (!paymentId) return;

    const fetchPayment = async () => {
      try {
        const res = await fetch(`/api/payment-status?id=${paymentId}`);
        const data = await res.json();
        setPayment(data);
        setLoading(false);

        // ✅ dispara pixel somente se aprovado
        if (data.status === "approved" && window.fbq) {
          window.fbq("track", "Purchase", {
            value: 14.9,
            currency: "BRL",
          });
        }
      } catch (error) {
        console.error("Erro ao buscar status do pagamento:", error);
      }
    };

    fetchPayment();

    // ⏳ faz polling se ainda estiver pendente
    const interval = setInterval(fetchPayment, 5000);
    return () => clearInterval(interval);
  }, [paymentId]);

  if (loading) {
    return <div className="p-10 text-center">Carregando pagamento...</div>;
  }

  // Caso seja PIX e esteja pendente
  if (payment?.status === "pending" && payment?.point_of_interaction?.transaction_data?.qr_code_base64) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center space-y-6">
        <h1 className="text-2xl font-bold">Aguardando pagamento via PIX</h1>
        <p>Escaneie o QRCode abaixo para realizar o pagamento:</p>
        <Image
          src={`data:image/png;base64,${payment.point_of_interaction.transaction_data.qr_code_base64}`}
          alt="QR Code PIX"
          width={250}
          height={250}
        />
        <p className="text-sm text-gray-600 break-all max-w-md">
          {payment.point_of_interaction.transaction_data.qr_code}
        </p>
        <p className="mt-4 text-orange-500">
          Assim que o pagamento for confirmado, liberaremos seu acesso automaticamente 🎉
        </p>
      </div>
    );
  }

  // Caso já esteja aprovado
  if (payment?.status === "approved") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 to-orange-100/20">
        <Header />

        <div className="container-custom flex flex-col items-center justify-center text-center pt-32 pb-20 space-y-8">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-green-100 shadow-md">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-800">🎉 Compra confirmada!</h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Obrigado por adquirir o <span className="font-semibold text-primary">Kit 75 Truques</span>! Seu acesso foi
            enviado para o e-mail cadastrado.
          </p>

          <div className="bg-card shadow-lg rounded-3xl p-6 md:p-10 max-w-lg w-full space-y-4">
            <p className="text-base text-gray-700">✅ Acesso imediato aos 3 volumes digitais.</p>
            <p className="text-base text-gray-700">📩 Confira seu e-mail (inclusive a caixa de spam).</p>
            <p className="text-base text-gray-700">
              🤝 Em caso de dúvidas, entre em contato com nossa equipe de suporte.
            </p>
          </div>

          <a
            href="https://chat.whatsapp.com/seu-grupo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-400 text-white px-8 py-4 rounded-2xl shadow-lg text-lg font-medium hover:bg-orange-500 transition-all"
          >
            👉 Entrar no grupo exclusivo
          </a>

          <p className="text-sm text-muted-foreground">⚡ Aproveite ao máximo sua jornada na cozinha!</p>
        </div>
      </div>
    );
  }

  return <div className="p-10 text-center">Pagamento não encontrado ou inválido.</div>;
}
