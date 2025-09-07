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