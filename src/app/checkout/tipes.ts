export interface Testimonial {
  id: number;
  name: string;
  comment: string;
  timeAgo: string;
  color: string;
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
