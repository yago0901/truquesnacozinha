import { NextResponse } from "next/server";
import { MercadoPagoConfig, Payment } from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("📨 Dados recebidos do frontend:", JSON.stringify(body, null, 2));

    // ✅ IDENTIFICAR CORRETAMENTE OS MÉTODOS
    const isPix = body.payment_method_id === "bank_transfer" || body.payment_method_id === "pix";
    const isBoleto = body.payment_method_id === "bolbradesco";
    const isCreditCard = !isPix && !isBoleto;

    // ✅ VALIDAÇÃO BÁSICA
    const requiredFields = ["transaction_amount", "payment_method_id", "description", "payer"];
    if (isCreditCard) {
      requiredFields.push("token");
    }

    const missingFields = requiredFields.filter((field) => !body[field]);
    if (missingFields.length > 0) {
      return NextResponse.json({ 
        error: `Campos obrigatórios faltando: ${missingFields.join(", ")}`
      }, { status: 400 });
    }

    // ✅ CONSTRUIR PAYLOAD CORRETO PARA O MERCADO PAGO
    const mpPayload: any = {
      transaction_amount: body.transaction_amount,
      description: body.description,
      payment_method_id: body.payment_method_id,
      payer: {
        email: body.payer.email,
      }
    };

    // ✅ ADICIONAR CAMPOS ESPECÍFICOS
    if (isCreditCard) {
      mpPayload.token = body.token;
      mpPayload.installments = body.installments || 1;
      if (body.issuer_id) mpPayload.issuer_id = body.issuer_id;
    }

    if (body.payer.identification) {
      mpPayload.payer.identification = body.payer.identification;
    }

    // ✅ PARA PIX: ADICIONAR CAMPOS ESPECÍFICOS
    if (isPix) {
      mpPayload.payment_method_id = "pix"; // Forçar para "pix"
      // O Mercado Pago gera automaticamente os dados do PIX
    }

    console.log("📤 Payload para Mercado Pago:", JSON.stringify(mpPayload, null, 2));

    const payment = new Payment(client);
    const response = await payment.create({ body: mpPayload });

    console.log("✅ Resposta do Mercado Pago:", response);
    return NextResponse.json(response);

  } catch (error: any) {
    console.error("❌ Erro detalhado:", error);
    
    return NextResponse.json(
      {
        error: "Erro ao processar pagamento",
        details: error.message,
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}