// src/utils/emailSender.ts
import nodemailer from 'nodemailer';
import { PaymentInfo } from '@/app/api/webhooks/mercadopago/tipes';

const GMAIL_USER = process.env.GMAIL_USER!;
const GMAIL_PASS = process.env.GMAIL_PASS!;

// Configurar o transporter do nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_PASS,
  },
});

// Função para enviar e-mail com o produto
export async function sendProductEmail(to: string, payment: PaymentInfo) {
  try {
    const mailOptions = {
      from: `"Sua Empresa" <${GMAIL_USER}>`,
      to: to,
      subject: "Seu produto foi liberado! 🎉",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4CAF50;">Obrigado pela sua compra!</h2>
          <p>Seu pagamento foi confirmado e seu produto já está disponível.</p>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3>📦 Detalhes da Compra</h3>
            <p><strong>ID do Pagamento:</strong> ${payment.id}</p>
            <p><strong>Valor:</strong> R$ ${payment.transaction_amount}</p>
            <p><strong>Status:</strong> Aprovado ✅</p>
          </div>
          
          <div style="background-color: #e8f5e8; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3>🎁 Seu Produto</h3>
            <p><strong>Link de acesso:</strong> <a href="https://seusite.com/acesso-produto">Clique aqui para acessar</a></p>
            <p><strong>Instruções:</strong> Siga o guia anexo para começar a usar.</p>
          </div>
          
          <p style="color: #666; font-size: 14px;">
            Em caso de dúvidas, responda este e-mail ou entre em contato conosco.
          </p>
        </div>
      `,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log("E-mail enviado com sucesso:", result.messageId);
    return true;
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return false;
  }
}

// Função para enviar notificação interna sobre pagamentos pendentes
export async function sendInternalNotification(payment: any, status: string) {
  try {
    const mailOptions = {
      from: `"Sistema de Pagamentos" <${GMAIL_USER}>`,
      to: "seu-email@empresa.com", // Seu email para acompanhamento
      subject: `Pagamento ${status} requer atenção - ID: ${payment.id}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #FF9800;">Pagamento ${status}</h2>
          <p>Um pagamento requer atenção manual para conversão.</p>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3>📦 Detalhes da Compra</h3>
            <p><strong>ID do Pagamento:</strong> ${payment.id}</p>
            <p><strong>Valor:</strong> R$ ${payment.transaction_amount}</p>
            <p><strong>Status:</strong> ${status}</p>
            <p><strong>Cliente:</strong> ${payment.payer?.email}</p>
          </div>
          
          <div style="background-color: #fff3e0; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3>📞 Ações Recomendadas</h3>
            <p>Entre em contato com o cliente para oferecer suporte no processo de pagamento.</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("Notificação interna enviada para pagamento:", payment.id);
  } catch (error) {
    console.error("Erro ao enviar notificação interna:", error);
  }
}