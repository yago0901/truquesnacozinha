export interface Testimonial {
  id: number;
  name: string;
  comment: string;
  timeAgo: string;
  color: string;
  url: string;
}

export interface MercadoPagoConstructor {
  new (publicKey: string, options: { locale: string }): {
    bricks(): {
      create(
        name: string,
        container: string,
        options: {
          initialization: { amount: number; preferenceId: string; mercadoPago: Record<string, unknown> };
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


// Interface para os dados do pagamento
export interface PaymentFormData {
  payment_method_id?: string;
  paymentMethod?: {
    id: string;
  };
  paymentType?: string;
  token?: string;
  card?: {
    token: string;
  };
  payment_method_option?: {
    token?: string;
    issuer_id?: string;
  };
  installments?: number;
  issuer_id?: string;
  payer?: {
    email: string;
    identification?: {
      type: string;
      number: string;
    };
  };
  pix?: unknown;
}

// Interface para o payload do pagamento
export interface PaymentPayload {
  transaction_amount: number;
  description: string;
  payment_method_id?: string;
  payer: {
    email: string;
    identification?: {
      type: string;
      number: string;
    };
  };
  token?: string;
  installments?: number;
  issuer_id?: string;
  pix?: unknown;
}

// Interface para a resposta da API de preferência
export interface PreferenceResponse {
  id: string;
}

// Interface para a resposta do processamento de pagamento
export interface PaymentResponse {
  status: "approved" | "pending" | "rejected";
  id?: string;
  error?: string;
}