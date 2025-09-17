import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { MercadoPagoConfig, Payment } from "mercadopago";
import { PaymentInfo, PaymentStatusHandlers, WebhookBody } from "./tipes";
import { sendProductEmail } from "@/services/emailSender";

// Configure suas credenciais do Mercado Pago
const MP_WEBHOOK_SECRET = process.env.MP_WEBHOOK_SECRET!;
const MP_ACCESS_TOKEN = process.env.MP_ACCESS_TOKEN!;

const client = new MercadoPagoConfig({
  accessToken: MP_ACCESS_TOKEN,
});

export async function OPTIONS(req: NextRequest) {
  const response = NextResponse.json({}, { status: 200 });
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type, x-signature, x-signature-ts");
  return response;
}

export async function POST(req: NextRequest) {
  try {
    if (req.method !== "POST") {
      return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
    }

    const contentType = req.headers.get("content-type");
    if (contentType !== "application/json") {
      return NextResponse.json({ error: "Invalid content type" }, { status: 400 });
    }
    console.log("Webhook received - Headers:", {
      signature: req.headers.get("x-signature"),
      signatureTs: req.headers.get("x-signature-ts"),
      contentType: req.headers.get("content-type"),
    });
    const rawBody = await req.text();
    console.log("Raw body length:", rawBody.length);
    // Ler o corpo da requisição

    // Verificar assinatura do webhook
    /*const signature = req.headers.get("x-signature");
    const signatureTs = req.headers.get("x-signature-ts");

    if (!signature || !signatureTs) {
      return NextResponse.json({ error: "Missing signature headers" }, { status: 407 });
    }
      // Verificar se o secret está configurado
    if (!MP_WEBHOOK_SECRET) {
      console.error("MP_WEBHOOK_SECRET not configured");
      return NextResponse.json({ error: "Webhook secret not configured" }, { status: 500 });
    }

    const isValid = verifySignature(rawBody, signatureTs, signature, MP_WEBHOOK_SECRET);

    if (!isValid) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }*/

    const body: WebhookBody = JSON.parse(rawBody);
    console.log("Parsed body:", body);

    // Processar apenas webhooks de pagamento
    const { type, data } = body;

    if (type === "payment") {
      await handlePaymentWebhook(data.id);
    } else {
      console.log("Webhook type not handled:", type);
    }
    const response = NextResponse.json({ received: true, message: "Webhook processed successfully" }, { status: 200 });
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("X-Webhook-Processed", "true");
    return response;
  } catch (error) {
    console.error("Webhook error:", error);
    const errorResponse = NextResponse.json({ error: "Internal server error" }, { status: 500 });
    errorResponse.headers.set("Access-Control-Allow-Origin", "*");
    return errorResponse;
  }
}

// Função para verificar a assinatura
function verifySignature(payload: string, ts: string, signature: string, secret: string): boolean {
  try {
    const receivedSignature = signature.startsWith("v1=") ? signature.substring(3) : signature;
    const data = `${ts}.${payload}`;
    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(data)
      .digest("hex");

    // Comparação segura contra timing attacks
    return crypto.timingSafeEqual(
      Buffer.from(receivedSignature),
      Buffer.from(expectedSignature)
    );
  } catch (error) {
    console.error("Error verifying signature:", error);
    return false;
  }
}

// Função para processar pagamentos
async function handlePaymentWebhook(paymentId: string) {
  try {
    // Buscar informações detalhadas do pagamento
    const paymentInfo = await fetchPaymentDetails(paymentId);

    console.log("Payment webhook received:", {
      id: paymentInfo.id,
      status: paymentInfo.status,
      amount: paymentInfo.transaction_amount,
      payer: paymentInfo.payer?.email,
    });

    // Mapeamento de handlers para cada status
    const statusHandlers: PaymentStatusHandlers = {
      approved: handleApprovedPayment,
      pending: handlePendingPayment,
      rejected: handleRejectedPayment,
      refunded: handleRefundedPayment,
      cancelled: handleCancelledPayment,
      in_process: handleInProcessPayment,
      charged_back: handleChargebackPayment,
    };

    const handler = statusHandlers[paymentInfo.status];
    if (handler) {
      await handler(paymentInfo);
    } else {
      console.log("Status não tratado:", paymentInfo.status);
    }
  } catch (error) {
    console.error("Error handling payment webhook:", error);
  }
}

// Buscar detalhes do pagamento na API do Mercado Pago
async function fetchPaymentDetails(paymentId: string): Promise<PaymentInfo> {
  const payment = new Payment(client);

  try {
    const paymentInfo = await payment.get({ id: paymentId });
    return paymentInfo as PaymentInfo;
  } catch (error) {
    console.error("Error fetching payment details:", error);
    throw error;
  }
}

// Funções para diferentes status de pagamento
async function handleApprovedPayment(payment: PaymentInfo) {
  console.log("Payment approved:", payment.id);

  // Enviar e-mail com o produto
  if (payment.payer?.email) {
    const emailSent = await sendProductEmail(payment.payer.email, payment);

    if (emailSent) {
      console.log("E-mail de confirmação enviado para:", payment.payer.email);
    } else {
      console.error("Falha ao enviar e-mail para:", payment.payer.email);
    }
  }
}

async function handlePendingPayment(payment: PaymentInfo) {
  console.log("Payment pending:", payment.id);
  // Aguardar confirmação do pagamento
  // await updateOrderStatus(payment.external_reference, 'pending');
}

async function handleRejectedPayment(payment: PaymentInfo) {
  console.log("Payment rejected:", payment.id);
  // Notificar usuário sobre pagamento rejeitado
  // await updateOrderStatus(payment.external_reference, 'rejected');
}

async function handleRefundedPayment(payment: PaymentInfo) {
  console.log("Payment refunded:", payment.id);
  // Remover acesso ao produto
  // await updateOrderStatus(payment.external_reference, 'refunded');
}

async function handleCancelledPayment(payment: PaymentInfo) {
  console.log("Payment cancelled:", payment.id);
  // await updateOrderStatus(payment.external_reference, 'cancelled');
}

async function handleInProcessPayment(payment: PaymentInfo) {
  console.log("Payment in process:", payment.id);
  // await updateOrderStatus(payment.external_reference, 'in_process');
}

async function handleChargebackPayment(payment: PaymentInfo) {
  console.log("Payment chargeback:", payment.id);
  // await updateOrderStatus(payment.external_reference, 'chargeback');
}
