"use client";

import Header from "@/components/Header";
import Script from "next/script";
import { useEffect, useRef } from "react";

interface MercadoPagoConstructor {
  new (publicKey: string, options: { locale: string }): {
    bricks(): {
      create(
        name: string,
        container: string,
        options: {
          initialization: { amount: number; preferenceId: string ; mercadoPago: Record<string, unknown>;};
          customization?: {
            paymentMethods?: {
              creditCard?: string;
              mercadoPago?: string;
              bankTransfer?: string;
              prepaidCard?: string;
              debitCard?: string;
              ticket?: string;
              pix?: string;
            };
          };
          callbacks?: {
            onReady?: () => void;
            onSubmit?: () => void;
            onError?: (error: unknown) => void;
          };
        }
      ): void;
    };
  };
}

declare global {
  interface Window {
    MercadoPago: MercadoPagoConstructor;
  }
}

export default function Page() {
  const brickContainerRef = useRef(null);

  useEffect(() => {
    const loadBrick = async () => {
      if (!window.MercadoPago) return;

      const res = await fetch("/api/createPreference", { method: "POST" });
      const { id: preferenceId } = await res.json();

      const mp = new window.MercadoPago(process.env.NEXT_PUBLIC_MP_PUBLIC_KEY!, {
        locale: "pt-BR",
      });

      const bricksBuilder = mp.bricks();

      bricksBuilder.create("payment", "brick_container", {
        initialization: {
          amount: 49.9,
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
          },
          onSubmit: () => {
            return;
          },
          onError: (error: unknown) => {
            console.error("Erro ao criar brick:", error);
          },
        },
      });
    };

    setTimeout(loadBrick, 500);
  }, []);

  return (
    <>
      <Script
        src="https://sdk.mercadopago.com/js/v2"
        strategy="afterInteractive"
        onLoad={() => {
          console.log("Mercado Pago SDK carregado");
        }}
      />
      <div>
        <Header />
        <div className="mt-20">
          <div id="brick_container" ref={brickContainerRef}></div>
        </div>
      </div>
    </>
  );
}
