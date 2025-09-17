// Adicione no início do arquivo
export interface WebhookData {
  type: string;
  data: {
    id: string;
  };
}

export interface PaymentStatus {
  status: string;
  external_reference?: string;
}

// Interfaces para tipagem
export interface WebhookBody {
  type: string;
  data: {
    id: string;
  };
}

export interface PaymentInfo {
  id: number;
  status: string;
  transaction_amount?: number;
  payer?: {
    email?: string;
    number?: string;
  };
  external_reference?: string;
}

export interface PaymentStatusHandlers {
  [key: string]: (payment: PaymentInfo) => Promise<void>;
}