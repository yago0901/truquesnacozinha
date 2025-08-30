import { MercadoPagoConfig, Preference } from 'mercadopago';
import { NextResponse } from 'next/server';

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!,
});

const productPrices: Record<string, number> = {
  A: 14.90,
  B: 17.90,
  C: 19.90,
  D: 39.90,
  E: 49.90,
};

export async function POST(req: Request) {
  try {
    const { productId } = await req.json();

    const unitPrice = productPrices[productId];
    if (!unitPrice) {
      return NextResponse.json(
        { error: "Produto inválido" },
        { status: 400 }
      );
    }

    const preference = new Preference(client);
    
    const result = await preference.create({
      body: {
        items: [
          {
            id: productId,
            title: 'Produto Exemplo',
            quantity: 1,
            currency_id: 'BRL',
            unit_price: unitPrice,
          },
        ],
        // Additional optional parameters
        back_urls: {
          success: 'https://truquesnacozinha.vercel.app/thanks',
          failure: 'https://yoursite.com/failure',
          pending: 'https://yoursite.com/pending'
        },
        // auto_return: 'approved',
      },
    });

    return NextResponse.json({ id: result.id });
  } catch (error) {
    console.error('Erro ao criar preferência:', error);
    return NextResponse.json(
      { error: 'Erro ao criar preferência' }, 
      { status: 500 }
    );
  }
}