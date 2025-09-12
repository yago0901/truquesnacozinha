
declare global {
  interface Window {
    fbq?: (action: string, eventName: string, params?: Record<string, unknown>) => void;
  }
}

export interface PaymentData {
  status: string;
  point_of_interaction?: {
    transaction_data?: {
      qr_code_base64?: string;
      qr_code?: string;
    };
  };
}