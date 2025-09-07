// Adicione no início do arquivo
export interface PaymentRequest {
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
  issuer_id?: number;
  pix?: unknown;
}

export interface PaymentResponse {
  status: string;
  id?: string;
  error?: string;
}