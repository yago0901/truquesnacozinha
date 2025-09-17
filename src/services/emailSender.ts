// src/utils/emailSender.ts
import nodemailer from "nodemailer";
import { PaymentInfo } from "@/app/api/webhooks/mercadopago/tipes";
import { PRODUCT_FILES } from "@/util/mapproduct";
import path from "path";

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
    const amount = payment.transaction_amount?.toString();
    const product = PRODUCT_FILES[amount as keyof typeof PRODUCT_FILES];

    if (!product) {
      console.error("Produto não encontrado para o valor:", amount);
      return false;
    }

    // Preparar anexos
    const attachments = product.files.map((filePath) => {
      const fileName = path.basename(filePath);
      return {
        filename: fileName,
        path: path.join(process.cwd(), "public", filePath),
        contentType: "application/pdf",
      };
    });

    const mailOptions = {
      from: `"Dev Assina" <${GMAIL_USER}>`,
      to: to,
      subject: `${product.name} foi liberado! 🎉`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4CAF50;">Obrigado pela sua compra!</h2>
          <p>Seu pagamento foi confirmado e seu produto <strong>${product.name}</strong> já está disponível.</p>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3>📦 Detalhes da Compra</h3>
            <p><strong>Produto:</strong> ${product.name}</p>
            <p><strong>ID do Pagamento:</strong> ${payment.id}</p>
            <p><strong>Valor:</strong> R$ ${payment.transaction_amount}</p>
            <p><strong>Status:</strong> Aprovado ✅</p>
          </div>
          
          <div style="background-color: #e8f5e8; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3>🎁 Seu Produto</h3>
            <p>Seu produto contém ${product.files.length} arquivo(s) anexo(s) neste e-mail:</p>
            <ul>
              ${product.files.map((file) => `<li>${path.basename(file)}</li>`).join("")}
            </ul>
            <p><strong>Instruções:</strong> Baixe os anexos e veja os Truques na Cozinha.</p>
          </div>
          
          <p style="color: #666; font-size: 14px;">
            Em caso de dúvidas, responda este e-mail ou entre em contato conosco 11966557177.
          </p>
        </div>
      `,
      attachments: attachments,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log("E-mail enviado com sucesso:", result.messageId);
    return true;
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return false;
  }
}
