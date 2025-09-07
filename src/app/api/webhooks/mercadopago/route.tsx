// // src/app/api/webhook/mercadopago/route.ts
// import { NextRequest, NextResponse } from 'next/server';
// import crypto from 'crypto';
// import { MercadoPagoConfig, Payment } from 'mercadopago';

// // Configure suas credenciais do Mercado Pago
// const MP_WEBHOOK_SECRET = process.env.MP_WEBHOOK_SECRET!;
// const NEXT_PUBLIC_MP_PUBLIC_KEY = process.env.NEXT_PUBLIC_MP_PUBLIC_KEY!;

// const client = new MercadoPagoConfig({
//   accessToken: NEXT_PUBLIC_MP_PUBLIC_KEY,
// });

// export async function POST(req: NextRequest) {
//   try {
//     // Ler o corpo da requisição
//     const body = await req.json();
    
//     // Verificar assinatura do webhook
//     const signature = req.headers.get('x-signature');
//     const signatureTs = req.headers.get('x-signature-ts');
    
//     if (!signature || !signatureTs) {
//       return NextResponse.json(
//         { error: 'Missing signature headers' },
//         { status: 400 }
//       );
//     }

//     // Validar assinatura
//     const isValid = verifySignature(
//       JSON.stringify(body),
//       signatureTs,
//       signature,
//       MP_WEBHOOK_SECRET
//     );

//     if (!isValid) {
//       return NextResponse.json(
//         { error: 'Invalid signature' },
//         { status: 401 }
//       );
//     }

//     // Processar o webhook
//     const { type, data } = body;

//     switch (type) {
//       case 'payment':
//         await handlePaymentWebhook(data.id);
//         break;
      
//       case 'plan':
//         await handlePlanWebhook(data.id);
//         break;
      
//       case 'subscription':
//         await handleSubscriptionWebhook(data.id);
//         break;
      
//       default:
//         console.log('Webhook type not handled:', type);
//     }

//     return NextResponse.json({ received: true }, { status: 200 });

//   } catch (error) {
//     console.error('Webhook error:', error);
//     return NextResponse.json(
//       { error: 'Internal server error' },
//       { status: 500 }
//     );
//   }
// }

// // Função para verificar a assinatura
// function verifySignature(
//   payload: string,
//   ts: string,
//   signature: string,
//   secret: string
// ): boolean {
//   const data = `${ts}.${payload}`;
//   const expectedSignature = crypto
//     .createHmac('sha256', secret)
//     .update(data)
//     .digest('hex');

//   return signature === expectedSignature;
// }

// // Função para processar pagamentos
// async function handlePaymentWebhook(paymentId: string) {
//   try {
//     // Buscar informações detalhadas do pagamento
//     const paymentInfo = await fetchPaymentDetails(paymentId);
    
//     console.log('Payment webhook received:', {
//       id: paymentInfo.id,
//       status: paymentInfo.status,
//       amount: paymentInfo.transaction_amount,
//       payer: paymentInfo.payer?.email
//     });

//     // Aqui você pode atualizar seu banco de dados
//     // Verificar status do pagamento e tomar ações
//     switch (paymentInfo.status) {
//       case 'approved':
//         await handleApprovedPayment(paymentInfo);
//         break;
      
//       case 'pending':
//         await handlePendingPayment(paymentInfo);
//         break;
      
//       case 'rejected':
//         await handleRejectedPayment(paymentInfo);
//         break;
      
//       case 'refunded':
//         await handleRefundedPayment(paymentInfo);
//         break;
      
//       case 'cancelled':
//         await handleCancelledPayment(paymentInfo);
//         break;
      
//       case 'in_process':
//         await handleInProcessPayment(paymentInfo);
//         break;
      
//       case 'charged_back':
//         await handleChargebackPayment(paymentInfo);
//         break;
//     }

//   } catch (error) {
//     console.error('Error handling payment webhook:', error);
//   }
// }

// // Buscar detalhes do pagamento na API do Mercado Pago
// async function fetchPaymentDetails(paymentId: string) {
//   const payment = new Payment(client);
  
//   try {
//     const paymentInfo = await payment.get({ id: paymentId });
//     return paymentInfo;
//   } catch (error) {
//     console.error('Error fetching payment details:', error);
//     throw error;
//   }
// }

// // Funções para diferentes status de pagamento
// async function handleApprovedPayment(payment: any) {
//   console.log('Payment approved:', payment.id);
//   // Exemplo: Atualizar status no seu banco de dados
//   // await updateOrderStatus(payment.external_reference, 'approved');
  
//   // Liberar acesso ao produto/serviço
//   // Enviar email de confirmação, etc.
// }

// async function handlePendingPayment(payment: any) {
//   console.log('Payment pending:', payment.id);
//   // Aguardar confirmação
//   // await updateOrderStatus(payment.external_reference, 'pending');
// }

// async function handleRejectedPayment(payment: any) {
//   console.log('Payment rejected:', payment.id);
//   // await updateOrderStatus(payment.external_reference, 'rejected');
//   // Notificar usuário sobre o pagamento rejeitado
// }

// async function handleRefundedPayment(payment: any) {
//   console.log('Payment refunded:', payment.id);
//   // await updateOrderStatus(payment.external_reference, 'refunded');
//   // Remover acesso ao produto/serviço
// }

// async function handleCancelledPayment(payment: any) {
//   console.log('Payment cancelled:', payment.id);
//   // await updateOrderStatus(payment.external_reference, 'cancelled');
// }

// async function handleInProcessPayment(payment: any) {
//   console.log('Payment in process:', payment.id);
//   // await updateOrderStatus(payment.external_reference, 'in_process');
// }

// async function handleChargebackPayment(payment: any) {
//   console.log('Payment chargeback:', payment.id);
//   // await updateOrderStatus(payment.external_reference, 'chargeback');
// }

// // Funções para outros tipos de webhook
// async function handlePlanWebhook(planId: string) {
//   console.log('Plan webhook received:', planId);
//   // Processar webhooks de planos
// }

// async function handleSubscriptionWebhook(subscriptionId: string) {
//   console.log('Subscription webhook received:', subscriptionId);
//   // Processar webhooks de assinaturas
// }

// // Configuração para desativar bodyParser padrão e aumentar limite de tamanho
// export const config = {
//   api: {
//     bodyParser: false,
//   },
//   maxDuration: 30, // Segundos - útil para funções mais longas
// };